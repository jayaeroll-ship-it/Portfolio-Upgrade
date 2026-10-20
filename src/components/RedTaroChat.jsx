import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import RedTaroLogo from './RedTaroLogo'
import { redTaroQuestions } from '../data/redtaro'
import '../styles/redtaro.css'

export default function RedTaroChat({ open, onClose }) {
  const panel = useRef(null)
  const closeButton = useRef(null)
  const opener = useRef(null)
  const conversation = useRef(null)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (open) {
      opener.current = document.activeElement
      closeButton.current?.focus({ preventScroll: true })
    } else if (panel.current?.contains(document.activeElement)) {
      opener.current?.focus({ preventScroll: true })
    }
  }, [open])

  useEffect(() => {
    if (open && conversation.current) {
      conversation.current.scrollTop = conversation.current.scrollHeight
    }
  }, [messages, open])

  return (
    <aside ref={panel} id="redtaro-chat" className={`redtaro-chat${open ? ' is-open' : ''}`} aria-labelledby="redtaro-title" aria-hidden={!open} inert={!open} onKeyDown={event => { if (event.key === 'Escape') { event.stopPropagation(); onClose() } }}>
      <div className="redtaro-panel-label">ASSISTANT <span>PORTFOLIO</span></div>
      <header className="redtaro-header">
        <span className="redtaro-avatar"><RedTaroLogo size={44} /></span>
        <div><h2 id="redtaro-title">RedTaro</h2><p>Get to know Aeroll</p></div>
        <button ref={closeButton} className="redtaro-close" onClick={onClose} aria-label="Close RedTaro"><X size={20} /></button>
      </header>
      <div ref={conversation} className="redtaro-conversation" role="log" aria-label="Conversation with RedTaro" aria-live="polite" tabIndex={0}>
        <p className="redtaro-message redtaro-answer">Hey! I’m RedTaro. Pick a question to learn about Aeroll.</p>
        {messages.map((item, index) => (
          <div className="redtaro-exchange" key={index}>
            <p className="redtaro-message redtaro-question"><span className="redtaro-speaker">You</span>{item.question}</p>
            <div className="redtaro-message redtaro-answer"><span className="redtaro-speaker">RedTaro</span><p>{item.answer}</p>{item.link && <a href={item.link.href}>{item.link.label}</a>}</div>
          </div>
        ))}
      </div>
      <div className="redtaro-prompts" aria-label="Questions about Aeroll">
        {redTaroQuestions.map(item => <button key={item.id} onClick={() => setMessages(current => [...current, item])}>{item.question}</button>)}
      </div>
    </aside>
  )
}
