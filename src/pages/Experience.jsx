import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section className="page experience-page">
      <p className="code-label">// experience.ts</p>
      <h1>Experience<span className="heading-dot">.</span></h1><p className="page-intro">The teams, systems, and challenges that shaped my work.</p>

      <div className="experience-timeline">
        {[...experience].reverse().map((item) => (
          <article
            className="timeline-card"
            key={`${item.company}-${item.role}`}
          >
            <div className="timeline-marker" aria-hidden="true" />

            <div className="experience-meta">
              <p className="code-label">{item.dates}</p>
              <span className="role-badge">{item.type}</span>
            </div>

            <div className="experience-head">
              <h3>{item.role}</h3>
              <p>
                {item.company}
                {item.location && ` · ${item.location}`}
              </p>
            </div>

            <ul className="experience-description">{item.responsibilities.map(task => <li key={task}>{task}</li>)}</ul>

            <div className="tags experience-skills" aria-label={`Skills for ${item.role}`}>
              {item.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
