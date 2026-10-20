import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import '../styles/projects.css'

export default function Projects() {
  const [index, setIndex] = useState(0)
  const project = projects[index]

  return (
    <section className="page projects-page">
      <p className="code-label">// projects.tsx</p>
      <header className="projects-heading">
        <div>
          <h1>Ideas into <span>working software.</span></h1>
          <p>Web applications, AI, and connected hardware. A few things I've built.</p>
        </div>
        <div className="projects-count"><strong>{String(projects.length).padStart(2, '0')}</strong><span>selected projects</span></div>
      </header>
      <div className="project-viewer">
        <div aria-live="polite" aria-atomic="true" className="project-position">
          {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')} · {project.name}
        </div>
        <div className="project-viewport" role="region" aria-roledescription="carousel" aria-label="Projects">
          <div className="project-track" style={{ '--project-index': index }}>
            {projects.map((item, position) => (
              <div
                key={item.id}
                className={`project-slide${position === index ? ' is-active' : ''}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${position + 1} of ${projects.length}`}
                aria-hidden={position !== index}
                inert={position !== index}
              >
                <ProjectCard project={item} active={position === index} number={position + 1} />
              </div>
            ))}
          </div>
        </div>
        <div className="project-progress" aria-hidden="true">
          {projects.map((item, position) => <span key={item.id} className={position === index ? 'is-current' : ''} />)}
        </div>
        <nav className="project-directory" aria-label="Choose a project">
          {projects.map((item, position) => (
            <button key={item.id} aria-current={position === index ? 'true' : undefined} onClick={() => setIndex(position)}>
              <span className="project-directory-number">{String(position + 1).padStart(2, '0')}</span>
              <span><strong>{item.name}</strong><small>{item.category}</small></span>
            </button>
          ))}
        </nav>
      </div>
    </section>
  )
}
