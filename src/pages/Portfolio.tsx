import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/portfolio/ProjectCard'
import ProjectFilters from '../components/portfolio/ProjectFilters'
import './Portfolio.css'

export type ProjectFilter =
  | 'Tutti'
  | 'Frontend'
  | 'Full-stack'
  | 'Backend'
  | 'Enterprise'
  | 'Healthcare'

export type ProjectStatus = 'Demo' | 'Case study' | 'In sviluppo'

export type Project = {
  title: string
  type: string
  description: string
  stack: string[]
  highlights: string[]
  status: ProjectStatus
  filters: Exclude<ProjectFilter, 'Tutti'>[]
  githubUrl?: string
  demoUrl?: string
  detailsUrl?: string
}

const filters: ProjectFilter[] = [
  'Tutti',
  'Frontend',
  'Full-stack',
  'Backend',
  'Enterprise',
  'Healthcare',
]

const projects: Project[] = [
  {
    title: 'AlphaShop Web App',
    type: 'Full-stack / Web App',
    description:
      'Applicazione web per gestione articoli, ricerca prodotti, modifica dati e interazione con API backend.',
    stack: ['Angular', 'TypeScript', '.NET', 'SQL Server'],
    highlights: [
      'Gestione articoli e dati prodotto.',
      'Ricerca e modifica informazioni da interfaccia web.',
      'Interazione con API backend.',
    ],
    status: 'Demo',
    filters: ['Full-stack', 'Frontend', 'Backend'],
  },
  {
    title: 'CRM Enterprise / Process Management',
    type: 'Enterprise / Backend / Integration',
    description:
      'Soluzione gestionale/CRM per processi aziendali, flussi interni, dati di produzione e integrazione con sistemi esistenti.',
    stack: ['.NET', 'C#', 'Database relazionali', 'API'],
    highlights: [
      'Supporto a processi aziendali e flussi interni.',
      'Gestione dati legati alla produzione.',
      'Integrazione con sistemi esistenti.',
    ],
    status: 'Case study',
    filters: ['Enterprise', 'Backend'],
  },
  {
    title: 'Healthcare Collaboration Platform',
    type: 'Healthcare / Web App',
    description:
      'Piattaforma web per collaborazione tra specialisti, condivisione di immagini DICOM anonimizzate e supporto a processi clinici specialistici.',
    stack: ['Web App', 'DICOM', 'Backend API', 'Database'],
    highlights: [
      'Collaborazione tra specialisti.',
      'Condivisione di immagini DICOM anonimizzate.',
      'Supporto a processi clinici specialistici.',
    ],
    status: 'In sviluppo',
    filters: ['Healthcare', 'Full-stack', 'Backend'],
  },
  {
    title: 'Personal Portfolio Website',
    type: 'Frontend / Portfolio',
    description:
      'Sito portfolio personale sviluppato con React, TypeScript e Vite, orientato a performance, responsive design e presentazione professionale.',
    stack: ['React', 'TypeScript', 'Vite', 'CSS'],
    highlights: [
      'Routing e layout responsive.',
      'Design system leggero e componenti riutilizzabili.',
      'Presentazione professionale di servizi e competenze.',
    ],
    status: 'In sviluppo',
    filters: ['Frontend'],
    githubUrl: 'https://github.com/Enrico-A/Enrico-dev-web',
  },
]

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('Tutti')

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'Tutti') {
      return projects
    }

    return projects.filter((project) => project.filters.includes(activeFilter))
  }, [activeFilter])

  return (
    <>
      <section className="section portfolio-hero">
        <div className="portfolio-hero__content">
          <span className="portfolio-kicker">Portfolio</span>
          <h1>Progetti, case study e competenze applicate a problemi reali.</h1>
          <p>
            Una selezione di web app, CRM, integrazioni e interfacce sviluppate con
            attenzione a processi, dati, usabilita e manutenibilita.
          </p>
        </div>
      </section>

      <section className="section portfolio-section">
        <div className="portfolio-section__heading">
          <div>
            <span className="portfolio-kicker">Projects</span>
            <h2>Progetti in evidenza</h2>
          </div>

          <ProjectFilters
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        <div className="portfolio-grid" aria-live="polite">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="section portfolio-cta">
        <div>
          <span className="portfolio-kicker">Nuovo progetto</span>
          <h2>Vuoi discutere una web app, un gestionale o un'integrazione?</h2>
          <p>
            Raccontami obiettivo, contesto e vincoli tecnici: possiamo capire insieme
            la soluzione piu adatta.
          </p>
        </div>
        <Link to="/contact" className="button">
          Contattami
        </Link>
      </section>
    </>
  )
}

export default Portfolio
