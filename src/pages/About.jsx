import { AppWindow, ArrowUpRight, Braces, BrainCircuit, Database, GraduationCap, Network, Server, ShieldCheck } from 'lucide-react'
import { profile } from '../data/profile'
import '../styles/about.css'
import AboutStoryText from '../components/AboutStoryText'

const currentFocus = [
  { title: 'Full-stack applications', detail: 'Building full-stack web applications', icon: AppWindow },
  { title: 'Backend & APIs', detail: 'Developing backend services & REST APIs', icon: Server },
  { title: 'Data & databases', detail: 'Working with SQL, MySQL & Oracle databases', icon: Database },
  { title: 'Software quality', detail: 'Practicing software testing & debugging', icon: ShieldCheck },
  { title: 'Connected systems', detail: 'Exploring networking & system integration', icon: Network },
  { title: 'Applied AI', detail: 'Building AI-powered applications', icon: BrainCircuit },
]

export default function About({ onNavigate }) {
  return (
    <section className="page about-page">
      <p className="code-label">// about.tsx</p>
      <span className="about-kicker">THE PERSON BEHIND THE CODE</span>
      <div className="about-introduction">
        <div className="about-introduction-copy">
          <header className="about-heading">
            <h1>Practical software.<br /><span>Real problems, solved.</span></h1>
          </header>
          <section className="about-story" aria-labelledby="about-story-heading">
            <h2 id="about-story-heading"><span>01</span> A little about me</h2>
            <AboutStoryText paragraphs={[
              profile.summary,
              'My experience spans frontend and backend development, databases, REST APIs, application testing, and system integration. I enjoy building practical solutions that connect software, hardware, databases, and AI.',
              'I approach development with a problem-solving mindset, focusing on reliable systems, continuous learning, and building better software.',
            ]} />
          </section>
        </div>

        <aside className="about-code-panel" aria-labelledby="about-profile-heading">
          <div className="about-panel-bar"><Braces size={15} aria-hidden="true" /><h2 id="about-profile-heading">developer.json</h2><span>PROFILE</span></div>
          <div className="about-code-content">
            <span className="about-bracket" aria-hidden="true">{'{'}</span>
            <dl>
              <div><dt>name</dt><dd>{profile.name}</dd></div>
              <div><dt>background</dt><dd>Computer Engineering</dd></div>
              <div><dt>approach</dt><dd>Build. Test. Improve.</dd></div>
              <div><dt>mindset</dt><dd>Always learning</dd></div>
            </dl>
            <span className="about-bracket" aria-hidden="true">{'}'}</span>
          </div>
          <div className="about-code-footer"><span aria-hidden="true" /> Learning is part of the process.</div>
        </aside>
      </div>

      <section className="about-focus" aria-labelledby="about-focus-heading">
        <div className="about-section-heading"><h2 id="about-focus-heading"><span>02</span> What I'm working on</h2><span className="about-section-note">// current focus</span></div>
        <ul className="about-focus-grid">
          {currentFocus.map(({ title, detail, icon: Icon }, index) => (
            <li key={title}>
              <div className="about-focus-top"><Icon size={21} strokeWidth={1.5} aria-hidden="true" /><span>{String(index + 1).padStart(2, '0')}</span></div>
              <h3>{title}</h3><p>{detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-education" aria-labelledby="about-education-heading">
        <div className="about-section-heading"><h2 id="about-education-heading"><span>03</span> The foundation</h2><span className="about-section-note">// education</span></div>
        <div className="about-degree">
          <div className="about-degree-icon"><GraduationCap size={30} strokeWidth={1.4} aria-hidden="true" /></div>
          <div className="about-degree-info"><p>De La Salle – Lipa</p><h3>Bachelor of Science in Computer Engineering</h3><span>Graduated June 2026</span></div>
          <div className="about-gpa"><span>GPA</span><strong>3.40 <small>/ 4.00</small></strong></div>
        </div>
      </section>

      <footer className="about-next"><div><span className="code-label">// from learning to building</span><p>See how it comes together.</p></div><button className="outline-button" onClick={() => onNavigate('projects')}>Explore my projects <ArrowUpRight size={16} aria-hidden="true" /></button></footer>
    </section>
  )
}
