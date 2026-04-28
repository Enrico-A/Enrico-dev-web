import { Link } from 'react-router-dom'

function CtaSection() {
  return (
    <section className="section home-cta">
      <div className="home-cta__content">
        <span className="section-kicker">Collaboriamo</span>
        <h2>Hai un progetto web, un gestionale o un'integrazione da realizzare?</h2>
        <p>
          Possiamo partire da obiettivi, vincoli tecnici e priorita operative per
          costruire una soluzione concreta e mantenibile.
        </p>
      </div>
      <Link to="/contact" className="button">
        Contattami
      </Link>
    </section>
  )
}

export default CtaSection
