import { Link } from 'react-router-dom'
import AboutIntro from '../components/about/AboutIntro'
import ExperienceCard from '../components/about/ExperienceCard'
import SkillGroup from '../components/about/SkillGroup'
import { useLanguage } from '../i18n/useLanguage'
import './About.css'

function About() {
  const { t } = useLanguage()

  return (
    <>
      <AboutIntro />

      <section className="section about-story">
        <div className="about-section-heading">
          <span className="about-kicker">{t.about.story.kicker}</span>
          <h2>{t.about.story.title}</h2>
        </div>

        <div className="about-story__content">
          {t.about.story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section about-experience">
        <div className="about-section-heading">
          <span className="about-kicker">{t.about.experience.kicker}</span>
          <h2>{t.about.experience.title}</h2>
        </div>

        <div className="experience-timeline">
          {t.about.experience.items.map((experience) => (
            <ExperienceCard key={experience.context} experience={experience} />
          ))}
        </div>
      </section>

      <section className="section about-skills">
        <div className="about-section-heading">
          <span className="about-kicker">{t.about.skills.kicker}</span>
          <h2>{t.about.skills.title}</h2>
        </div>

        <div className="skills-grid">
          {t.about.skills.groups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </section>

      <section className="section about-cta">
        <div>
          <span className="about-kicker">{t.about.cta.kicker}</span>
          <h2>{t.about.cta.title}</h2>
          <p>{t.about.cta.body}</p>
        </div>
        <div className="about-cta__actions">
          <Link to="/portfolio" className="button button--secondary">
            {t.common.viewProjects}
          </Link>
          <Link to="/contact" className="button">
            {t.common.contactMe}
          </Link>
        </div>
      </section>
    </>
  )
}

export default About
