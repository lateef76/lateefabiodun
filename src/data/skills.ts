import type { Skill } from '@types'

export const skills: Skill[] = [
  // Frontend Skills
  {
    name: 'React',
    icon: 'SiReact',
    category: 'frontend',
    proficiency: 5,
    yearsOfExperience: 3
  },
  {
    name: 'TypeScript',
    icon: 'SiTypescript',
    category: 'frontend',
    proficiency: 4,
    yearsOfExperience: 2
  },
  {
    name: 'Next.js',
    icon: 'SiNextdotjs',
    category: 'frontend',
    proficiency: 4,
    yearsOfExperience: 2
  },
  {
    name: 'Tailwind CSS',
    icon: 'SiTailwindcss',
    category: 'frontend',
    proficiency: 5,
    yearsOfExperience: 2
  },
  {
    name: 'HTML5',
    icon: 'SiHtml5',
    category: 'frontend',
    proficiency: 5,
    yearsOfExperience: 4
  },
  {
    name: 'CSS3',
    icon: 'SiCss3',
    category: 'frontend',
    proficiency: 5,
    yearsOfExperience: 4
  },
  {
    name: 'JavaScript',
    icon: 'SiJavascript',
    category: 'frontend',
    proficiency: 5,
    yearsOfExperience: 4
  },
  {
    name: 'Vue.js',
    icon: 'SiVuedotjs',
    category: 'frontend',
    proficiency: 3,
    yearsOfExperience: 1
  },

  // Backend Skills
  {
    name: 'Node.js',
    icon: 'SiNodedotjs',
    category: 'backend',
    proficiency: 4,
    yearsOfExperience: 3
  },
  {
    name: 'Python',
    icon: 'SiPython',
    category: 'backend',
    proficiency: 3,
    yearsOfExperience: 2
  },
  {
    name: 'Express',
    icon: 'SiExpress',
    category: 'backend',
    proficiency: 4,
    yearsOfExperience: 2
  },
  {
    name: 'Django',
    icon: 'SiDjango',
    category: 'backend',
    proficiency: 3,
    yearsOfExperience: 1
  },

  // Database Skills
  {
    name: 'PostgreSQL',
    icon: 'SiPostgresql',
    category: 'database',
    proficiency: 4,
    yearsOfExperience: 2
  },
  {
    name: 'MongoDB',
    icon: 'SiMongodb',
    category: 'database',
    proficiency: 4,
    yearsOfExperience: 2
  },
  {
    name: 'Firebase',
    icon: 'SiFirebase',
    category: 'database',
    proficiency: 3,
    yearsOfExperience: 1
  },

  // Tools & Methods
  {
    name: 'Git',
    icon: 'SiGit',
    category: 'tools',
    proficiency: 4,
    yearsOfExperience: 3
  },
  {
    name: 'Docker',
    icon: 'SiDocker',
    category: 'tools',
    proficiency: 3,
    yearsOfExperience: 1
  },
  {
    name: 'Figma',
    icon: 'SiFigma',
    category: 'tools',
    proficiency: 4,
    yearsOfExperience: 2
  },
  {
    name: 'VS Code',
    icon: 'SiVisualstudiocode',
    category: 'tools',
    proficiency: 5,
    yearsOfExperience: 4
  },
  {
    name: 'Postman',
    icon: 'SiPostman',
    category: 'tools',
    proficiency: 4,
    yearsOfExperience: 2
  },

  // Soft Skills
  {
    name: 'Communication',
    icon: 'SiGooglechat',
    category: 'soft-skills',
    proficiency: 5
  },
  {
    name: 'Team Collaboration',
    icon: 'SiMicrosoftteams',
    category: 'soft-skills',
    proficiency: 5
  },
  {
    name: 'Problem Solving',
    icon: 'SiCodeforces',
    category: 'soft-skills',
    proficiency: 4
  },
  {
    name: 'Time Management',
    icon: 'SiClockify',
    category: 'soft-skills',
    proficiency: 4
  }
]

// Group skills by category for easier rendering
export const skillsByCategory = {
  frontend: skills.filter(skill => skill.category === 'frontend'),
  backend: skills.filter(skill => skill.category === 'backend'),
  database: skills.filter(skill => skill.category === 'database'),
  tools: skills.filter(skill => skill.category === 'tools'),
  'soft-skills': skills.filter(skill => skill.category === 'soft-skills')
}