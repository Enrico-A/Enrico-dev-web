import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAddressCard,
  faBriefcase,
  faEnvelope,
  faHouse,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const navItems = [
  { label: 'Home', to: '/', end: true, icon: faHouse },
  { label: 'About', to: '/about', icon: faAddressCard },
  { label: 'Services', to: '/services', icon: faBriefcase },
  { label: 'Portfolio', to: '/portfolio', icon: faLayerGroup },
  { label: 'Contact', to: '/contact', icon: faEnvelope },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = 'main-navigation'

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <NavLink to="/" className="brand" aria-label="Enrico Dev Web home" onClick={closeMenu}>
          <img src={logo} alt="Enrico Dev Web" className="brand__logo" />
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Apri o chiudi menu di navigazione"
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="nav-toggle__line" />
          <span className="nav-toggle__line" />
          <span className="nav-toggle__line" />
        </button>

        <nav
          id={menuId}
          className={isMenuOpen ? 'site-nav site-nav--open' : 'site-nav'}
          aria-label="Navigazione principale"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
              }
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={item.icon} className="site-nav__icon" aria-hidden="true" />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
