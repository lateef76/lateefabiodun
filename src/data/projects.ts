import type { Project } from '@types'
import uccmasterImg from '../assets/images/uccmaster.png'
import nafiapparelImg from '../assets/images/nafiapparel.png'
import rmragencyImg from '../assets/images/rmragency.png'
import adetechImg from '../assets/images/adetech.png'

export const projects: Project[] = [
  {
    id: 1,
    title: 'UccMaster Quiz App',
    description: 'An interactive learning platform designed to help University of Cape Coast students master their courses through engaging quizzes.',
    longDescription: 'UccMaster is a comprehensive quiz application built to support University of Cape Coast students in their academic journey. The platform features an extensive library of quiz questions across multiple subjects, real-time progress tracking, detailed performance analytics, and personalized study recommendations. Students can practice, compete with peers, and monitor their improvement over time.',
    image: uccmasterImg,
    technologies: ['React', 'TypeScript', 'Vercel', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://uccmaster-io.vercel.app/',
    featured: true,
    category: 'fullstack',
    completionDate: '2024-01-20',
    tags: {
      difficulty: 'advanced',
      buildTime: '3 months',
      teamSize: '1 person'
    }
  },
  {
    id: 2,
    title: "Nafi's Apparel E-Commerce",
    description: 'A modern e-commerce platform showcasing fashion items with seamless shopping experience and secure payment integration.',
    longDescription: "Nafi's Apparel is a fully-featured e-commerce website built for an online fashion store. The platform includes product catalog with search and filtering, shopping cart with real-time updates, user authentication and account management, secure checkout process, order tracking, and admin dashboard for inventory management. The design is responsive and optimized for both mobile and desktop experiences.",
    image: nafiapparelImg,
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    liveUrl: 'https://apparel-nafi-io-nf6r.vercel.app/',
    featured: true,
    category: 'fullstack',
    completionDate: '2024-02-10',
    tags: {
      difficulty: 'advanced',
      buildTime: '2.5 months',
      teamSize: '1 person'
    }
  },
  {
    id: 3,
    title: 'RMR Agency - AI Automation Portfolio',
    description: 'A professional portfolio website showcasing AI automation services and agency capabilities with modern design.',
    longDescription: 'RMR Agency is a sophisticated portfolio and services website designed to showcase AI automation solutions for businesses. The platform features detailed service descriptions, client case studies, project portfolios, and a contact system for inquiries. It highlights the agency\'s expertise in automation, AI integration, and digital transformation with interactive elements and smooth animations.',
    image: rmragencyImg,
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Node.js', 'Contact Forms'],
    liveUrl: 'https://rmragency-io.vercel.app/',
    featured: true,
    category: 'frontend',
    completionDate: '2024-02-25',
    tags: {
      difficulty: 'intermediate',
      buildTime: '1.5 months',
      teamSize: '1 person'
    }
  },
  {
    id: 4,
    title: 'AdeTech Invoice & Sales Manager',
    description: 'A comprehensive invoicing and sales tracking app that helps businesses manage transactions, print receipts, and monitor sales performance.',
    longDescription: 'AdeTech is an enterprise-level invoicing and sales management application designed for small to medium businesses. Features include invoice generation, sales tracking with analytics, customer management, receipt printing, payment recording, sales reports with charts, and export functionality. The app provides real-time insights into business performance and helps streamline the sales and invoicing process.',
    image: adetechImg,
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'Print.js'],
    liveUrl: 'https://adetech.vercel.app/',
    featured: true,
    category: 'fullstack',
    completionDate: '2024-03-05',
    tags: {
      difficulty: 'advanced',
      buildTime: '2 months',
      teamSize: '1 person'
    }
  }
]

// Filter functions
export const getFeaturedProjects = () => projects.filter(p => p.featured)
export const getProjectsByCategory = (category: Project['category']) => 
  projects.filter(p => p.category === category)