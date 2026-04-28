import { Link } from 'react-router-dom'
import ProcessStep from '../components/services/ProcessStep'
import ServiceCard from '../components/services/ServiceCard'
import { useLanguage } from '../i18n/useLanguage'
import './Services.css'

export type Service = {
  title: string
  description: string
  points: readonly string[]
  technologies: readonly string[]
}

export type Step = {
  title: string
  description: string
}

function Services() {
  const { t } = useLanguage()

  return (
    <>
      <section className="section services-hero">
        <div className="services-hero__content">
          <span className="services-kicker">{t.services.hero.kicker}</span>
          <h1>{t.services.hero.title}</h1>
          <p>{t.services.hero.body}</p>
          <Link to="/contact" className="button">
            {t.common.contactMe}
          </Link>
        </div>
      </section>

      <section className="section services-section">
        <div className="services-section__heading">
          <span className="services-kicker">{t.services.sections.servicesKicker}</span>
          <h2>{t.services.sections.servicesTitle}</h2>
        </div>

        <div className="services-grid">
          {t.services.services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="section services-process">
        <div className="services-section__heading">
          <span className="services-kicker">{t.services.sections.processKicker}</span>
          <h2>{t.services.sections.processTitle}</h2>
        </div>

        <div className="process-grid">
          {t.services.process.map((step, index) => (
            <ProcessStep key={step.title} step={step} index={index + 1} />
          ))}
        </div>
      </section>

      <section className="section services-fit">
        <div className="services-section__heading">
          <span className="services-kicker">{t.services.sections.fitKicker}</span>
          <h2>{t.services.sections.fitTitle}</h2>
        </div>

        <div className="services-fit__grid">
          {t.services.usefulFor.map((item) => (
            <article className="card services-fit__card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section services-cta">
        <div>
          <span className="services-kicker">{t.services.cta.kicker}</span>
          <h2>{t.services.cta.title}</h2>
          <p>{t.services.cta.body}</p>
        </div>
        <Link to="/contact" className="button">
          {t.common.contactMe}
        </Link>
      </section>
    </>
  )
}

export default Services
