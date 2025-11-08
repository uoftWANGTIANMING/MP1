import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { projectHeadLine, projectIntro, projects } from '@/config/infoConfig'
import { activities } from '@/config/projects'
import { ProjectCard } from '@/components/project/ProjectCard'
import { ActivityCard } from '@/components/home/ActivityCard'
import { Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects',
  description: projectHeadLine,
}

export default function Projects() {
  return (
    <SimpleLayout
      title={projectHeadLine}
      intro={projectIntro}
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 pb-2 sm:pb-5"
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
      <div className="mx-auto flex flex-col max-w-xl gap-4 sm:gap-6 lg:max-w-none my-1 sm:my-2 py-2 sm:py-4 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-2 sm:mb-4">
            <Calendar size={28}/>
            Hobbies & Volunteer
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 md:grid-cols-3"
          >
            {activities.map((activity) => (
              <ActivityCard key={activity.name} activity={activity} titleAs='h3'/>
            ))}
          </ul>
        </div>
    </SimpleLayout>
  )
}
