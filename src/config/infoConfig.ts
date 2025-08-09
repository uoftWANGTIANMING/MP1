export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Wang'
export const headline = 'Student at the University of Toronto.'
export const introduction =
  "I'm a Computer Science student deeply engaged in the intersections of Artificial Intelligence and Blockchain technologies.Driven by curiosity and a systems-level mindset, I explore how emerging technologies can reshape digital infrastructure, while constantly challenging assumptions and pursuing rigorous, first-principle thinking."
export const email = 'tianming.wang@mail.utoronto.ca'
export const githubUsername = 'uoftWANGTIANMING'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Hey there! I'm Tianming Wang, a Computer Science student at the University of Toronto with a focus on Artificial Intelligence and Blockchain technologies.",
  "Currently, I’m exploring how decentralized systems and intelligent algorithms can shape the next generation of digital infrastructure, while building practical skills through real-world projects.",
  "I created this blog to document my journey, share technical insights, and occasionally reflect on systems thinking, problem-solving, and lessons learned along the way.",
];

// blog
export const blogHeadLine = "AI, Code, and Beyond."
export const blogIntro =
  "Thoughts on AI, algorithms, and building the future.";

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/3546767679294397',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
