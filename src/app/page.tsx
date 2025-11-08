import Link from 'next/link'
import { getAllBlogs } from '@/lib/blogs'
import { projects } from '@/config/projects'
import { Card } from '@/components/shared/Card'
import { formatDate } from '@/lib/formatDate'
import BlockchainNetwork from "@/components/ui/blockchain-network"
import { ArrowRight } from 'lucide-react'

export default async function Home() {
  const blogs = await getAllBlogs()
  const latestBlog = blogs.length > 0 ? blogs[0] : null
  const aiCatProject = projects.find(p => p.name === 'AI Companion Cat') || projects[0]

  return (
    <div className="w-full flex flex-col px-4 sm:px-6 lg:px-8 py-2 sm:py-4 lg:py-8 relative">
      <div className="w-full max-w-7xl mx-auto relative">
        {/* Mobile: Blockchain as background, Desktop: Grid layout */}
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-12 w-full items-start">
          {/* Blockchain network - Background on mobile, Right column on desktop */}
          <div className="fixed top-0 left-0 right-0 bottom-0 lg:relative lg:flex lg:items-center lg:justify-center w-full h-screen lg:h-auto lg:min-h-[600px] lg:pt-28 z-[1] lg:z-auto pointer-events-none lg:pointer-events-auto">
            <div className="w-full h-full opacity-50 sm:opacity-60 lg:opacity-100">
              <BlockchainNetwork />
            </div>
          </div>

          {/* Content - Overlay on mobile, Left column on desktop */}
          <div className="relative z-10 flex flex-col gap-4 sm:gap-6 lg:gap-8 pt-12 sm:pt-20 lg:pt-36 bg-background/30 sm:bg-background/40 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none rounded-lg lg:rounded-none p-4 sm:p-6 lg:p-0 pb-4 sm:pb-6 lg:pb-0">
            {/* Main navigation buttons */}
            <div className="flex flex-row items-center gap-4 md:gap-6">
              <Link
                href="/projects"
                className="text-base font-medium text-foreground transition hover:text-primary"
              >
                Projects
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link
                href="/blogs"
                className="text-base font-medium text-foreground transition hover:text-primary"
              >
                Essays
              </Link>
            </div>

            {/* Pinned section */}
            {(latestBlog || aiCatProject) && (
              <div className="w-full">
                <div className="flex flex-col gap-4 sm:gap-6">
                  {latestBlog && (
                    <div className="relative flex flex-col items-start group">
                      <Card.Eyebrow as="time" dateTime={latestBlog.date} decorate>
                        Pinned. {formatDate(latestBlog.date)}
                      </Card.Eyebrow>
                      <Link href={`/blogs/${latestBlog.slug}`} className="text-base font-semibold tracking-tight">
                        {latestBlog.title}
                      </Link>
                      <p className="relative z-10 mt-1.5 sm:mt-2 text-sm text-muted-foreground">
                        {latestBlog.description}
                      </p>
                      <Link 
                        href={`/blogs/${latestBlog.slug}`}
                        className="relative z-10 mt-2 sm:mt-3 inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors group/read"
                      >
                        <span>Read article</span>
                        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/read:translate-x-1" />
                      </Link>
                    </div>
                  )}
                  {aiCatProject && (
                    <div className="flex items-start">
                      <Link href={aiCatProject.link.href} className="block">
                        <div className="w-full max-w-[220px] rounded-lg border border-muted-foreground/20 p-5 flex flex-col justify-between bg-card">
                          <div>
                            <h3 className="text-sm font-semibold tracking-tight mb-2">
                              {aiCatProject.name}
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {aiCatProject.description}
                            </p>
                          </div>
                          {aiCatProject.tags && aiCatProject.tags.length > 0 && (
                            <div className="mt-3 pt-3 border-t border-muted-foreground/10">
                              <div className="flex flex-wrap gap-1.5">
                                {aiCatProject.tags.map((tag, index) => (
                                  <span
                                    key={index}
                                    className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
