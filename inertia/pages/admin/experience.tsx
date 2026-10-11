import { Link } from '@adonisjs/inertia/react'
import { Plus } from 'lucide-react'
import { type ExperienceData } from '~/types/experience'
import SidebarWrapper from '~/ui/components/section/admin/sidebar_wrapper'
import ExperienceCard from '~/ui/components/section/experience/experience_card'

export default function Experiences({ experiences }: { experiences: ExperienceData[] }) {
  return (
    <div className="min-h-screen bg-neutral-950">
      <SidebarWrapper>
        <div className="flex w-full max-w-2xl items-center gap-3 sm:gap-5">
          <h1 className="text-2xl text-white sm:text-3xl">Expériences</h1>
          <div className="h-0.5 min-w-4 flex-1 bg-white/70" />
          <Link
            href="/admin/dashboard/experience/create"
            className="flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white/70 px-3 py-1.5 text-sm text-white transition-colors hover:bg-white/10 sm:text-base [&>svg]:size-4 sm:[&>svg]:size-5"
          >
            <Plus />
            Ajouter une expérience
          </Link>
        </div>

        <div className="w-full max-w-2xl py-10 sm:py-16">
          <ExperienceCard experiences={experiences} showCustom={true} />
        </div>
      </SidebarWrapper>
    </div>
  )
}
