import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { sendContactMessage } from '../email/SendEmail'
import './Contact.css'

type ContactFormValues = {
  name: string
  email: string
  message: string
  privacy: boolean
}

const subject = 'Nuova richiesta dal sito web'

function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
      privacy: false,
    },
  })

  const onSubmit: SubmitHandler<ContactFormValues> = async (values) => {
    setSubmitStatus('idle')

    try {
      await sendContactMessage({
        name: values.name,
        email: values.email,
        subject,
        message: values.message,
      })
      setSubmitStatus('success')
      reset()
    } catch {
      setSubmitStatus('error')
    }
  }

  return (
    <>
      <section className="section contact-hero">
        <div className="contact-hero__content">
          <span className="contact-kicker">Contact</span>
          <h1>Parliamo del tuo progetto web.</h1>
          <p>
            Hai bisogno di una web app, un gestionale, un CRM o un supporto tecnico
            frontend/backend? Scrivimi qualche dettaglio e ti ricontattero.
          </p>
        </div>
      </section>

      <section className="section contact-content">
        <aside className="contact-info card" aria-label="Informazioni di contatto">
          <span className="contact-kicker">Info</span>
          <h2>Disponibile per collaborazioni freelance</h2>
          <dl className="contact-info__list">
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:arfini.enrico@gmail.com">arfini.enrico@gmail.com</a>
              </dd>
            </div>
            <div>
              <dt>Disponibilita</dt>
              <dd>Progetti freelance, consulenza e supporto tecnico.</dd>
            </div>
            <div>
              <dt>Localita</dt>
              <dd>Italia / remoto</dd>
            </div>
          </dl>
        </aside>

        <form className="contact-form card" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="contact-form__field">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              aria-invalid={errors.name ? 'true' : 'false'}
              {...register('name', {
                required: 'Il nome e obbligatorio.',
                minLength: {
                  value: 2,
                  message: 'Il nome deve contenere almeno 2 caratteri.',
                },
              })}
            />
            {errors.name && <p className="contact-form__error">{errors.name.message}</p>}
          </div>

          <div className="contact-form__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              aria-invalid={errors.email ? 'true' : 'false'}
              {...register('email', {
                required: 'L email e obbligatoria.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Inserisci un indirizzo email valido.',
                },
              })}
            />
            {errors.email && <p className="contact-form__error">{errors.email.message}</p>}
          </div>

          <div className="contact-form__field">
            <label htmlFor="message">Messaggio</label>
            <textarea
              id="message"
              rows={7}
              aria-invalid={errors.message ? 'true' : 'false'}
              {...register('message', {
                required: 'Il messaggio e obbligatorio.',
                minLength: {
                  value: 10,
                  message: 'Il messaggio deve contenere almeno 10 caratteri.',
                },
              })}
            />
            {errors.message && <p className="contact-form__error">{errors.message.message}</p>}
          </div>

          <div className="contact-form__privacy">
            <input
              id="privacy"
              type="checkbox"
              aria-invalid={errors.privacy ? 'true' : 'false'}
              {...register('privacy', {
                required: 'Devi accettare per inviare la richiesta.',
              })}
            />
            <label htmlFor="privacy">
              Accetto di essere ricontattato in merito alla mia richiesta.
            </label>
          </div>
          {errors.privacy && <p className="contact-form__error">{errors.privacy.message}</p>}

          <button type="submit" className="button contact-form__submit" disabled={isSubmitting}>
            {isSubmitting && <span className="contact-form__spinner" aria-hidden="true" />}
            {isSubmitting ? 'Invio in corso' : 'Invia messaggio'}
          </button>

          {submitStatus === 'success' && (
            <p className="contact-form__feedback contact-form__feedback--success" role="status">
              Messaggio inviato correttamente. Ti ricontattero appena possibile.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="contact-form__feedback contact-form__feedback--error" role="alert">
              Qualcosa non ha funzionato. Riprova tra poco.
            </p>
          )}
        </form>
      </section>
    </>
  )
}

export default Contact
