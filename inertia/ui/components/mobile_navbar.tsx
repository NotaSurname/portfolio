import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '~/ui/components/theme_toggle'

const LINKS = ['A propos', 'Mes projets', 'Me contacter']

export default function MobileNavBar() {
  const [open, setOpen] = useState(false)

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
        <ul className="flex items-center justify-around gap-3 rounded-2xl bg-white p-2 dark:bg-black">
          {LINKS.map((link) => (
            <li key={link}>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-3 text-left font-medium cursor-pointer text-slate-900 transition-colors hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
