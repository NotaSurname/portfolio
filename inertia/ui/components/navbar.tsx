import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePage } from '@inertiajs/react'
import { Link } from '@adonisjs/inertia/react'

const NAV_ITEMS = [
  { label: 'A propos', href: '#about' },
  { label: 'Mes projets', href: '#projects' },
  { label: 'Me contacter', href: '#contact' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  const { user } = usePage().props as {
    user?: any
  }

  const isAuth = !!user

  const linkClasses =
    'group relative cursor-pointer rounded-lg px-3 py-2 text-stone-200 transition-colors duration-300'

  const underline = (
    <span className="absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 bg-[#357DED]" />
  )

  const authButtonClasses =
    'min-w-fit cursor-pointer rounded-full border border-white/50 px-4 py-2 text-sm font-medium text-stone-200 transition-all duration-300 hover:bg-white hover:text-black'

  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:sticky md:block top-0 z-50 w-full overflow-hidden border-b border-white/50 bg-black/60">
        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex min-w-fit items-center gap-1.5 sm:gap-3">
            <span className="text-sm font-medium text-stone-200">Logo</span>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-stone-200">Mathéo</span>
              <span className="text-sm text-stone-200/70">Développeur Web</span>
            </div>
          </div>

          <ul className="flex flex-wrap items-center gap-1 text-sm font-medium sm:gap-1.5">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={label} className={linkClasses}>
                <a href={href}>{label}</a>
                {underline}
              </li>
            ))}
          </ul>

          {isAuth ? (
            <Link href="/logout" method="post" className={authButtonClasses}>
              Se déconnecter
            </Link>
          ) : (
            <Link href="/auth/login" className={authButtonClasses}>
              Se connecter
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile */}
      <div className="md:hidden">
        <nav className="sticky z-20 flex items-center justify-between px-4 py-3 bg-transparent border-b border-white/50">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center cursor-pointer rounded-lg transition-colors text-stone-200"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className="flex flex-col items-end leading-tight">
            <span className="font-semibold text-stone-200">Mathéo</span>
            <span className="text-xs text-white/70">Développeur Web</span>
          </div>
        </nav>

        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
            open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-wrap items-center justify-center gap-1 border-b border-white/50 text-sm font-medium p-2.5 sm:gap-1.5">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={label} className={linkClasses}>
                <a
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-sm text-left font-medium cursor-pointer transition-colors active:bg-white active:text-black text-stone-200 sm:p-3 sm:text-base"
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
