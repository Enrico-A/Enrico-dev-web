import type { IncomingMessage, ServerResponse } from 'node:http'
import nodemailer from 'nodemailer'

type ServerlessRequest = IncomingMessage & {
  body?: unknown
}

type ServerlessResponse = ServerResponse & {
  status: (statusCode: number) => ServerlessResponse
  json: (body: unknown) => void
}

type ContactEmailPayload = {
  name: string
  email: string
  subject: string
  message: string
  website: string
}

const FAILURE_RESPONSE = {
  success: false,
  message: 'Messaggio non inviato',
}

const SUCCESS_RESPONSE = {
  success: true,
  message: 'Messaggio inviato correttamente',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5

const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

function readString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function parsePayload(body: unknown): ContactEmailPayload | null {
  const rawPayload = typeof body === 'string' ? safeJsonParse(body) : body

  if (!rawPayload || typeof rawPayload !== 'object') {
    return null
  }

  const payload = rawPayload as Record<string, unknown>

  return {
    name: readString(payload.name),
    email: readString(payload.email),
    subject: readString(payload.subject),
    message: readString(payload.message),
    website: readString(payload.website),
  }
}

function safeJsonParse(value: string) {
  try {
    return JSON.parse(value) as unknown
  } catch {
    return null
  }
}

function readRawBody(req: IncomingMessage) {
  return new Promise<string>((resolve, reject) => {
    const chunks: Buffer[] = []

    req.on('data', (chunk: Buffer | string) => {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
    })

    req.on('end', () => {
      resolve(Buffer.concat(chunks).toString('utf8'))
    })

    req.on('error', reject)
  })
}

async function getRequestBody(req: ServerlessRequest) {
  if (req.body !== undefined) {
    return req.body
  }

  const rawBody = await readRawBody(req)
  return rawBody.length > 0 ? rawBody : null
}

function isValidPayload(payload: ContactEmailPayload) {
  return (
    payload.name.length >= 2 &&
    EMAIL_PATTERN.test(payload.email) &&
    payload.subject.length >= 3 &&
    payload.message.length >= 10
  )
}

function isHoneypotFilled(payload: ContactEmailPayload) {
  return payload.website.length > 0
}

function getClientIp(req: ServerlessRequest) {
  const forwardedFor = req.headers['x-forwarded-for']
  const realIp = req.headers['x-real-ip']

  if (typeof forwardedFor === 'string') {
    return forwardedFor.split(',')[0]?.trim() || 'unknown'
  }

  if (Array.isArray(forwardedFor) && forwardedFor[0]) {
    return forwardedFor[0].split(',')[0]?.trim() || 'unknown'
  }

  if (typeof realIp === 'string') {
    return realIp
  }

  return req.socket.remoteAddress || 'unknown'
}

function isRateLimited(req: ServerlessRequest) {
  const now = Date.now()
  const clientIp = getClientIp(req)

  for (const [key, record] of rateLimitStore) {
    if (record.resetAt <= now) {
      rateLimitStore.delete(key)
    }
  }

  const currentRecord = rateLimitStore.get(clientIp)

  if (!currentRecord) {
    rateLimitStore.set(clientIp, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })
    return false
  }

  if (currentRecord.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true
  }

  currentRecord.count += 1
  return false
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function renderMessageHtml({ name, email, subject, message }: ContactEmailPayload) {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeSubject = escapeHtml(subject)
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br />')

  return `
    <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6;">
      <h1 style="font-size: 22px; margin: 0 0 16px;">Nuovo messaggio dal portfolio</h1>
      <p><strong>Nome:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Oggetto:</strong> ${safeSubject}</p>
      <div style="margin-top: 20px;">
        <strong>Messaggio:</strong>
        <p style="white-space: normal;">${safeMessage}</p>
      </div>
    </div>
  `
}

function renderMessageText({ name, email, subject, message }: ContactEmailPayload) {
  return [
    'Nuovo messaggio dal portfolio',
    '',
    `Nome: ${name}`,
    `Email: ${email}`,
    `Oggetto: ${subject}`,
    '',
    'Messaggio:',
    message,
  ].join('\n')
}

export default async function handler(req: ServerlessRequest, res: ServerlessResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json(FAILURE_RESPONSE)
  }

  const payload = parsePayload(await getRequestBody(req))

  if (!payload || !isValidPayload(payload) || isHoneypotFilled(payload)) {
    return res.status(400).json(FAILURE_RESPONSE)
  }

  if (isRateLimited(req)) {
    return res.status(429).json(FAILURE_RESPONSE)
  }

  const emailUser = process.env.EMAIL_USER
  const emailPass = process.env.EMAIL_PASS
  const emailTo = process.env.EMAIL_TO

  if (!emailUser || !emailPass || !emailTo) {
    console.error('Email send failed: missing server environment variables.')
    return res.status(500).json(FAILURE_RESPONSE)
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  })

  try {
    await transporter.sendMail({
      from: emailUser,
      to: emailTo,
      replyTo: payload.email,
      subject: `Portfolio contact: ${payload.subject}`,
      html: renderMessageHtml(payload),
      text: renderMessageText(payload),
    })

    return res.status(200).json(SUCCESS_RESPONSE)
  } catch (error) {
    console.error('Email send failed.', error instanceof Error ? error.message : error)
    return res.status(500).json(FAILURE_RESPONSE)
  }
}
