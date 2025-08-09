// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'NOIP Provincial 2nd Prize',
    description: 'National Olympiad in Informatics in Provinces (C++ Programming)',
    date: '2018',
    location: 'China',
  },
  {
    name: 'CSP-J Provincial 2nd Prize',
    description: 'China Collegiate Computing Contest – Junior Group (C++ Programming)',
    date: '2019',
    location: 'China',
  },  
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  // Placeholder for future high-impact projects
  {
    name: 'Portfolio Website',
    description: 'Personal website showcasing selected works and achievements.',
    link: { href: '#', label: 'Coming Soon' },
    tags: ['Portfolio']
  }
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  // Placeholder for future volunteer activities
  {
    name: 'To be updated',
    description: 'Upcoming community or volunteer contributions will be listed here.',
    date: '',
    location: '',
    link: ''
  }
]
