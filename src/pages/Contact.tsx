import { useState } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { sendContactMessage } from '../email/SendEmail'
import { useLanguage } from '../i18n/useLanguage'
import './Contact.css'

type ContactFormValues = {
  name: string
  email: string
  message: string
  website: string
  privacy: boolean
}

function Contact() {
  const { t } = useLanguage()
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
      website: '',
      privacy: false,
    },
  })

  const onSubmit: SubmitHandler<ContactFormValues> = async (values) => {
    setSubmitStatus('idle')

    try {
      await sendContactMessage({
        name: values.name,
        email: values.email,
        subject: t.contact.emailSubject,
        message: values.message,
        website: values.website,
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
          <span className="contact-kicker">{t.contact.hero.kicker}</span>
          <h1>{t.contact.hero.title}</h1>
          <p>{t.contact.hero.body}</p>
        </div>
      </section>

      <section className="section contact-content">
        <aside className="contact-info card" aria-label={t.contact.info.ariaLabel}>
          <span className="contact-kicker">{t.contact.info.kicker}</span>
          <h2>{t.contact.info.title}</h2>
          <dl className="contact-info__list">
            <div>
              <dt>{t.contact.info.email}</dt>
              <dd>
                <a href="mailto:arfini.enrico@gmail.com">arfini.enrico@gmail.com</a>
              </dd>
            </div>
            <div>
              <dt>{t.contact.info.availability}</dt>
              <dd>{t.contact.info.availabilityText}</dd>
            </div>
            <div>
              <dt>{t.contact.info.location}</dt>
              <dd>{t.contact.info.locationText}</dd>
            </div>
          </dl>
        </aside>

        <form className="contact-form card" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="contact-form__honeypot" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
          </div>

          <div className="contact-form__field">
            <label htmlFor="name">{t.contact.form.name}</label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
              {...register('name', {
                required: t.contact.form.validation.nameRequired,
                minLength: {
                  value: 2,
                  message: t.contact.form.validation.nameMin,
                },
              })}
            />
            {errors.name && (
              <p id="name-error" className="contact-form__error" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="contact-form__field">
            <label htmlFor="email">{t.contact.form.email}</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
              {...register('email', {
                required: t.contact.form.validation.emailRequired,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t.contact.form.validation.emailPattern,
                },
              })}
            />
            {errors.email && (
              <p id="email-error" className="contact-form__error" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="contact-form__field">
            <label htmlFor="message">{t.contact.form.message}</label>
            <textarea
              id="message"
              rows={7}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
              {...register('message', {
                required: t.contact.form.validation.messageRequired,
                minLength: {
                  value: 10,
                  message: t.contact.form.validation.messageMin,
                },
              })}
            />
            {errors.message && (
              <p id="message-error" className="contact-form__error" role="alert">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="contact-form__privacy">
            <input
              id="privacy"
              type="checkbox"
              aria-invalid={errors.privacy ? 'true' : 'false'}
              aria-describedby={errors.privacy ? 'privacy-error' : undefined}
              {...register('privacy', {
                required: t.contact.form.validation.privacyRequired,
              })}
            />
            <label htmlFor="privacy">{t.contact.form.privacy}</label>
          </div>
          {errors.privacy && (
            <p id="privacy-error" className="contact-form__error" role="alert">
              {errors.privacy.message}
            </p>
          )}

          <button type="submit" className="button contact-form__submit" disabled={isSubmitting}>
            {isSubmitting && <span className="contact-form__spinner" aria-hidden="true" />}
            {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
          </button>

          {submitStatus === 'success' && (
            <p className="contact-form__feedback contact-form__feedback--success" role="status">
              {t.contact.form.success}
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="contact-form__feedback contact-form__feedback--error" role="alert">
              {t.contact.form.error}
            </p>
          )}
        </form>
      </section>
    </>
  )
}

export default Contact
