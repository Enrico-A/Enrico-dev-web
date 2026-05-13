import type { ServerResponse } from 'node:http'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
function localApiPlugin(): Plugin {
  return {
    name: 'local-api-send-email',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/send-email', async (req, res, next) => {
        try {
          const { default: handler } = await import('./api/send-email')
          const response = res as ServerResponse & {
            status: (statusCode: number) => typeof response
            json: (body: unknown) => void
          }

          response.status = (statusCode: number) => {
            response.statusCode = statusCode
            return response
          }

          response.json = (body: unknown) => {
            response.setHeader('Content-Type', 'application/json')
            response.end(JSON.stringify(body))
          }

          await handler(req, response)
        } catch (error) {
          next(error)
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  for (const key of ['EMAIL_USER', 'EMAIL_PASS', 'EMAIL_TO']) {
    process.env[key] ||= env[key]
  }

  return {
    plugins: [react(), localApiPlugin()],
  }
})
