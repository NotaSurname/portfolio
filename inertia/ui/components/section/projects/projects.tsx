import ProjectCard from '~/ui/components/section/projects/project_card'
import { usePage } from '@inertiajs/react'
import { type ProjectData } from '~/types/project'

export default function Projects() {
  const { projects } = usePage().props as unknown as {
    projects: ProjectData[]
  }

  return (
    <section
      id="projects"
      className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-4 py-20 sm:px-6 md:gap-20"
    >
      <div className="flex w-full max-w-3xl flex-wrap items-center justify-center gap-8">
        <div className="flex w-full items-center gap-4">
          <h2 className="shrink-0 text-3xl leading-tight font-semibold tracking-tight text-[#EDEAE4] sm:text-4xl">
            Mes projets
          </h2>
          <div className="h-px flex-1 bg-white/20 sm:h-0.5" />
        </div>
      </div>

      <ProjectCard projects={projects} />
    </section>
  )
}
