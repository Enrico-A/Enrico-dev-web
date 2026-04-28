import { Link } from 'react-router-dom'

const primaryStack = ['React', 'TypeScript', '.NET', 'Angular', 'PostgreSQL']

function HeroSection() {
  return (
    <section className="home-hero section">
      <div className="home-hero__content">
        <div className="home-hero__badges" aria-label="Stack principale">
          {primaryStack.map((technology) => (
            <span className="badge" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <h1>Full-stack developer per web app solide, scalabili e curate.</h1>
        <p className="home-hero__subtitle">
          Progetto e sviluppo applicazioni web, gestionali, CRM e integrazioni
          frontend/backend con un approccio pragmatico, moderno e orientato al risultato.
        </p>

        <div className="home-hero__actions">
          <Link to="/contact" className="button">
            Contattami
          </Link>
          <Link to="/portfolio" className="button button--secondary">
            Vedi progetti
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
