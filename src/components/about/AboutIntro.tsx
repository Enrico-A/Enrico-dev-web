import { useLanguage } from '../../i18n/useLanguage'
import profileImage from '../../assets/images/EA.jpg'

function AboutIntro() {
  const { t } = useLanguage()

  return (
    <section className="section about-hero">
      <div className="about-hero__content">
        <span className="about-kicker">{t.about.hero.kicker}</span>
        <h1>{t.about.hero.title}</h1>
        <p>{t.about.hero.body}</p>
      </div>
      <figure className="about-hero__media">
        <img src={profileImage} alt="Enrico Arfini" />
      </figure>
    </section>
  )
}

export default AboutIntro
