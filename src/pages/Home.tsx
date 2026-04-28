import CtaSection from '../components/home/CtaSection'
import FeaturedProjects from '../components/home/FeaturedProjects'
import HeroSection from '../components/home/HeroSection'
import TechStack from '../components/home/TechStack'
import ValueSection from '../components/home/ValueSection'
import './Home.css'

function Home() {
  return (
    <>
      <HeroSection />
      <ValueSection />
      <TechStack />
      <FeaturedProjects />
      <CtaSection />
    </>
  )
}

export default Home
