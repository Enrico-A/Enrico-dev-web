import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/useLanguage'

type FeaturedProject = {
  title: string
  description: string
  stack: readonly string[]
}

function ProjectCard({ title, description, stack }: FeaturedProject) {
  const { t } = useLanguage()

  return (
    <article className="card project-card">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="project-card__stack" aria-label={`${t.common.techStack} ${title}`}>
        {stack.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <Link to="/portfolio" className="project-card__link">
        {t.home.featured.cardLink}
      </Link>
    </article>
  )
}

function FeaturedProjects() {
  const { t } = useLanguage()

  return (
    <section className="section home-section home-band home-band--cool">
      <div className="home-section__heading home-section__heading--split">
        <div>
          <span className="section-kicker">{t.home.featured.kicker}</span>
          <h2>{t.home.featured.title}</h2>
        </div>
        <Link to="/portfolio" className="home-section__link">
          {t.common.viewAll}
        </Link>
      </div>

      <div className="projects-grid">
        {t.home.featured.projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects
