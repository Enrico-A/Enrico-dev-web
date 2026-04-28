type ValueCardData = {
  icon: string
  title: string
  description: string
}

const values: ValueCardData[] = [
  {
    icon: '01',
    title: 'Web app moderne',
    description:
      'Interfacce React e Angular responsive, veloci e pensate per flussi utente reali.',
  },
  {
    icon: '02',
    title: 'Soluzioni full-stack',
    description:
      'Backend, API, database e frontend integrati in architetture pulite e mantenibili.',
  },
  {
    icon: '03',
    title: 'Integrazioni e gestionali',
    description:
      'CRM, applicazioni enterprise e integrazioni tra sistemi con attenzione a dati e processi.',
  },
]

function ValueCard({ icon, title, description }: ValueCardData) {
  return (
    <article className="card value-card">
      <span className="value-card__icon" aria-hidden="true">
        {icon}
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

function ValueSection() {
  return (
    <section className="section home-section">
      <div className="home-section__heading">
        <span className="section-kicker">Valore</span>
        <h2>Dal frontend al backend, con una visione completa del prodotto.</h2>
      </div>

      <div className="value-grid">
        {values.map((value) => (
          <ValueCard key={value.title} {...value} />
        ))}
      </div>
    </section>
  )
}

export default ValueSection
