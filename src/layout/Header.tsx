import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAddressCard,
  faBriefcase,
  faEnvelope,
  faHouse,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons'
import { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { languages, type Language } from '../i18n/translations'
import { useLanguage } from '../i18n/useLanguage'

const navItems = [
  { labelKey: 'home', to: '/', end: true, icon: faHouse },
  { labelKey: 'about', to: '/about', icon: faAddressCard },
  { labelKey: 'services', to: '/services', icon: faBriefcase },
  { labelKey: 'portfolio', to: '/portfolio', icon: faLayerGroup },
  { labelKey: 'contact', to: '/contact', icon: faEnvelope },
] as const

const languageOptions: Record<Language, { label: string; flag: string; name: string }> = {
  it: { label: 'ITA', flag: '🇮🇹', name: 'Italiano' },
  en: { label: 'ENG', flag: '🇬🇧', name: 'English' },
}

function LanguageSwitch() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="language-switch" role="group" aria-label={t.header.languageLabel}>
      {languages.map((option) => {
        const item = languageOptions[option]

        return (
          <button
            key={option}
            type="button"
            className={
              language === option
                ? 'language-switch__button language-switch__button--active'
                : 'language-switch__button'
            }
            aria-label={item.name}
            aria-pressed={language === option}
            onClick={() => setLanguage(option)}
          >
            <span className="language-switch__flag" aria-hidden="true">
              {item.flag}
            </span>
            <span>{item.label}</span>
          </button>
        )
      })}
    </div>
  )
}

function Header() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = 'main-navigation'

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [closeMenu, isMenuOpen])

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <NavLink to="/" className="brand" aria-label={t.header.homeLabel} onClick={closeMenu}>
          <img src='/src/assets/images/logo.png' alt='enrico-dev-web' width={350} height='auto' />
        </NavLink>

        <nav
          id={menuId}
          className={isMenuOpen ? 'site-nav site-nav--open' : 'site-nav'}
          aria-label={t.header.navLabel}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
              }
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={item.icon} className="site-nav__icon" aria-hidden="true" />
              {t.header.nav[item.labelKey]}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitch />

          <button
            type="button"
            className="nav-toggle"
            aria-label={isMenuOpen ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="nav-toggle__line" aria-hidden="true" />
            <span className="nav-toggle__line" aria-hidden="true" />
            <span className="nav-toggle__line" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
