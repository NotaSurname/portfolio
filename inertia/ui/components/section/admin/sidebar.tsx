import { Link } from '@adonisjs/inertia/react'
import { usePage } from '@inertiajs/react'
import { type LucideIcon, User, FolderCodeIcon } from 'lucide-react'

type NavItem = {
  name: string
  href: string
  icon: LucideIcon
}

type SideBarProps = {
  items?: NavItem[]
}

const DEFAULT_ITEMS: NavItem[] = [
  { name: 'Utilisateurs', href: '/admin/dashboard/users', icon: User },
  { name: 'Projets', href: '/admin/dashboard/projects', icon: FolderCodeIcon },
]

export default function SideBar({ items = DEFAULT_ITEMS }: SideBarProps) {
  const { url } = usePage()

  return (
    <div className="flex w-full flex-row border-b border-white/70 sm:min-h-screen sm:w-60 sm:max-w-60 sm:flex-col sm:border-r sm:border-b-0">
      <div className="flex min-w-fit items-center gap-1.5 p-5 sm:gap-3">
        <span className="text-sm font-medium text-stone-200">Logo</span>
        <div className="hidden flex-col leading-tight sm:flex">
          <span className="font-semibold text-stone-200">Mathéo</span>
          <span className="text-sm text-stone-200/70">Développeur Web</span>
        </div>
      </div>

      <div className="h-0.5 bg-stone-200/70 w-full" />

      <nav className="flex flex-1 flex-row items-center gap-1 overflow-x-auto px-2 text-white sm:flex-col sm:items-stretch sm:gap-1 sm:overflow-visible sm:px-3 sm:py-4">
        {items.map(({ name, href, icon: Icon }) => {
          const isActive = url === href || url.startsWith(`${href}/`)

          return (
            <Link
              key={href}
              href={href}
              className={`flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-sm whitespace-nowrap transition-colors duration-200 ${
                isActive
                  ? 'bg-white/10 text-white'
                  : 'text-stone-200/70 hover:bg-white/[0.05] hover:text-stone-200'
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
