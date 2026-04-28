const technologies: string[] = [
  'React',
  'TypeScript',
  'Angular',
  '.NET / C#',
  'Node.js',
  'PHP',
  'PostgreSQL',
  'MySQL',
  'Azure',
]

function TechStack() {
  return (
    <section className="section home-section tech-preview">
      <div className="home-section__heading">
        <span className="section-kicker">Tech stack</span>
        <h2>Tecnologie principali</h2>
      </div>

      <div className="tech-list" aria-label="Tecnologie principali">
        {technologies.map((technology) => (
          <span className="badge tech-list__item" key={technology}>
            {technology}
          </span>
        ))}
      </div>
    </section>
  )
}

export default TechStack
