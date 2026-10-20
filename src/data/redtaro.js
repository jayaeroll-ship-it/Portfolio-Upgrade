import { profile } from './profile'
import { projects } from './projects'
import { experience } from './experience'
import { skillGroups } from './skills'

export const redTaroQuestions = [
  {
    id: 'about',
    question: 'Tell me about Aeroll',
    answer: `Aeroll Jay R. Lumanglas is a Computer Engineering graduate from ${profile.location}. He focuses on software development, web applications, system integration, and problem solving. He is looking for a job, willing to learn, and ready to grow through hands-on work with a team.`,
  },
  {
    id: 'work',
    question: 'Is he looking for work?',
    answer: 'Yes! Aeroll is looking for a job and is open to opportunities in software engineering, web development, QA, and AI. He is willing to learn new tools, develop his skills, and contribute to practical projects.',
  },
  {
    id: 'skills',
    question: 'What are his skills?',
    answer: `His programming skills include ${skillGroups.find(group => group.name === 'Programming').items.join(', ')}. For web development, he works with React.js, Node.js, and REST APIs. His portfolio also covers databases, software testing, debugging, and system integration.`,
  },
  {
    id: 'projects',
    question: 'What has he built?',
    answer: projects.map(project => `${project.name}: ${project.description}`).join('\n\n'),
  },
  {
    id: 'experience',
    question: 'What is his experience?',
    answer: experience.map(item => `${item.role} at ${item.company} (${item.dates}). ${item.responsibilities[0]}`).join('\n\n'),
  },
  {
    id: 'contact',
    question: 'How can I contact him?',
    answer: `Email: ${profile.email}\nPhone: ${profile.phone}\nLocation: ${profile.location}`,
    link: { label: 'Email Aeroll', href: `mailto:${profile.email}` },
  },
]
