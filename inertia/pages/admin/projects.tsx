import SidebarWrapper from '~/ui/components/section/admin/sidebar_wrapper'
import { Plus } from 'lucide-react'
import { Link } from '@adonisjs/inertia/react'
import { usePage } from '@inertiajs/react'
import { type ProjectData } from '~/types/project'
import ProjectCard from '~/ui/components/section/projects/project_card'

export default function Projects() {
  const { projects } = usePage().props as unknown as {
    projects: ProjectData[]
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

        <div className="flex w-full max-w-7xl flex-col gap-14 px-4 py-20 sm:px-6">
          <ProjectCard projects={projects} showCustom={true} />
        </div>
      </SidebarWrapper>
    </div>
  )
}
