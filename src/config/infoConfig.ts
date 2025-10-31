export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Wang'
export const headline = "CryptoAI Thought."
export const introduction =''
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
    name: 'GitHub',
    ariaLabel: 'GitHub',
    icon: 'github',
    href: `https://github.com/${githubUsername}`,
  },
  {
    name: 'X',
    ariaLabel: 'X (Twitter)',
    icon: 'x',
    href: '', // Add your X/Twitter profile URL here
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
