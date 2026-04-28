import type { Project } from '../../pages/Portfolio'
import { useLanguage } from '../../i18n/useLanguage'

type ProjectCardProps = {
  project: Project
}

function ProjectLink({
  href,
  label,
  projectTitle,
  unavailable,
  projectLinkLabel,
}: {
  href?: string
  label: string
  projectTitle: string
  unavailable: string
  projectLinkLabel: string
}) {
  if (!href) {
    return (
      <span className="project-card__link project-card__link--disabled" aria-disabled="true">
        {label} {unavailable}
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="project-card__link"
      aria-label={`${label} ${projectLinkLabel} ${projectTitle}`}
    >
      {label}
    </a>
  )
}

function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage()

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

      <div className="portfolio-card__stack" aria-label={`${t.common.techStack} ${project.title}`}>
        {project.stack.map((technology) => (
          <span className="badge" key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <div className="portfolio-card__links">
        <ProjectLink
          href={project.githubUrl}
          label="GitHub"
          projectTitle={project.title}
          unavailable={t.portfolio.unavailable}
          projectLinkLabel={t.portfolio.projectLinkLabel}
        />
        <ProjectLink
          href={project.demoUrl}
          label="Demo"
          projectTitle={project.title}
          unavailable={t.portfolio.unavailable}
          projectLinkLabel={t.portfolio.projectLinkLabel}
        />
        <ProjectLink
          href={project.detailsUrl}
          label={t.portfolio.detailsLabel}
          projectTitle={project.title}
          unavailable={t.portfolio.unavailable}
          projectLinkLabel={t.portfolio.projectLinkLabel}
        />
      </div>
    </article>
  )
}

export default ProjectCard
