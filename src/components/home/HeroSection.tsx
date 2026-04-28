import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/useLanguage'

const primaryStack = ['React', 'TypeScript', '.NET', 'Angular', 'PostgreSQL']

function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="home-hero section">
      <div className="home-hero__content">
        <div className="home-hero__badges" aria-label={t.home.hero.stackLabel}>
          {primaryStack.map((technology) => (
            <span className="badge" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <h1>{t.home.hero.title}</h1>
        <p className="home-hero__subtitle">{t.home.hero.subtitle}</p>

        <div className="home-hero__actions">
          <Link to="/contact" className="button">
            {t.common.contactMe}
          </Link>
          <Link to="/portfolio" className="button button--secondary">
            {t.common.viewProjects}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
