import type { Project } from '@types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with cart functionality, user authentication, and payment integration.',
    longDescription: 'Built a full-featured e-commerce platform from scratch. Features include product browsing, search and filters, shopping cart, user authentication, order management, and Stripe payment integration. The admin panel allows for product and inventory management.',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe'],
    liveUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    featured: true,
    category: 'fullstack',
    completionDate: '2023-12-15'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates and team features.',
    longDescription: 'Developed a Trello-like task management application. Users can create boards, lists, and cards. Features include drag-and-drop, real-time updates via WebSockets, file attachments, comments, and team collaboration. Includes dark mode and mobile-responsive design.',
    image: '/images/projects/taskapp.jpg',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'DnD Kit', 'Express'],
    liveUrl: 'https://taskapp-demo.com',
    githubUrl: 'https://github.com/yourusername/taskapp',
    featured: true,
    category: 'fullstack',
    completionDate: '2023-09-20'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather application with 5-day forecasts and interactive maps.',
    longDescription: 'Created a weather dashboard using OpenWeatherMap API. Features include current weather, 5-day forecast, search by city, interactive maps, and weather alerts. Implemented geolocation for local weather and saved favorite locations.',
    image: '/images/projects/weather.jpg',
    technologies: ['React', 'JavaScript', 'Chart.js', 'OpenWeather API', 'CSS Modules'],
    liveUrl: 'https://weather-demo.com',
    githubUrl: 'https://github.com/yourusername/weather-app',
    featured: false,
    category: 'frontend',
    completionDate: '2023-06-10'
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics with beautiful charts.',
    longDescription: 'Built a comprehensive social media analytics dashboard. Integrates with multiple social media APIs to display followers, engagement, and post performance. Features interactive charts, date range selection, and export functionality.',
    image: '/images/projects/dashboard.jpg',
    technologies: ['React', 'TypeScript', 'D3.js', 'Express', 'PostgreSQL', 'OAuth'],
    liveUrl: 'https://dashboard-demo.com',
    githubUrl: 'https://github.com/yourusername/social-dashboard',
    featured: true,
    category: 'fullstack',
    completionDate: '2023-03-05'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website with smooth animations.',
    longDescription: 'Designed and developed a personal portfolio to showcase projects and skills. Features smooth animations with Framer Motion, dark/light mode, fully responsive design, and optimized performance.',
    image: '/images/projects/portfolio.jpg',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://yourportfolio.com',
    githubUrl: 'https://github.com/yourusername/portfolio',
    featured: false,
    category: 'frontend',
    completionDate: '2024-01-15'
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'Real-time chat app with private rooms and file sharing.',
    longDescription: 'Developed a real-time chat application similar to Slack. Features include public and private channels, direct messaging, file uploads, emoji support, and message search. Built with Socket.io for real-time communication.',
    image: '/images/projects/chat.jpg',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    liveUrl: 'https://chat-demo.com',
    githubUrl: 'https://github.com/yourusername/chat-app',
    featured: true,
    category: 'fullstack',
    completionDate: '2023-08-12'
  }
]

// Filter functions
export const getFeaturedProjects = () => projects.filter(p => p.featured)
export const getProjectsByCategory = (category: Project['category']) => 
  projects.filter(p => p.category === category)