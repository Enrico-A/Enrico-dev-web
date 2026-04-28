import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from 'react-email'
import logoMinimal from '../assets/images/logo_minimal.png'

export type ContactEmailPayload = {
  name: string
  email: string
  subject: string
  message: string
}

function Message({ name, email, subject, message }: ContactEmailPayload) {
  return (
    <Html lang="it">
      <Head />
      <Preview>{subject}</Preview>
      <Tailwind>
        <Body className="m-0 bg-[#f6f7f4] px-4 py-8 font-sans text-[#5c6674]">
          <Container className="mx-auto max-w-[640px]">
            <Section className="mb-7 text-center">
              <Img
                src={logoMinimal}
                alt="Enrico Dev Web"
                width="200"
                className="mx-auto h-auto w-[200px]"
              />
            </Section>

            <Section className="rounded-lg border border-solid border-[#d8dee6] bg-white p-7">
              <Text className="m-0 mb-3 text-xs font-bold uppercase tracking-[0.08em] text-[#f97316]">
                Enrico Dev Web
              </Text>

              <Heading className="m-0 mb-2 text-[28px] font-bold leading-tight text-[#0f766e]">
                Nuovo messaggio!
              </Heading>

              <Text className="m-0 mb-7 text-[15px] leading-6 text-[#5c6674]">{subject}</Text>

              <Section className="mb-5 rounded-md border border-solid border-[#d8dee6] bg-[#f6f7f4] p-4">
                <Text className="m-0 mb-1 text-[13px] font-bold uppercase tracking-[0.04em] text-[#111827]">
                  Nome
                </Text>
                <Text className="m-0 text-[16px] leading-6 text-[#5c6674]">{name}</Text>
              </Section>

              <Section className="mb-5 rounded-md border border-solid border-[#d8dee6] bg-[#f6f7f4] p-4">
                <Text className="m-0 mb-1 text-[13px] font-bold uppercase tracking-[0.04em] text-[#111827]">
                  Email
                </Text>
                <Text className="m-0 text-[16px] leading-6 text-[#5c6674]">{email}</Text>
              </Section>

              <Section className="rounded-md border border-solid border-[#d8dee6] bg-[#f6f7f4] p-4">
                <Text className="m-0 mb-1 text-[13px] font-bold uppercase tracking-[0.04em] text-[#111827]">
                  Messaggio
                </Text>
                <Text className="m-0 whitespace-pre-line text-[16px] leading-7 text-[#5c6674]">
                  {message}
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default Message
