import { Link } from 'react-router-dom'
import ProcessStep from '../components/services/ProcessStep'
import ServiceCard from '../components/services/ServiceCard'
import './Services.css'

export type Service = {
  title: string
  description: string
  points: string[]
  technologies: string[]
}

export type Step = {
  title: string
  description: string
}

const services: Service[] = [
  {
    title: 'Sviluppo Frontend',
    description:
      'Realizzo interfacce moderne, responsive e integrate con API, pensate per essere chiare, veloci e facili da evolvere.',
    points: [
      'UI responsive per desktop e mobile',
      'Componenti riutilizzabili e scalabili',
      'Integrazione API e gestione stati applicativi',
    ],
    technologies: ['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'Sviluppo Backend',
    description:
      'Sviluppo API, logica business e servizi applicativi per collegare dati, utenti e processi in modo affidabile.',
    points: [
      'API REST per web app e gestionali',
      'Autenticazione e autorizzazione',
      'Logica business e integrazione con database',
    ],
    technologies: ['.NET / C#', 'Node.js', 'PHP', 'Python', 'Java', 'API REST'],
  },
  {
    title: 'Sviluppo Full-stack',
    description:
      'Creo applicazioni complete, dalla struttura frontend fino al backend, con attenzione a flussi operativi e manutenibilita.',
    points: [
      'Web app complete e dashboard operative',
      'Gestionali e CRM su misura',
      'Integrazione coerente tra frontend e backend',
    ],
    technologies: ['Web app', 'Dashboard', 'Gestionali', 'CRM', 'Frontend/backend'],
  },
  {
    title: 'Database & Integrazioni',
    description:
      'Progetto strutture dati e integrazioni tra sistemi, servizi esterni e applicazioni gia presenti in azienda.',
    points: [
      'Modellazione dati relazionali',
      'Integrazione con servizi esterni',
      'Supporto a processi e flussi aziendali',
    ],
    technologies: ['PostgreSQL', 'MySQL', 'SQL Server', 'Modellazione dati'],
  },
  {
    title: 'Siti portfolio e landing page',
    description:
      'Sviluppo siti professionali e landing page essenziali, veloci e orientate alla conversione.',
    points: [
      'Siti professionali e pagine di presentazione',
      'Form contatti e CTA chiare',
      'SEO tecnica base e deploy',
    ],
    technologies: ['Landing page', 'Portfolio', 'Form contatti', 'SEO base', 'Deploy'],
  },
]

const processSteps: Step[] = [
  {
    title: 'Analisi esigenza',
    description:
      'Parto da obiettivi, vincoli, utenti e processi per capire cosa serve davvero.',
  },
  {
    title: 'Progettazione soluzione',
    description:
      'Definisco struttura, tecnologie e priorita per arrivare a una soluzione chiara.',
  },
  {
    title: 'Sviluppo iterativo',
    description:
      'Procedo per step verificabili, con feedback continui e attenzione alla qualita.',
  },
  {
    title: 'Consegna e supporto',
    description:
      'Preparo il rilascio e posso supportare evoluzioni, manutenzione e miglioramenti.',
  },
]

const usefulFor: string[] = [
  'Aziende che vogliono modernizzare strumenti interni.',
  'Professionisti che vogliono una presenza online chiara e credibile.',
  'Startup che devono validare una web app o un prodotto digitale.',
  'Team che hanno bisogno di supporto frontend, backend o integrazioni.',
]

function Services() {
  return (
    <>
      <section className="section services-hero">
        <div className="services-hero__content">
          <span className="services-kicker">Services</span>
          <h1>Sviluppo siti, web app, gestionali e integrazioni su misura.</h1>
          <p>
            Aiuto aziende, startup, professionisti e agenzie a costruire soluzioni web
            concrete: dal frontend al backend, fino a database, API e manutenzione.
          </p>
          <Link to="/contact" className="button">
            Contattami
          </Link>
        </div>
      </section>

      <section className="section services-section">
        <div className="services-section__heading">
          <span className="services-kicker">Cosa posso fare</span>
          <h2>Servizi full-stack per prodotti digitali e processi aziendali.</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="section services-process">
        <div className="services-section__heading">
          <span className="services-kicker">Come lavoro</span>
          <h2>Un processo semplice, trasparente e orientato alla consegna.</h2>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.title} step={step} index={index + 1} />
          ))}
        </div>
      </section>

      <section className="section services-fit">
        <div className="services-section__heading">
          <span className="services-kicker">Per chi</span>
          <h2>Posso essere utile se cerchi competenza tecnica e visione pratica.</h2>
        </div>

        <div className="services-fit__grid">
          {usefulFor.map((item) => (
            <article className="card services-fit__card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section services-cta">
        <div>
          <span className="services-kicker">Parliamone</span>
          <h2>Hai bisogno di sviluppare o migliorare una soluzione web?</h2>
          <p>
            Raccontami il contesto: possiamo capire insieme priorita, fattibilita e
            prossimi step.
          </p>
        </div>
        <Link to="/contact" className="button">
          Contattami
        </Link>
      </section>
    </>
  )
}

export default Services
