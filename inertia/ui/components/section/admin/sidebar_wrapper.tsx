import { useState, type ReactNode } from 'react'
import { ExternalLink, Sidebar as SidebarIcon } from 'lucide-react'
import SideBar from '~/ui/components/section/admin/sidebar'
import { Link } from '@adonisjs/inertia/react'

type SidebarWrapperProps = {
  children?: ReactNode
}

export default function SidebarWrapper({ children }: SidebarWrapperProps) {
  const [isOpen, setIsOpen] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 640px)').matches
  )

  return (
    <div className="flex h-screen flex-col sm:flex-row">
      <SideBar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-12 shrink-0 items-center border-b-2 border-white/70 px-3 sm:h-16">
          <div className="flex w-full items-center justify-between mr-3">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? 'Fermer la sidebar' : 'Ouvrir la sidebar'}
              aria-expanded={isOpen}
              className="cursor-pointer rounded-md p-2 text-stone-200/70 transition-colors duration-200 hover:bg-white/10 hover:text-stone-200"
            >
              <SidebarIcon className="h-5 w-5" />
            </button>

            <Link href="/" className="group relative flex items-center gap-1 py-1 text-stone-200">
              Retour
              <ExternalLink className="h-4 w-4 shrink-0" />
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-[#357DED] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4">{children}</main>
      </div>
    </div>
  )
}
