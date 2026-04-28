import { useLanguage } from '../../i18n/useLanguage'

function AboutIntro() {
  const { t } = useLanguage()

  return (
    <section className="section about-hero">
      <div className="about-hero__content">
        <span className="about-kicker">{t.about.hero.kicker}</span>
        <h1>{t.about.hero.title}</h1>
        <p>{t.about.hero.body}</p>
      </div>
    </section>
  )
}

export default AboutIntro
