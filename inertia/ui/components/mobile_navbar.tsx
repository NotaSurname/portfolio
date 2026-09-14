import { useState } from 'react'
import { Menu, X } from 'lucide-react'
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
      <nav className="relative z-20 flex items-center justify-between rounded-2xl px-4 py-3 bg-transparent border border-white/50">
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
          open ? 'mt-2 max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-wrap items-center justify-center gap-1.5 rounded-2xl p-2 bg-transparent border border-white/50 sm:gap-3">
          {LINKS.map((link) => (
            <li key={link}>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-2.5 text-sm text-left font-medium cursor-pointer transition-colors active:bg-white active:text-black text-stone-200 sm:p-3 sm:text-base"
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
                className="cursor-pointer text-sm font-medium p-2.5 rounded-lg active:bg-white active:text-black text-stone-200 transition-all duration-400 sm:p-3 sm:text-base"
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
