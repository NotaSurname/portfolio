import type { IconType } from 'react-icons'

type ContactLink = { label: string; href: string; icon: IconType }

type Props = {
  title: string
  description?: string
  links: ContactLink[]
  location?: string
  className?: string
}

export default function ContactInfo({
  title,
  description,
  links,
  location,
  className = '',
}: Props) {
  return (
    <aside
      className={`flex flex-col gap-6 rounded-lg border border-white/10 bg-white/5 p-5 sm:p-8 ${className}`}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-500">{title}</h3>
        {description && <p className="text-sm leading-relaxed text-[#EDEAE4]/70">{description}</p>}
      </div>

      <ul className="flex flex-col gap-4">
        {links.map(({ label, href, icon: Icon }) => {
          const external = href.startsWith('http')
          return (
            <li key={href}>
              <a
                href={href}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                className="flex min-w-0 items-center gap-3 text-sm text-[#EDEAE4] transition-colors hover:text-blue-500"
              >
                <Icon className="size-5 shrink-0 text-blue-500" aria-hidden />
                <span className="truncate">{label}</span>
              </a>
            </li>
          )
        })}
      </ul>

      {location && <p className="text-sm text-[#EDEAE4]/50">{location}</p>}
    </aside>
  )
}
