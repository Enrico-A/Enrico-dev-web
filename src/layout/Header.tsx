
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

function Header() {
  return (
    <header className="site-header">
      <NavLink to="/" className="brand" aria-label="Enrico Dev Web home">
        <span className="brand-mark">EDW</span>
        <span>Enrico Dev Web</span>
      </NavLink>

      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive ? 'site-nav-link is-active' : 'site-nav-link'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
