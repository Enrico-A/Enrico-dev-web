import { useLanguage } from '../../i18n/useLanguage'

type ValueCardData = {
  icon: string
  title: string
  description: string
}

function ValueCard({ icon, title, description }: ValueCardData) {
  return (
    <article className="card value-card">
      <span className="value-card__icon" aria-hidden="true">
        {icon}
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

function ValueSection() {
  const { t } = useLanguage()

  return (
    <section className="section home-section home-band home-band--cool">
      <div className="home-section__heading">
        <span className="section-kicker">{t.home.value.kicker}</span>
        <h2>{t.home.value.title}</h2>
      </div>

      <div className="value-grid">
        {t.home.value.cards.map((value) => (
          <ValueCard key={value.title} {...value} />
        ))}
      </div>
    </section>
  )
}

export default ValueSection
