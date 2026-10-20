import { skillGroups } from '../data/skills'
import SkillGroup from '../components/SkillGroup'
import '../styles/skills.css'

export default function Skills() {
  return (
    <section className="page skills-page">
      <p className="code-label">// skills.json</p>

      <header className="skills-header">
      <div>
      <h1>Technical skills<span className="heading-dot">.</span></h1>
      <p className="page-intro">
        Tools and areas I have used across academic, internship, and project
        work.
      </p>
      </div>
      </header>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <SkillGroup
            key={group.name}
            group={group}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
