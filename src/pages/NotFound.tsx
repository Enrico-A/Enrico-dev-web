import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'

function NotFound() {
  const { t } = useLanguage()

  return (
    <section className="page-section">
      <h1>{t.notFound.title}</h1>
      <p>{t.notFound.body}</p>
      <Link to="/">{t.notFound.link}</Link>
    </section>
  )
}

export default NotFound
