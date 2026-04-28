export type ContactMessagePayload = {
  name: string
  email: string
  subject: string
  message: string
}

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL as string | undefined

function wait(ms: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

export async function sendContactMessage(payload: ContactMessagePayload) {
  if (!CONTACT_API_URL) {
    await wait(1200)
    return {
      ok: true,
    }
  }

  const response = await fetch(CONTACT_API_URL, {
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
