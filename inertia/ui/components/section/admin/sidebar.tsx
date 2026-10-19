import { Link } from '@adonisjs/inertia/react'
import { usePage } from '@inertiajs/react'
import { type LucideIcon, FolderCodeIcon, House, X, BriefcaseBusiness, User } from 'lucide-react'

type NavItem = {
  name: string
  href: string
  icon: LucideIcon
}

type SideBarProps = {
  items?: NavItem[]
  isOpen?: boolean
  onClose?: () => void
}

const DEFAULT_ITEMS: NavItem[] = [
  { name: 'À propos de moi', href: '/admin/dashboard/about', icon: House },
  { name: 'Projets', href: '/admin/dashboard/projects', icon: FolderCodeIcon },
  { name: 'Expériences', href: '/admin/dashboard/experiences', icon: BriefcaseBusiness },
  { name: 'Utilisateur', href: '/admin/dashboard/users', icon: User },
]

export default function SideBar({ items = DEFAULT_ITEMS, isOpen = true, onClose }: SideBarProps) {
  const { url } = usePage()
  const path = url.split('?')[0]

  const activeHref = items
    .map((item) => item.href)
    .filter((href) => path === href || path.startsWith(`${href}/`))
    .sort((a, b) => b.length - a.length)[0]

  const handleNavigate = () => {
    if (window.innerWidth < 640) onClose?.()
  }

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 sm:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 max-w-[80vw] overflow-hidden border-r border-white/70 bg-neutral-950 transition-transform duration-300 sm:static sm:z-auto sm:max-w-none sm:min-h-screen sm:translate-x-0 sm:transition-[width] sm:duration-200 ${
          isOpen ? 'translate-x-0 sm:w-60' : '-translate-x-full sm:w-0 sm:border-r-0'
        }`}
      >
        <div className="flex h-full w-full flex-col sm:min-h-screen sm:w-60">
          <div className="flex h-16 items-center justify-between gap-3 border-b-2 border-stone-200/70 px-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-stone-200">Logo</span>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-stone-200">Mathéo</span>
                <span className="text-xs text-stone-200/70">Développeur Web</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer le menu"
              className="cursor-pointer rounded-md p-1.5 text-stone-200/70 transition-colors hover:bg-white/10 hover:text-stone-200 sm:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4 text-white">
            {items.map(({ name, href, icon: Icon }) => {
              const isActive = href === activeHref

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={handleNavigate}
                  className={`flex items-center gap-3.5 rounded-md px-3 py-2 text-md whitespace-nowrap transition-colors duration-200 ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-stone-200/70 hover:bg-white/5 hover:text-stone-200'
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 shrink-0 ${isActive ? 'text-blue-500' : 'text-stone-200/70'}`}
                  />
                  {name}
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>
    </>
  )
}
