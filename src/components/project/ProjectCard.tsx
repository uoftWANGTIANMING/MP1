"use client"

import { ArrowRightIcon, HashIcon } from 'lucide-react'
import Image from 'next/image'
import { ArrowUpRight } from '@phosphor-icons/react'
import { ProjectItemType } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { Favicon } from "favicon-stealer";

export function ProjectCard({ project, titleAs }: { project: ProjectItemType, titleAs?: keyof JSX.IntrinsicElements }) {
  // Check if project has demo or repository links
  const hasMultipleLinks = project.demo || project.repository
  
  // Handle internal links (starting with /) and external links
  const isInternalLink = project.link.href.startsWith('/')
  const linkHref = isInternalLink 
    ? project.link.href 
    : `https://${project.link.href}?utm_source=${utm_source}`
  
  let Component = titleAs ?? 'h2'
  
  // Helper function to format external URLs
  const formatUrl = (url: string) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return `${url}?utm_source=${utm_source}`
    }
    return `https://${url}?utm_source=${utm_source}`
  }
  
  // If project has demo or repository links, show buttons instead of full card link
  if (hasMultipleLinks) {
    return (
      <li className='group relative flex flex-col items-start h-full'>
        <div className="relative flex flex-col justify-between h-full w-full p-4 rounded-2xl border border-muted-foreground/20 shadow-sm transition-all group-hover:scale-[1.03] group-hover:shadow-md group-hover:bg-muted/5">
          <div className=''>
            <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-4'>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full">
                {isInternalLink ? (
                  <div className="h-12 w-12 rounded-full bg-muted/20" />
                ) : (
                  <Favicon url={project.link.href} />
                )}
              </div>
              <Component className="text-base font-semibold">
                {project.name}
              </Component>
            </div>
            <p className="relative z-10 mt-2 text-sm text-muted-foreground ml-2">
              {project.description}
            </p>
          </div>

          <div className="relative z-10 mt-auto pt-4 space-y-3">
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-x-2 items-center mb-3">
                {project.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center space-x-0.5 group"
                  >
                    <HashIcon className="w-3 h-3 text-muted-foreground icon-scale" />
                    <span className="text-xs text-muted-foreground tracking-tighter">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            )}
            
            {/* Action buttons */}
            <div className="flex flex-wrap gap-2">
              {project.demo && (
                <Link
                  href={formatUrl(project.demo.href)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-muted-foreground/20 bg-muted/10 hover:bg-muted/20 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>{project.demo.label}</span>
                  <ArrowUpRight size={14} weight="duotone" />
                </Link>
              )}
              {project.repository && (
                <Link
                  href={formatUrl(project.repository.href)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-muted-foreground/20 bg-muted/10 hover:bg-muted/20 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>{project.repository.label}</span>
                  <ArrowUpRight size={14} weight="duotone" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </li>
    )
  }
  
  // If href is #, don't render a link
  if (project.link.href === '#') {
    return (
      <li className='group relative flex flex-col items-start h-full'>
        <div className="relative flex flex-col justify-between h-full w-full p-4 rounded-2xl border border-muted-foreground/20 shadow-sm">
          <div className=''>
            <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-4'>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full">
                <div className="h-12 w-12 rounded-full bg-muted/20" />
              </div>
              <Component className="text-base font-semibold">
                {project.name}
              </Component>
            </div>
            <p className="relative z-10 mt-2 text-sm text-muted-foreground ml-2">
              {project.description}
            </p>
          </div>

          <div className="relative z-10 mt-auto pt-4 ml-1">
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-x-2 items-center">
                {project.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center space-x-0.5 group"
                  >
                    <HashIcon className="w-3 h-3 text-muted-foreground icon-scale" />
                    <span className="text-xs text-muted-foreground tracking-tighter">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </li>
    )
  }
  
  // Default behavior: entire card is clickable
  return (
    <li className='group relative flex flex-col items-start h-full'>
      <div className="relative flex flex-col justify-between h-full w-full p-4 rounded-2xl border border-muted-foreground/20 shadow-sm transition-all group-hover:scale-[1.03] group-hover:shadow-md group-hover:bg-muted/5">
        <div className=''>
          <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-4'>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full">
              {isInternalLink ? (
                <div className="h-12 w-12 rounded-full bg-muted/20" />
              ) : (
                <Favicon url={project.link.href} />
              )}
            </div>
            <Component className="text-base font-semibold">
              {project.name}
            </Component>
          </div>
          <p className="relative z-10 mt-2 text-sm text-muted-foreground ml-2">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 mt-auto pt-4 ml-1">
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-x-2 items-center">
              {project.tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-0.5 group"
                >
                  <HashIcon className="w-3 h-3 text-muted-foreground icon-scale" />
                  <span className="text-xs text-muted-foreground tracking-tighter">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <Link
          href={linkHref}
          target={isInternalLink ? undefined : '_blank'}
          rel={isInternalLink ? undefined : 'noopener noreferrer'}
          className='absolute inset-0 z-20'>
          <ArrowUpRight size={32} weight="duotone" className="absolute top-4 right-4 h-4 w-4 group-hover:text-primary group-hover:cursor-pointer" />
        </Link>
      </div>
    </li>
  )
}