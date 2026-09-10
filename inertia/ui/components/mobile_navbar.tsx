import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '~/ui/components/theme_toggle'
import { usePage } from '@inertiajs/react'
import { Link } from '@adonisjs/inertia/react'

const LINKS = ['A propos', 'Mes projets', 'Me contacter']

export default function MobileNavBar() {
  const [open, setOpen] = useState(false)

  const { user } = usePage().props as {
    user?: any
  }

  const isAuth = !!user

  return (
    <>
      <nav className="relative z-20 flex items-center justify-between rounded-2xl bg-white px-4 py-3 dark:bg-black">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center cursor-pointer rounded-lg text-slate-900 transition-colors hover:bg-slate-100 dark:text-white dark:hover:bg-white/10"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className="flex flex-col items-end leading-tight">
          <span className="font-semibold text-slate-900 dark:text-white">Mathéo</span>
          <span className="text-xs text-slate-500 dark:text-white/70">Développeur Web</span>
        </div>

        <ThemeToggle />
      </nav>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'mt-2 max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-wrap items-center justify-center gap-1.5 rounded-2xl bg-white p-2 dark:bg-black sm:gap-3">
          {LINKS.map((link) => (
            <li key={link}>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2.5 text-sm text-left font-medium cursor-pointer text-slate-900 transition-colors hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black sm:p-3 sm:text-base"
              >
                {link}
              </button>
            </li>
          ))}
          {isAuth && (
            <li>
              <Link
                href="/logout"
                method="post"
                className="cursor-pointer text-sm font-medium p-2.5 rounded-lg hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition-all duration-400 sm:p-3 sm:text-base"
              >
                Se déconnecter
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}
