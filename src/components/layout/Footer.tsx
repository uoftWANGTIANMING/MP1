import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/layout/Container'
import { email, socialLinks } from '@/config/infoConfig'
import { CustomIcon } from '@/components/shared/CustomIcon'

export function Footer() {
  const githubLink = socialLinks.find(link => link.name.toLowerCase() === 'github' && link.href)
  const xLink = socialLinks.find(link => (link.name.toLowerCase() === 'x' || link.name.toLowerCase() === 'twitter') && link.href)

  const links = []
  if (githubLink) links.push({ ...githubLink, label: 'GitHub' })
  if (xLink) links.push({ ...xLink, label: 'X' })
  links.push({ name: 'Email', ariaLabel: 'Email', icon: 'email', href: `mailto:${email}`, label: 'Email' })

  return (
    <footer className="mt-8 flex-none">
      <ContainerOuter>
        <div className="border-t border-muted pb-12 pt-8">
          <ContainerInner>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Tianming Wang
              </div>
              <div className="flex items-center justify-center gap-6 text-sm">
                {links.map((link, index) => (
                  <span key={link.name} className="flex items-center">
                    {index > 0 && <span className="text-muted-foreground mr-6">·</span>}
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.ariaLabel || link.label}
                      className="transition hover:text-primary flex items-center gap-2"
                    >
                      <CustomIcon name={link.icon} size={18} />
                      <span>{link.label}</span>
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
