import { GitBranch, CheckCheck, Radio } from 'lucide-react'
export default function StatusBar() {
  return <footer className="status-bar"><span><GitBranch size={13} /> main <CheckCheck size={14} /><span className="status-muted">Personal portfolio</span></span><span><Radio size={13} /> Open to opportunities</span><span className="status-right">UTF-8 <span>React</span> <span>Portfolio</span></span></footer>
}
