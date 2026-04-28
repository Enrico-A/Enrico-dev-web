import { useLanguage } from '../../i18n/useLanguage'

function TechStack() {
  const { t } = useLanguage()

  return (
    <section className="section home-section tech-preview">
      <div className="home-section__heading">
        <span className="section-kicker">{t.home.tech.kicker}</span>
        <h2>{t.home.tech.title}</h2>
      </div>

      <div className="tech-list" aria-label={t.home.tech.label}>
        {t.home.tech.technologies.map((technology) => (
          <span className="badge tech-list__item" key={technology}>
            {technology}
          </span>
        ))}
      </div>
    </section>
  )
}

export default TechStack
