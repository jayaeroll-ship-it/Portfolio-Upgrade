import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'
import pixelatedProfile from '../../aerollpixelated.png'
import profilePhoto from '../../aerollpic.png'

export default function Home({ onNavigate }) {
  const [portraitRevealed, setPortraitRevealed] = useState(false)
  return (
    <section className="page home-page">
      <p className="code-label">// home.tsx</p>

      <div className="hero-grid">
        <div>
          <p className="eyebrow">HELLO, I'M</p>

          <h1>{profile.name}</h1>

          <div className="role-marquee-controls">
          <div
            className="role-marquee"
            id="professional-roles"
            aria-label="Professional roles"
          >
            <div className="role-track">
              <div className="role-group">
                <span>Software Engineer</span>
                <span>Web Developer</span>
                <span>IT Consultant</span>
                <span>Network Engineer</span>
                <span>QA Engineer</span>
                <span>AI Engineer</span>
                <span>Front/Backend Developer</span>
              </div>

              <div className="role-group" aria-hidden="true">
                <span>Software Engineer</span>
                <span>Web Developer</span>
                <span>IT Consultant</span>
                <span>Network Engineer</span>
                <span>QA Engineer</span>
                <span>AI Engineer</span>
                <span>Front/Backend Developer</span>
              </div>
            </div>
          </div>
          </div>

          <p className="lead">
            Building practical software systems through development, testing,
            and problem solving.
          </p>

          <p className="summary">{profile.summary}</p>

          <div className="actions">
            <button
              className="primary-button"
              onClick={() => onNavigate('projects')}
            >
              View Projects <ArrowUpRight size={16} />
            </button>

            <button
              className="outline-button"
              onClick={() => onNavigate('about')}
            >
              About Me
            </button>

            <button
              className="outline-button"
              onClick={() => onNavigate('contact')}
            >
              Contact
            </button>
          </div>
        </div>

        <aside className="profile-column">
          <button
            type="button"
            className={`profile-photo${portraitRevealed ? ' is-revealed' : ''}`}
            aria-label="Reveal Aeroll's portrait"
            aria-pressed={portraitRevealed}
            onClick={() => setPortraitRevealed(revealed => !revealed)}
          >
            <img
              src={pixelatedProfile}
              alt="Pixelated portrait of Aeroll Jay R. Lumanglas"
              aria-hidden={portraitRevealed}
            />

            <img
              className="profile-photo-reveal"
              src={profilePhoto}
              alt="Portrait of Aeroll Jay R. Lumanglas"
              aria-hidden={!portraitRevealed}
            />
          </button>

        </aside>
      </div>

    </section>
  )
}
