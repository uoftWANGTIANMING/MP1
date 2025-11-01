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

export type PurchaseItemType = {
  name: string
  price: string
}

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'AI Companion for Cat',
    description: 'Why are all AI companions designed for humans? What about cats?',
    link: { href: '/projects/ai-companion-cat', label: 'View Project' },
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

// MVP0.1 Purchase Items
export const mvp01Items: Array<PurchaseItemType> = [
  {
    name: 'Portable USB Music Player Black Stereo Mini Speaker',
    price: '$15.41'
  },
  {
    name: 'SG90 MicroServo Mount Bracket Mount Kit',
    price: '$7.19'
  },
  {
    name: 'Cat Feather Toys, Insect Feather Toys Replacement (12 Pcs)',
    price: '$11.58'
  },
  {
    name: 'PCA9685 16-Way servo Drive Board (2PCS)',
    price: '$13.99'
  },
  {
    name: 'Official Raspberry Pi Camera Module 3 (Wide)',
    price: '$69.99'
  },
  {
    name: 'iRasptek Starter Kit for Raspberry Pi 4B 4GB - 64GB Edition',
    price: '$147.99'
  }
]
