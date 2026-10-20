import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { files } from './Sidebar'
export default function EditorTabs({ openTabs, activePage, onNavigate, onClose }) {
  const container = useRef(null)
  useEffect(() => { container.current?.querySelector('[aria-current="page"]')?.scrollIntoView({ block: 'nearest', inline: 'nearest' }) }, [activePage])
  return <nav className="editor-tabs" aria-label="Open files" ref={container}>{openTabs.map(id => {
    const file = files.find(item => item.id === id)
    const Icon = file.icon
    return <div key={id} className={`editor-tab ${id === activePage ? 'active' : ''}`}>
      <button className="tab-select" onClick={() => onNavigate(id)} aria-current={id === activePage ? 'page' : undefined}><Icon size={15} className={`file-icon ${id}`} /><span>{file.name}</span></button>
      <button className="editor-tab-close" disabled={openTabs.length === 1} aria-label={`Close ${file.name}`} onClick={() => onClose(id)}><X size={14} /></button>
    </div>
  })}</nav>
}
