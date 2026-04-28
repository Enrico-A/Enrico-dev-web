import type { Project } from '../../pages/Portfolio'

type ProjectCardProps = {
  project: Project
}

function ProjectLink({ href, label }: { href?: string; label: string }) {
  if (!href) {
    return (
      <span className="project-card__link project-card__link--disabled" aria-disabled="true">
        {label}
      </span>
    )
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className="project-card__link">
      {label}
    </a>
  )
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card portfolio-card">
      <div className="portfolio-card__top">
        <span className="portfolio-card__type">{project.type}</span>
        <span className="portfolio-card__status">{project.status}</span>
      </div>

      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <ul className="portfolio-card__highlights">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="portfolio-card__stack" aria-label={`Stack ${project.title}`}>
        {project.stack.map((technology) => (
          <span className="badge" key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <div className="portfolio-card__links">
        <ProjectLink href={project.githubUrl} label="GitHub" />
        <ProjectLink href={project.demoUrl} label="Demo" />
        <ProjectLink href={project.detailsUrl} label="Dettagli" />
      </div>
    </article>
  )
}

export default ProjectCard
