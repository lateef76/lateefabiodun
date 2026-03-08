import type { Experience, Education } from '@types'

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Tech Company Inc.',
    position: 'Senior Frontend Developer',
    location: 'San Francisco, CA (Remote)',
    startDate: 'Jan 2023',
    endDate: 'Present',
    description: [
      'Lead the frontend development of 3 major enterprise applications using React and TypeScript',
      'Implemented responsive designs and optimized performance, resulting in 40% faster load times',
      'Mentored 5 junior developers and conducted code reviews to maintain code quality',
      'Collaborated with UX designers to implement pixel-perfect interfaces'
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'Jest'],
    companyLogo: '/images/logos/company1.png'
  },
  {
    id: 2,
    company: 'Digital Agency Co.',
    position: 'Frontend Developer',
    location: 'New York, NY',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    description: [
      'Developed and maintained 15+ client websites using modern frontend technologies',
      'Improved website performance by implementing lazy loading and code splitting',
      'Collaborated with backend team to integrate RESTful APIs',
      'Participated in agile ceremonies and sprint planning'
    ],
    technologies: ['React', 'JavaScript', 'SCSS', 'Bootstrap', 'Webpack', 'REST API'],
    companyLogo: '/images/logos/company2.png'
  },
  {
    id: 3,
    company: 'StartUp Innovations',
    position: 'Junior Web Developer',
    location: 'Austin, TX',
    startDate: 'Aug 2020',
    endDate: 'May 2021',
    description: [
      'Assisted in building the company\'s main product from scratch using React',
      'Fixed bugs and implemented new features based on user feedback',
      'Wrote unit tests to ensure code reliability',
      'Participated in daily stand-ups and code reviews'
    ],
    technologies: ['React', 'JavaScript', 'CSS Modules', 'Jest', 'Git'],
    companyLogo: '/images/logos/company3.png'
  }
]

export const education: Education[] = [
  {
    id: 1,
    institution: 'University of Technology',
    degree: 'Master of Science',
    fieldOfStudy: 'Computer Science',
    startDate: 'Sep 2018',
    endDate: 'May 2020',
    description: 'Specialized in Web Technologies and Human-Computer Interaction. Thesis on "Modern Web Application Performance Optimization".',
    grade: '3.8 GPA',
    logo: '/images/logos/university1.png'
  },
  {
    id: 2,
    institution: 'State University',
    degree: 'Bachelor of Science',
    fieldOfStudy: 'Software Engineering',
    startDate: 'Sep 2014',
    endDate: 'May 2018',
    description: 'Graduated with honors. Coursework included Data Structures, Algorithms, Database Systems, and Web Development.',
    grade: '3.6 GPA',
    logo: '/images/logos/university2.png'
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