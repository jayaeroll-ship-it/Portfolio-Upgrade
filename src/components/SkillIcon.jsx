import {
  AppWindow, Blocks, BrainCircuit, Bug, Code2, Database,
  Globe, Network, Plug, Server, ShieldCheck,
} from 'lucide-react'

// Local copies of Devicon's original brand SVGs; see assets/skills/README.md.
const logos = import.meta.glob('../assets/skills/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
})

const brandFiles = {
  'C++': 'cplusplus',
  Java: 'java',
  JavaScript: 'javascript',
  Python: 'python',
  'C#': 'csharp',
  HTML5: 'html5',
  CSS3: 'css3',
  'React.js': 'react',
  'Node.js': 'nodejs',
  'Oracle Database': 'oracle',
  MySQL: 'mysql',
  MongoDB: 'mongodb',
  Supabase: 'supabase',
  Git: 'git',
  GitHub: 'github',
  'Microsoft Azure': 'azure',
  Figma: 'figma',
  Arduino: 'arduino',
}

// These are disciplines rather than brands, so use descriptive interface icons.
const conceptIcons = {
  'REST APIs': Plug,
  'Front-End Development': AppWindow,
  'Back-End Development': Server,
  SQL: Database,
  'Application Development': AppWindow,
  'Software Testing': ShieldCheck,
  Debugging: Bug,
  'System Integration': Network,
  'Software Engineering': Code2,
  'Web Development': Globe,
  'Backend Development': Server,
  'AI & Machine Learning': BrainCircuit,
  'System Development': Blocks,
}

export default function SkillIcon({ name }) {
  const file = brandFiles[name]
  if (file) {
    return <img
      className="skill-logo"
      data-brand={file}
      src={logos[`../assets/skills/${file}.svg`]}
      alt=""
      aria-hidden="true"
      width={28}
      height={28}
      decoding="async"
    />
  }

  const Icon = conceptIcons[name] || Code2
  return <Icon className="skill-concept-icon" size={22} aria-hidden="true" />
}
