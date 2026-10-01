import SidebarWrapper from '~/ui/components/section/admin/sidebar_wrapper'
import { Plus } from 'lucide-react'
import { Link } from '@adonisjs/inertia/react'
import { usePage } from '@inertiajs/react'
import type Project from '#models/project'

export default function Projects() {
  // en cas de bug avec Project[] dans le .props
  type ProjectData = {
    image: { url: string }
    title: string
    description: string
    explanation: string
    projectUrl: string
    githubUrl: string
    cardSize: 'normal' | 'medium' | 'wide'
    order: number
    stacks: { stackName: string }[]
  }

  const { projects } = usePage().props as unknown as {
    projects: Project[]
  }

  return (
    <div className="min-h-screen bg-neutral-950">
      <SidebarWrapper>
        <div className="flex w-full max-w-2xl items-center gap-3 sm:gap-5">
          <h1 className="text-2xl text-white sm:text-3xl">Projets</h1>
          <div className="h-0.5 min-w-4 flex-1 bg-white/70" />
          <Link
            href="/admin/dashboard/projects/create"
            className="flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white/70 px-3 py-1.5 text-sm text-white transition-colors hover:bg-white/10 sm:text-base [&>svg]:size-4 sm:[&>svg]:size-5"
          >
            <Plus />
            Ajouter un projet
          </Link>
        </div>

        {projects.length === 0 ? (
          <p className="py-12 text-center text-sm text-stone-200/60">
            Aucun projet pour le moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.uuid}
                className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/3"
              >
                <img
                  src={project.image.url}
                  alt={project.title}
                  className="aspect-video w-full object-cover"
                />

                <div className="flex flex-1 flex-col gap-3 p-4">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-semibold text-white">{project.title}</h2>
                    <p className="line-clamp-2 text-sm text-stone-200/70">{project.description}</p>
                  </div>

                  {project.stacks.length > 0 && (
                    <ul className="mt-auto flex flex-wrap gap-1.5">
                      {project.stacks.map((stack) => (
                        <li
                          key={stack.uuid}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white"
                        >
                          {stack.stackName}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </SidebarWrapper>
    </div>
  )
}
