import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/useLanguage'

function CtaSection() {
  const { t } = useLanguage()

  return (
    <section className="section home-cta">
      <div className="home-cta__content">
        <span className="section-kicker">{t.home.cta.kicker}</span>
        <h2>{t.home.cta.title}</h2>
        <p>{t.home.cta.body}</p>
      </div>
      <Link to="/contact" className="button">
        {t.common.contactMe}
      </Link>
    </section>
  )
}

export default CtaSection
