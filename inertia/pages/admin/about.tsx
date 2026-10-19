import { useState } from 'react'
import { Plus } from 'lucide-react'
import type { AboutParagraphData } from '~/types/about'
import SidebarWrapper from '~/ui/components/section/admin/sidebar_wrapper'
import AboutParagraphCard from '~/ui/components/section/about/about_paragraph_card'
import AboutParagraphModal from '~/pages/admin/form/about_paragraph_modal'
import HeroStatusCard from '~/ui/components/section/hero/hero_status_card'
import { type HeroStatusData } from '~/types/hero_status'

type Props = { paragraphs: AboutParagraphData[]; status: HeroStatusData }

export default function DashboardAbout({ paragraphs, status }: Props) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editing, setEditing] = useState<AboutParagraphData | null>(null)

  const openCreate = () => {
    setEditing(null)
    setIsFormOpen(true)
  }

  const openEdit = (paragraph: AboutParagraphData) => {
    setEditing(paragraph)
    setIsFormOpen(true)
  }

  const closeForm = () => {
    setIsFormOpen(false)
    setEditing(null)
  }

  return (
    <div className="min-h-screen bg-neutral-950">
      <SidebarWrapper>
        <div className="w-full max-w-2xl pb-8">
          <HeroStatusCard status={status} />
        </div>

        <div className="flex w-full max-w-2xl items-center gap-3 sm:gap-5">
          <h1 className="text-2xl text-white sm:text-3xl">À propos de moi</h1>
          <div className="h-0.5 min-w-4 flex-1 bg-white/70" />
          <button
            type="button"
            onClick={openCreate}
            className="flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white/70 px-3 py-1.5 text-sm text-white transition-colors hover:bg-white/10 sm:text-base [&>svg]:size-4 sm:[&>svg]:size-5"
          >
            <Plus />
            Ajouter un paragraphe
          </button>
        </div>

        <div className="flex w-full max-w-2xl flex-col gap-10 py-10 sm:py-16">
          <AboutParagraphCard paragraphs={paragraphs} onEdit={openEdit} />
        </div>
      </SidebarWrapper>

      {isFormOpen && <AboutParagraphModal paragraph={editing} onClose={closeForm} />}
    </div>
  )
}
