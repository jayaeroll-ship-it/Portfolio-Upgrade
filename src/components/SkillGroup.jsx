import SkillIcon from './SkillIcon'
import { useId } from 'react'

export default function SkillGroup({ group, index = 0 }) {
  const headingId = useId()
  return (
    <section className="skill-group" aria-labelledby={headingId}>
      <div className="skill-heading">
        <span className="skill-category-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <h2 id={headingId}>{group.name}</h2>
      </div>
      <div className="skill-marquee" role="group" aria-label={`${group.name} skills`}>
        <div className="skill-marquee-track" style={{ '--marquee-duration': `${Math.max(24, group.items.length * 5)}s` }}>
          {[0, 1].map(copy => (
            <ul className="skill-list" key={copy} aria-label={copy === 0 ? group.name : undefined} aria-hidden={copy === 1 ? true : undefined}>
              {group.items.map(item => (
                <li className="skill-item" key={item}>
                  <SkillIcon name={item} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
