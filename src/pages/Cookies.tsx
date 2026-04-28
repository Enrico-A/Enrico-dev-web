import { useLanguage } from '../i18n/useLanguage'

function Cookies() {
  const { t } = useLanguage()

  return (
    <section className="page-section">
      <p className="eyebrow">{t.legal.cookies.eyebrow}</p>
      <h1>{t.legal.cookies.title}</h1>
      <p className="lead">{t.legal.cookies.body}</p>
    </section>
  )
}

export default Cookies
