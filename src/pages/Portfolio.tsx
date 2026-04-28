import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/portfolio/ProjectCard'
import ProjectFilters from '../components/portfolio/ProjectFilters'
import { useLanguage } from '../i18n/useLanguage'
import './Portfolio.css'

export type ProjectFilter =
  | 'all'
  | 'frontend'
  | 'fullstack'
  | 'backend'
  | 'enterprise'
  | 'healthcare'

export type ProjectFilterOption = {
  id: ProjectFilter
  label: string
}

export type Project = {
  title: string
  type: string
  description: string
  stack: readonly string[]
  highlights: readonly string[]
  status: string
  filters: readonly Exclude<ProjectFilter, 'all'>[]
  githubUrl?: string
  demoUrl?: string
  detailsUrl?: string
}

function Portfolio() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all')
  const filters = t.portfolio.filters as readonly ProjectFilterOption[]
  const projects = t.portfolio.projects as readonly Project[]

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects
    }

    return projects.filter((project) => project.filters.includes(activeFilter))
  }, [activeFilter, projects])

  return (
    <>
      <section className="section portfolio-hero">
        <div className="portfolio-hero__content">
          <span className="portfolio-kicker">{t.portfolio.hero.kicker}</span>
          <h1>{t.portfolio.hero.title}</h1>
          <p>{t.portfolio.hero.body}</p>
        </div>
      </section>

      <section className="section portfolio-section">
        <div className="portfolio-section__heading">
          <div>
            <span className="portfolio-kicker">{t.portfolio.section.kicker}</span>
            <h2>{t.portfolio.section.title}</h2>
          </div>

          <ProjectFilters
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        <div className="portfolio-grid" aria-label={t.portfolio.liveLabel} aria-live="polite">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="section portfolio-cta">
        <div>
          <span className="portfolio-kicker">{t.portfolio.cta.kicker}</span>
          <h2>{t.portfolio.cta.title}</h2>
          <p>{t.portfolio.cta.body}</p>
        </div>
        <Link to="/contact" className="button">
          {t.common.contactMe}
        </Link>
      </section>
    </>
  )
}

export default Portfolio
