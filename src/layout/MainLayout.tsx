import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function MainLayout() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Salta al contenuto principale
      </a>
      <Header />
      <main id="main-content" className="app-main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
