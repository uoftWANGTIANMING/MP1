import Link from 'next/link'
import { getAllBlogs } from '@/lib/blogs'
import { projects } from '@/config/projects'
import { Card } from '@/components/shared/Card'
import { formatDate } from '@/lib/formatDate'
import BlockchainNetwork from "@/components/ui/blockchain-network"

export default async function Home() {
  const blogs = await getAllBlogs()
  const latestBlog = blogs.length > 0 ? blogs[0] : null
  const aiCatProject = projects.find(p => p.name === 'AI Companion Cat') || projects[0]

  return (
    <div className="w-full flex flex-col px-4 sm:px-6 lg:px-8 py-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-start">
          {/* Left column - Navigation buttons and Pinned */}
          <div className="flex flex-col gap-8 pt-28 lg:pt-36">
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
                <div className="flex flex-col gap-6">
                  {latestBlog && (
                    <div className="relative flex flex-col items-start group">
                      <Card.Eyebrow as="time" dateTime={latestBlog.date} decorate>
                        Pinned. {formatDate(latestBlog.date)}
                      </Card.Eyebrow>
                      <Link href={`/blogs/${latestBlog.slug}`} className="text-base font-semibold tracking-tight">
                        {latestBlog.title}
                      </Link>
                      <p className="relative z-10 mt-2 text-sm text-muted-foreground">
                        {latestBlog.description}
                      </p>
                      <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-primary">
                        Read essay
                        <svg className="ml-1 h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
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

          {/* Right column - Blockchain network visualization */}
          <div className="relative flex items-center justify-center w-full min-h-[500px] lg:min-h-[600px] pt-20 lg:pt-28">
            <div className="w-full h-full">
              <BlockchainNetwork />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
