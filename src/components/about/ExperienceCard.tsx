type Experience = {
  context: string
  role: string
  description: string
  technologies: string[]
  highlights: string[]
}

type ExperienceCardProps = {
  experience: Experience
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="card experience-card">
      <div className="experience-card__header">
        <span className="experience-card__context">{experience.context}</span>
        <h3>{experience.role}</h3>
        <p>{experience.description}</p>
      </div>

      <ul className="experience-card__highlights">
        {experience.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="experience-card__tech" aria-label={`Tecnologie ${experience.context}`}>
        {experience.technologies.map((technology) => (
          <span className="badge" key={technology}>
            {technology}
          </span>
        ))}
      </div>
    </article>
  )
}

export default ExperienceCard
