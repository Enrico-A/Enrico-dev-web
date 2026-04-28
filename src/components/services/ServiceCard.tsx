import type { Service } from '../../pages/Services'
import { useLanguage } from '../../i18n/useLanguage'

type ServiceCardProps = {
  service: Service
}

function ServiceCard({ service }: ServiceCardProps) {
  const { t } = useLanguage()

  return (
    <article className="card service-card">
      <div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>

      <ul className="service-card__points">
        {service.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div
        className="service-card__badges"
        aria-label={`${t.common.technologies} ${service.title}`}
      >
        {service.technologies.map((technology) => (
          <span className="badge" key={technology}>
            {technology}
          </span>
        ))}
      </div>
    </article>
  )
}

export default ServiceCard
