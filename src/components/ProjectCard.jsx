import { Search, Radio, BookOpen, Cpu, Braces } from 'lucide-react'

import { useEffect, useRef } from 'react'

export default function ProjectCard({ project, active = true, number }) {
  const details = useRef(null)
  useEffect(() => {
    if (!active && details.current) details.current.open = false
  }, [active])
  const Graphic = { findback: Search, drowsiguard: Radio, 'cod-machine': Cpu, 'read-rent-repeat': BookOpen }[project.id] || Braces

  return (
    <article className="project-card" data-project={project.id}>
      <div className="project-art" aria-hidden="true">
        <span className="project-art-icon"><Graphic size={48} strokeWidth={1.2} /></span>
        <div className="project-art-caption"><small>PROJECT / {String(number).padStart(2, '0')}</small><strong>{project.name}</strong></div>
        <Braces size={18} />
      </div>
      <div className="project-card-body">
        <div className="project-card-top">
          <span className="code-label">{project.category}</span>
          {project.achievement && <span className="achievement">{project.achievement}</span>}
        </div>
        <h2>{project.name}</h2>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>
        <div className="project-highlights">{project.features.slice(0, 2).map(feature => <span key={feature}>{feature}</span>)}</div>
        <div className="tags">
          {project.technologies.map(item => <span key={item}>{item}</span>)}
        </div>
        <details ref={details} className="project-disclosure">
          <summary>Details</summary>
          <div className="project-details">
            <h4>Features</h4>
            <ul>{project.features.map(item => <li key={item}>{item}</li>)}</ul>
            <h4>My role</h4>
            <p>{project.contribution}</p>
          </div>
        </details>
      </div>
    </article>
  )
}
