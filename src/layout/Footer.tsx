import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <p className="site-footer__copy">Copyright {new Date().getFullYear()} Enrico Dev Web.</p>

        <nav className="site-footer__policies" aria-label="Link policy">
          <Link to="/cookies">Cookie Policy</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </nav>

        <nav className="site-footer__social" aria-label="Link social">
          <a href="https://github.com/enrico-a" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/enrico-arfini/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
