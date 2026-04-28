import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="page-section">
      <h1>NotFound</h1>
      <p>La pagina richiesta non esiste.</p>
      <Link to="/">Torna alla Home</Link>
    </section>
  )
}

export default NotFound
