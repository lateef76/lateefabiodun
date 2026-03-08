// Project Types
export interface Project {
  id: number
  title: string
  description: string
  longDescription?: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile'
  completionDate: string
}

// Skill Types
export interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'soft-skills'
  proficiency: 1 | 2 | 3 | 4 | 5
  yearsOfExperience?: number
}

// Experience Types
export interface Experience {
  id: number
  company: string
  position: string
  location: string
  startDate: string
  endDate: string | 'Present'
  description: string[]
  technologies: string[]
  companyLogo?: string
}

export interface Education {
  id: number
  institution: string
  degree: string
  fieldOfStudy: string
  startDate: string
  endDate: string | 'Present'
  description?: string
  grade?: string
  logo?: string
}

// Navigation Types
export interface NavLink {
  name: string
  href: string
  icon?: React.ReactNode
}

// Social Link Types
export interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
  username?: string
}

// Testimonial Types
export interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  content: string
  avatar?: string
  rating: 1 | 2 | 3 | 4 | 5
}

// Contact Form Types
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Theme Types
export type Theme = 'light' | 'dark' | 'system'

// Animation Types
export interface AnimationProps {
  initial?: object
  animate?: object
  exit?: object
  transition?: object
  whileInView?: object
  viewport?: object
}

// Button Variants
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

// Section Types
export interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
}