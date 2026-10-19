import { TbBrandGithub } from 'react-icons/tb'
import { FiLinkedin } from 'react-icons/fi'
import { type IconType } from 'react-icons'

type SocialLink = {
  label: string
  href: string
  icon: IconType
}

const SOCIALS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/TON_PSEUDO', icon: TbBrandGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/TON_PROFIL', icon: FiLinkedin },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="flex w-full items-center justify-center border-t border-white/10 px-4 py-10 sm:px-6">
      <div className="flex w-full max-w-7xl flex-col items-center gap-8 text-center sm:flex-row sm:justify-around sm:gap-4 sm:text-left">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-white">Mathéo Noguès</p>
          <p className="text-xs text-blue-500">Développeur web Full-Stack</p>
        </div>

        <ul className="flex items-center gap-3">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex items-center gap-2 rounded-lg text-sm text-stone-300 transition-colors duration-200 hover:text-white"
              >
                <Icon className="size-4 transition-colors duration-200 group-hover:text-blue-500" />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-stone-300/80">© {year} Mathéo Noguès - Tous droits réservés</p>
      </div>
    </footer>
  )
}
