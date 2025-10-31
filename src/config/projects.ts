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

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'AI Companion for Cat',
    description: 'Why are all AI companions designed for humans? What about cats?',
    link: { href: '#', label: 'View Project' },
    tags: ['AI', 'IoT', 'Hardware']
  },
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
