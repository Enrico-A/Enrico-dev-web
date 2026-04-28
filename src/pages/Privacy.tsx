import { useLanguage } from '../i18n/useLanguage'

function Privacy() {
  const { t } = useLanguage()

  return (
    <section className="page-section">
      <p className="eyebrow">{t.legal.privacy.eyebrow}</p>
      <h1>{t.legal.privacy.title}</h1>
      <p className="lead">{t.legal.privacy.body}</p>
    </section>
  )
}

export default Privacy
