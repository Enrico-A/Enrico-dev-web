import { Link } from 'react-router-dom'

type FeaturedProject = {
  title: string
  description: string
  stack: string[]
}

const projects: FeaturedProject[] = [
  {
    title: 'AlphaShop Web App',
    description:
      'Piattaforma e-commerce con dashboard operativa, gestione catalogo e flussi checkout.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'CRM Enterprise',
    description:
      'Sistema CRM modulare per team sales e support, con ruoli, pipeline e reportistica.',
    stack: ['Angular', '.NET', 'C#', 'SQL'],
  },
  {
    title: 'Healthcare Collaboration Platform',
    description:
      'Applicazione collaborativa per coordinare dati, attività e comunicazioni tra reparti.',
    stack: ['React', 'Azure', '.NET', 'MySQL'],
  },
]

function ProjectCard({ title, description, stack }: FeaturedProject) {
  return (
    <article className="card project-card">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="project-card__stack" aria-label={`Stack ${title}`}>
        {stack.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <Link to="/portfolio" className="project-card__link">
        Vai al portfolio
      </Link>
    </article>
  )
}

function FeaturedProjects() {
  return (
    <section className="section home-section">
      <div className="home-section__heading home-section__heading--split">
        <div>
          <span className="section-kicker">Progetti</span>
          <h2>Progetti in evidenza</h2>
        </div>
        <Link to="/portfolio" className="home-section__link">
          Vedi tutti
        </Link>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects
