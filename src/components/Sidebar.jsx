import { Braces, FileCode2, FileJson2, ChevronDown, FolderOpen, ArrowUpRight } from 'lucide-react'
export const files = [
  { id: 'home', name: 'home.tsx', label: 'Welcome', icon: FileCode2 },
  { id: 'about', name: 'about.tsx', label: 'About me', icon: FileCode2 },
  { id: 'projects', name: 'projects.tsx', label: 'Projects', icon: FileCode2 },
  { id: 'skills', name: 'skills.json', label: 'Skills', icon: FileJson2 },
  { id: 'experience', name: 'experience.ts', label: 'Experience', icon: Braces },
  { id: 'contact', name: 'contact.tsx', label: 'Contact', icon: FileCode2 },
]
export default function Sidebar({ activePage, onNavigate }) {
  return <aside className="sidebar">
    <div className="sidebar-title">EXPLORER <span>...</span></div>
    <div className="workspace-label"><span className="workspace-logo">AJ</span><div>Aeroll Jay<span>Personal workspace</span></div></div>
    <div className="folder-name"><ChevronDown size={14} /><FolderOpen size={15} /> PORTFOLIO</div>
    <nav className="file-list" aria-label="File explorer">{files.map(({ id, name, icon: Icon }) => <button key={id} aria-current={activePage === id ? 'page' : undefined} className={activePage === id ? 'selected' : ''} onClick={() => onNavigate(id)}><Icon className={`file-icon ${id}`} size={16} /><span>{name}</span>{activePage === id && <span className="file-dot">&#9679;</span>}</button>)}</nav>
    <div className="sidebar-note"><span className="code-label">// let's connect</span><p>Have something in mind?<br />Let's build it together.</p><button onClick={() => onNavigate('contact')}>Start a conversation <ArrowUpRight size={14} /></button></div>
    <div className="sidebar-footer"><ChevronDown size={14} /> WORKSPACE / 6 FILES</div>
  </aside>
}
