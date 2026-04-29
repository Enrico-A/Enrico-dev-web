export type ContactMessagePayload = {
  name: string
  email: string
  subject: string
  message: string
  website?: string
}

export async function sendContactMessage(payload: ContactMessagePayload) {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Invio non riuscito')
  }

  return {
    ok: true,
  }
}
