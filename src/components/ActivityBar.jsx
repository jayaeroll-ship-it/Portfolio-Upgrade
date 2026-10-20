import { Files, Braces, GitBranch, FolderKanban, UserRound, Mail } from 'lucide-react'

import RedTaroLogo from './RedTaroLogo'

const tools = [
  { id: 'home', label: 'Explorer', icon: Files },
  { id: 'about', label: 'About', icon: UserRound },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'skills', label: 'Skills', icon: Braces },
  { id: 'experience', label: 'Experience', icon: GitBranch },
  { id: 'contact', label: 'Contact', icon: Mail }
]

export default function ActivityBar({ activePage, onNavigate, onOpenChat, chatOpen }) {
  return <nav className="activity-bar" aria-label="Portfolio sections">
    {tools.map(({ id, label, icon: Icon }) => <button key={id} className={activePage === id ? 'active' : ''} onClick={() => onNavigate(id)} aria-label={label} title={label}><Icon size={22} /></button>)}
    <button className={chatOpen ? 'active' : ''} onClick={onOpenChat} aria-label="Toggle RedTaro" title="RedTaro" aria-controls="redtaro-chat" aria-expanded={chatOpen}><RedTaroLogo /></button>
  </nav>
}
