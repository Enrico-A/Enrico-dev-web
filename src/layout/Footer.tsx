import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <p className="site-footer__copy">
          {t.footer.copy} {new Date().getFullYear()} Enrico Dev Web.
        </p>

        <nav className="site-footer__policies" aria-label={t.footer.policiesLabel}>
          <Link to="/cookies">Cookie Policy</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </nav>

        <nav className="site-footer__social" aria-label={t.footer.socialLabel}>
          <a href="https://github.com/enrico-a" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="site-footer__icon" aria-hidden="true" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/enrico-arfini/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="site-footer__icon" aria-hidden="true" />
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
