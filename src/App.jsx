import { useEffect, useRef, useState } from 'react'
import { Code2, Search, ChevronRight, X } from 'lucide-react'
import { files } from './components/Sidebar'
import ActivityBar from './components/ActivityBar'
import Sidebar from './components/Sidebar'
import EditorTabs from './components/EditorTabs'
import StatusBar from './components/StatusBar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import RedTaroChat from './components/RedTaroChat'
import RedTaroLogo from './components/RedTaroLogo'

const pages = {
  home: Home,
  about: About,
  projects: Projects,
  skills: Skills,
  experience: Experience,
  contact: Contact,
}

export default function App() {
  const initialPage = Object.hasOwn(pages, window.location.hash.slice(1)) ? window.location.hash.slice(1) : 'home'
  const [activePage, setActivePage] = useState(initialPage)
  const [openTabs, setOpenTabs] = useState([initialPage])
  const [query, setQuery] = useState('')
  const [chatOpen, setChatOpen] = useState(false)
  const palette = useRef(null)
  const content = useRef(null)
  const showSearch = () => { setQuery(''); palette.current.showModal() }
  useEffect(() => {
    const shortcut = event => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); showSearch() }
    }
    const navigate = () => {
      const page = window.location.hash.slice(1) || 'home'
      if (Object.hasOwn(pages, page)) {
        setActivePage(page)
        setOpenTabs(tabs => tabs.includes(page) ? tabs : [...tabs, page])
      }
    }
    window.addEventListener('keydown', shortcut)
    window.addEventListener('hashchange', navigate)
    return () => { window.removeEventListener('keydown', shortcut); window.removeEventListener('hashchange', navigate) }
  }, [])
  useEffect(() => {
    document.title = `${files.find(file => file.id === activePage).label} | Aeroll Jay Lumanglas`
    content.current?.focus({ preventScroll: true })
  }, [activePage])

  const openPage = (page) => {
    setActivePage(page)
    window.location.hash = page
    palette.current?.close()

    setOpenTabs((tabs) => {
      if (tabs.includes(page)) {
        return tabs
      }

      return [...tabs, page]
    })
  }

  const closeTab = (page) => {
    if (openTabs.length === 1) return
    const currentIndex = openTabs.indexOf(page)
    const remaining = openTabs.filter(tab => tab !== page)
    setOpenTabs(remaining)
    if (page === activePage) {
      const nextTab = remaining[Math.max(0, currentIndex - 1)]
      setActivePage(nextTab)
      window.location.hash = nextTab
    }
  }

  const Page = pages[activePage]

  return (
    <div className={`app-shell${chatOpen ? ' redtaro-is-open' : ''}`}>
      <a className="skip-link" href="#main-content" onClick={event => { event.preventDefault(); content.current?.focus() }}>Skip to content</a>
      <header className="title-bar"><div className="title-brand"><Code2 size={20} /><span>AJL<span className="title-divider"> / </span>PORTFOLIO</span></div><button className="workspace-search" onClick={showSearch}><Search size={14} /><span>Explore the workspace</span><kbd>Ctrl K</kbd></button><span className="title-caption">built with purpose.</span></header>
      <header className="mobile-header">
        <span>AJL / PORTFOLIO</span>

        <select
          value={activePage}
          onChange={(event) => openPage(event.target.value)}
          aria-label="Choose portfolio section"
        >
          {Object.keys(pages).map((page) => (
            <option key={page} value={page}>
              {page}
            </option>
          ))}
        </select>
      </header>

      <ActivityBar
        activePage={activePage}
        onNavigate={openPage}
        onOpenChat={() => setChatOpen(current => !current)}
        chatOpen={chatOpen}
      />

      <Sidebar
        activePage={activePage}
        onNavigate={openPage}
      />

      <div className="editor">
        <EditorTabs
          openTabs={openTabs}
          activePage={activePage}
          onNavigate={openPage}
          onClose={closeTab}
        />

        <div className="breadcrumbs"><span>portfolio</span><ChevronRight size={13} /><span>src</span><ChevronRight size={13} /><span className={`file-icon ${activePage}`}>{files.find(file => file.id === activePage).name}</span><span className="preview-label">LIVE PREVIEW</span></div>
        <main key={activePage} id="main-content" tabIndex={-1} ref={content} className="editor-content">
          <div className="page-transition">
            <Page onNavigate={openPage} />
          </div>
        </main>
      </div>

      <StatusBar />
      <button className="redtaro-mobile-launcher" aria-label="Toggle RedTaro" aria-expanded={chatOpen} aria-controls="redtaro-chat" onClick={() => setChatOpen(current => !current)}><RedTaroLogo size={34} /></button>
      <RedTaroChat open={chatOpen} onClose={() => setChatOpen(false)} />
      <dialog className="command-palette" ref={palette} onClick={event => { if (event.target === palette.current) palette.current.close() }} aria-label="Find a portfolio section">
        <div className="palette-input"><Search size={18} /><input autoFocus aria-label="Search sections" placeholder="Go to a file..." value={query} onChange={event => setQuery(event.target.value)} /><button aria-label="Close search" onClick={() => palette.current.close()}><X size={18} /></button></div>
        <nav aria-label="Search results">{files.filter(file => `${file.label} ${file.name}`.toLowerCase().includes(query.toLowerCase())).map(file => <button key={file.id} onClick={() => openPage(file.id)}><file.icon size={17} className={`file-icon ${file.id}`} /><span>{file.label}</span><small>{file.name}</small></button>)}</nav>
        {!files.some(file => `${file.label} ${file.name}`.toLowerCase().includes(query.toLowerCase())) && <p className="palette-empty">No matching files. Try projects or contact.</p>}
        <div className="palette-hint">Tab to navigate · Enter to open · Esc to close</div>
      </dialog>
    </div>
  )
}
