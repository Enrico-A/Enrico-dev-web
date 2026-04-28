import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Cookies from '../pages/Cookies'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Portfolio from '../pages/Portfolio'
import Privacy from '../pages/Privacy'
import Services from '../pages/Services'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
