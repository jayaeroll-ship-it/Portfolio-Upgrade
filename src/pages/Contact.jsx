import { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, Send, Copy, Check, MessageSquare, FileCode2 } from 'lucide-react'
import { Facebook, Github, Instagram, Linkedin } from '../components/SocialIcons'
import { profile } from '../data/profile'

const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`

const contactLinks = [
  { name: 'Email', detail: profile.email, href: gmailUrl, icon: Mail, color: '#35c9b5' },
  {
    name: 'LinkedIn',
    detail: profile.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
    href: profile.linkedin,
    icon: Linkedin,
    color: '#2697d4',
  },
  {
    name: 'GitHub', detail: 'github.com/jayaeroll-ship-it',
    href: 'https://github.com/jayaeroll-ship-it', icon: Github, color: '#d5dadd',
  },
  {
    name: 'Facebook', detail: 'facebook.com/aerolljay.lumanglas',
    href: 'https://www.facebook.com/aerolljay.lumanglas/', icon: Facebook, color: '#4295ff',
  },
  {
    name: 'Instagram', detail: 'instagram.com/jayaeroll',
    href: 'https://www.instagram.com/jayaeroll/', icon: Instagram, color: '#f13a7b',
  },
]

export default function Contact() {
  const [subject, setSubject] = useState('')
  const [copyStatus, setCopyStatus] = useState('')

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyStatus('Email copied to clipboard.')
    } catch {
      setCopyStatus('Could not copy automatically. Select the email address to copy it.')
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    const name = fields.get('name').trim()
    const email = fields.get('email').trim()
    const subject = fields.get('subject').trim() || `Portfolio message from ${name}`
    const body = `${fields.get('message').trim()}\n\nFrom: ${name}\nEmail: ${email}`

    window.open(
      `${gmailUrl}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section className="page contact-page">
      <p className="code-label">// contact.tsx</p>
      <header className="contact-hero">
        <div>
          <span className="contact-availability"><span aria-hidden="true" /> Open to opportunities</span>
          <h1>Let's <span>connect.</span></h1>
          <p className="contact-intro">For opportunities, collaborations, or a quick hello.</p>
        </div>
        <div className="contact-hero-art" aria-hidden="true"><MessageSquare size={58} strokeWidth={1} /><span>hello, world_</span></div>
      </header>

      <div className="contact-layout">
        <section className="contact-connections" aria-labelledby="contact-links-heading">
          <h2 id="contact-links-heading" className="contact-section-title"><span>01</span> Get in touch</h2>
          <div className="contact-email-card">
            <Mail size={23} aria-hidden="true" />
            <p>Email</p>
            <a href={gmailUrl} target="_blank" rel="noopener noreferrer">{profile.email}<ArrowUpRight size={17} aria-hidden="true" /></a>
            <button type="button" onClick={copyEmail}>{copyStatus === 'Email copied to clipboard.' ? <Check size={13} /> : <Copy size={13} />} Copy email</button>
            <p className="contact-copy-status" role="status">{copyStatus}</p>
          </div>
          <p className="contact-social-label">SOCIALS</p>
          <div className="contact-list">
            {contactLinks.filter(link => link.name !== 'Email').map(({ name, detail, href, icon: Icon, color }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" style={{ '--contact-accent': color }}>
                <span className="contact-icon"><Icon size={15} aria-hidden="true" /></span>
                <span className="contact-link-text">
                  <span className="contact-link-label">{name}</span>
                  <span className="contact-link-detail">{detail}</span>
                </span>
                <ArrowUpRight className="contact-link-arrow" size={12} aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="contact-location"><MapPin size={16} aria-hidden="true" /><span>Based in<strong>{profile.location}</strong></span></div>
        </section>

        <section className="contact-composer" aria-labelledby="contact-form-heading">
          <div className="composer-tab"><FileCode2 size={15} aria-hidden="true" /><span>new-message.ts</span><span className="composer-draft">DRAFT</span></div>
          <div className="composer-body">
          <h2 id="contact-form-heading">Send a message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <fieldset className="contact-topics">
              <legend>Topic</legend>
              <div>{[['A job opportunity', 'Opportunity'], ['A collaboration', 'Collaboration'], ['Just saying hello', 'Hello']].map(([topic, label]) => <button key={topic} type="button" aria-pressed={subject === topic} onClick={() => setSubject(topic)}>{label}</button>)}</div>
            </fieldset>
            <div className="contact-field-pair">
            <div className="contact-field">
              <label htmlFor="contact-name">Name <span aria-hidden="true">*</span></label>
              <input id="contact-name" name="name" autoComplete="name" placeholder="Your name" required />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">Email <span aria-hidden="true">*</span></label>
              <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </div>
            </div>
            <div className="contact-field">
              <label htmlFor="contact-subject">Subject <span className="field-optional">(optional)</span></label>
              <input id="contact-subject" name="subject" placeholder="A little context..." value={subject} onChange={event => setSubject(event.target.value)} />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-message">Message <span aria-hidden="true">*</span></label>
              <textarea id="contact-message" name="message" placeholder="Hi Aeroll, I'd love to talk about..." rows={5} required />
            </div>
            <button className="contact-send-button" type="submit" aria-describedby="contact-form-note">
              Open draft in Gmail <Send size={15} aria-hidden="true" />
            </button>
            <p id="contact-form-note" className="contact-form-note">Review and send in a new Gmail tab. * Required.</p>
          </form>
          </div>
        </section>
      </div>
    </section>
  )
}
