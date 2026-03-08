import type { Experience, Education } from '@types'

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Freelance',
    position: 'Web Developer & Branding Consultant',
    location: 'Remote',
    startDate: 'Jan 2022',
    endDate: 'Present',
    description: [
      'Built responsive portfolio sites with React, Vite, and TypeScript',
      'Designed branding assets and optimized websites for accessibility & SEO',
      'Delivered mobile-first, client-focused solutions',
      'Collaborate with clients on requirements and feature implementation'
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase', 'Figma'],
    companyLogo: '/images/logos/freelance.png'
  },
  {
    id: 2,
    company: 'MART (Modular Academic & Technical Resources)',
    position: 'Project Lead',
    location: 'Remote',
    startDate: 'Mar 2023',
    endDate: 'Present',
    description: [
      'Created modular guides and revision sheets for students',
      'Managed collaborative workflows with phased confirmation',
      'Coordinated with contributors to maintain quality standards',
      'Wrote comprehensive technical documentation'
    ],
    technologies: ['Documentation', 'Project Management', 'Content Strategy', 'Git', 'Markdown'],
    companyLogo: '/images/logos/mart.png'
  }
]

export const education: Education[] = [
  {
    id: 1,
    institution: 'University of Cape Coast',
    degree: 'Bachelor of Science',
    fieldOfStudy: 'Information Technology',
    startDate: 'Sep 2023',
    endDate: 'Jun 2027',
    description: 'Focus: Web Development, Database Systems, Software Engineering. Academic Projects: Hostel Finder App (Firestore + Authentication), Quiz App (Web Tech II), RMR Agency Portfolio Site.',
    grade: 'In Progress',
    logo: '/images/logos/ucc.png'
  }
]

// Additional certifications
export const certifications = [
  {
    id: 1,
    name: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    date: '2023',
    link: 'https://aws.amazon.com/certification/',
    image: '/images/certifications/aws.png'
  },
  {
    id: 2,
    name: 'Meta Frontend Developer',
    issuer: 'Meta',
    date: '2022',
    link: 'https://www.coursera.org/meta',
    image: '/images/certifications/meta.png'
  },
  {
    id: 3,
    name: 'Google UX Design',
    issuer: 'Google',
    date: '2021',
    link: 'https://grow.google/ux/',
    image: '/images/certifications/google.png'
  }
]