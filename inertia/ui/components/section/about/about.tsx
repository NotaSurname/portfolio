import {
  SiTailwindcss,
  SiAdonisjs,
  SiReact,
  SiPostgresql,
  SiDocker,
  SiTypescript,
} from 'react-icons/si'
import { TbBrandGithub } from 'react-icons/tb'
import { FiLinkedin } from 'react-icons/fi'
import { usePage } from '@inertiajs/react'
import type { AboutParagraphData } from '~/types/about'

const DEFAULT_STACK = [
  { name: 'AdonisJS', icon: SiAdonisjs },
  { name: 'React', icon: SiReact },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Docker', icon: SiDocker },
  { name: 'TypeScript', icon: SiTypescript },
]

const DEFAULT_SOCIALS = [
  {
    name: 'GitHub',
    icon: TbBrandGithub,
    href: 'https://github.com/MON_PSEUDO',
    hoverClass: 'hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    href: 'https://www.linkedin.com/in/MON_PROFIL',
    hoverClass: 'hover:text-sky-500',
  },
]

function calculateAge(birthDate: Date) {
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()

  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate())

  if (!hasHadBirthdayThisYear) age -= 1

  return age
}

type StackItem = { name: string; icon: React.ComponentType<{ className?: string }> }
type SocialItem = {
  name: string
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  href: string
  hoverClass?: string
}

type AboutProps = {
  name?: string
  birthDate?: Date
  stack?: StackItem[]
  socials?: SocialItem[]
}

export default function About({
  name = 'Mathéo',
  birthDate = new Date(2007, 10, 19),
  stack = DEFAULT_STACK,
  socials = DEFAULT_SOCIALS,
}: AboutProps) {
  const { paragraphs } = usePage().props as unknown as {
    paragraphs: AboutParagraphData[]
  }

  const age = calculateAge(birthDate)

  const fillPlaceholders = (text: string) =>
    text.replace(/\{name}/g, name).replace(/\{age}/g, String(age))

  return (
    <section
      id="about"
      className="mx-auto flex w-full max-w-7xl flex-col items-center gap-14 px-4 py-20 min-h-screen sm:px-6 md:gap-20"
    >
      <div className="flex w-full max-w-3xl flex-wrap items-center justify-center gap-8">
        <div className="flex w-full items-center gap-4">
          <h2 className="shrink-0 text-3xl leading-tight font-semibold tracking-tight text-[#EDEAE4] sm:text-4xl">
            À propos de moi
          </h2>
          <div className="h-px flex-1 bg-white/20 sm:h-0.5" />
          <div className="flex shrink-0 items-center gap-4">
            {socials.map(({ name: socialName, icon: Icon, href, hoverClass }) => (
              <a
                key={socialName}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialName}
                className={`text-[#9C9890] transition-colors duration-200 ${hoverClass ?? ''}`}
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {paragraphs.length > 0 && (
          <div className="flex flex-col justify-center gap-5 text-base leading-relaxed text-[#9C9890] sm:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.uuid} className="whitespace-pre-line">
                {fillPlaceholders(paragraph.content)}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="flex w-full max-w-7xl flex-wrap items-center gap-8">
        <p className="leading-tight text-md text-stone-200/90">Mes stacks préférées :</p>
        <div className="grid w-full grid-cols-2 divide-x divide-y divide-white/10 overflow-hidden rounded-md border border-white/10 sm:flex sm:flex-nowrap sm:divide-y-0">
          {stack.map(({ name: techName, icon: Icon }) => (
            <div
              key={techName}
              className="flex min-w-0 items-center justify-center gap-2 px-2 py-4 transition-colors duration-200 hover:bg-white/[0.03] sm:flex-1 sm:justify-start sm:gap-3 sm:px-4"
            >
              <Icon className="h-5 w-5 shrink-0 text-[#9C9890] sm:h-6 sm:w-6" />
              <span className="truncate font-mono text-xs text-[#9C9890] sm:inline sm:text-sm">
                {techName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
