import { Link } from 'react-router-dom'
import AboutIntro from '../components/about/AboutIntro'
import ExperienceCard from '../components/about/ExperienceCard'
import SkillGroup from '../components/about/SkillGroup'
import './About.css'

type Experience = {
  context: string
  role: string
  description: string
  technologies: string[]
  highlights: string[]
}

type SkillCategory = {
  title: string
  skills: string[]
}

const experiences: Experience[] = [
  {
    context: 'Electronic Center',
    role: 'Sviluppo software e manutenzione gestionale',
    description:
      'Esperienza su applicazioni interne e strumenti operativi, con focus su manutenzione, evoluzione funzionale e interfacce per processi aziendali.',
    technologies: ['.NET', 'WPF', 'MySQL', 'HTML', 'JavaScript', 'Canvas'],
    highlights: [
      'Sviluppo e manutenzione di un gestionale interno.',
      'Lavoro su funzionalita desktop con interfacce WPF.',
      'Sviluppo frontend per giochi online con HTML, JavaScript e Canvas.',
    ],
  },
  {
    context: 'Sintesi Software / progetto enterprise',
    role: 'Full-stack developer su CRM e processi aziendali',
    description:
      'Attivita su sistemi gestionali e CRM, con attenzione ai flussi interni, all integrazione tra sistemi e alla gestione di dati aziendali.',
    technologies: ['.NET', 'C#', 'Database relazionali', 'Frontend web'],
    highlights: [
      'Sviluppo su CRM e processi aziendali.',
      'Integrazione con sistemi gestionali esistenti.',
      'Lavoro su flussi legati a produzione, magazzino e processi interni.',
    ],
  },
  {
    context: 'Healthcare startup',
    role: 'Sviluppo web app in ambito healthcare',
    description:
      'Sviluppo di una piattaforma orientata alla collaborazione professionale in ambito sanitario, con gestione di processi specialistici e condivisione di materiale clinico anonimizzato.',
    technologies: ['Web app', 'Healthcare', 'DICOM', 'Frontend/backend'],
    highlights: [
      'Collaborazione tra medici, chirurghi vascolari e specialisti.',
      'Gestione e condivisione di immagini DICOM anonimizzate.',
      'Applicazione orientata a processi specialistici e collaborazione professionale.',
    ],
  },
]

const skillGroups: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Angular', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    skills: ['.NET', 'C#', 'PHP', 'Node.js', 'API', 'Integrazioni'],
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'Database relazionali'],
  },
  {
    title: 'Cloud & Tools',
    skills: ['Azure', 'Git', 'Vite', 'Deployment', 'Debugging'],
  },
  {
    title: 'Soft skills / metodo',
    skills: ['Analisi processi', 'Problem solving', 'Manutenibilita', 'Collaborazione'],
  },
]

function About() {
  return (
    <>
      <AboutIntro />

      <section className="section about-story">
        <div className="about-section-heading">
          <span className="about-kicker">Chi sono</span>
          <h2>Un profilo tecnico, concreto e abituato a lavorare sui processi.</h2>
        </div>

        <div className="about-story__content">
          <p>
            Sono un full-stack developer con circa 7 anni di esperienza nello sviluppo
            software. Ho lavorato su gestionali, CRM, web app e applicazioni enterprise,
            seguendo sia la parte frontend sia la parte backend.
          </p>
          <p>
            Nel tempo ho usato tecnologie come React, TypeScript, Angular, .NET, C#,
            PHP, Node.js e database relazionali come PostgreSQL, MySQL e SQL Server.
            Mi trovo bene nei progetti in cui bisogna capire il processo, tradurlo in
            funzionalita chiare e mantenere il codice leggibile nel tempo.
          </p>
          <p>
            Il valore che porto e un approccio pragmatico: ascolto il contesto,
            individuo i vincoli tecnici e costruisco soluzioni che possano evolvere
            senza diventare difficili da gestire.
          </p>
        </div>
      </section>

      <section className="section about-experience">
        <div className="about-section-heading">
          <span className="about-kicker">Esperienza</span>
          <h2>Esperienze su prodotti interni, CRM, enterprise e healthcare.</h2>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.context} experience={experience} />
          ))}
        </div>
      </section>

      <section className="section about-skills">
        <div className="about-section-heading">
          <span className="about-kicker">Skills</span>
          <h2>Competenze tecniche e metodo di lavoro</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </section>

      <section className="section about-cta">
        <div>
          <span className="about-kicker">Prossimo step</span>
          <h2>Vuoi vedere come applico queste competenze nei progetti?</h2>
          <p>
            Dai un occhio al portfolio oppure contattami per parlare del tuo prossimo
            gestionale, CRM o progetto web.
          </p>
        </div>
        <div className="about-cta__actions">
          <Link to="/portfolio" className="button button--secondary">
            Vedi progetti
          </Link>
          <Link to="/contact" className="button">
            Contattami
          </Link>
        </div>
      </section>
    </>
  )
}

export default About
