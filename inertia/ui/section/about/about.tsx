import { SiTailwindcss, SiAdonisjs, SiReact, SiPostgresql } from 'react-icons/si'
import { TbBrandGithub } from 'react-icons/tb'
import { FiLinkedin } from 'react-icons/fi'
import { IoMailOutline } from 'react-icons/io5'

const stack = [
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'AdonisJS', icon: SiAdonisjs },
  { name: 'React', icon: SiReact },
  { name: 'PostgreSQL', icon: SiPostgresql },
]

const socials = [
  {
    name: 'GitHub',
    icon: TbBrandGithub,
    href: 'https://github.com/MON_PSEUDO',
    style: 'hover:text-[#24292e]',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    href: 'https://www.linkedin.com/in/MON_PROFIL',
    style: 'hover:text-[#0077b5]',
  },
  {
    name: 'Email',
    icon: IoMailOutline,
    href: 'mailto:test@exemple.com',
    style: 'hover:text-blue-500',
  },
]

export default function About() {
  function calculateAge(birthDate: Date): number {
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()

    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate())

    if (!hasHadBirthdayThisYear) {
      age -= 1
    }

    return age
  }

  const BIRTH_DATE = new Date(2007, 10, 19)
  const age = calculateAge(BIRTH_DATE)

  return (
    <section
      id="about"
      className="mx-auto flex w-full max-w-300 flex-col gap-16 px-4 py-20 sm:px-6 md:gap-24"
    >
      <div className="flex justify-around items-center">
        <div className="flex flex-col items-end gap-4 border border-white/70 p-3 rounded-lg">
          {socials.map(({ name, icon: Icon, href, style }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-stone-400 transition-colors duration-300"
            >
              <Icon
                className={`h-6 w-6 sm:h-12 sm:w-12 ${style} transition-all duration-200 hover:scale-110`}
                strokeWidth={1.5}
              />
            </a>
          ))}
        </div>

        <div className="mx-auto flex max-w-2xl flex-col gap-4 text-left">
          <p className="text-base text-neutral-400 sm:text-lg">
            Salut, je m&#39;appelle Mathéo, je suis un développeur français de {age} ans. Je suis
            passionné par la programmation et toujours à la recherche de nouveaux défis.
          </p>
          <p className="text-base text-neutral-400 sm:text-lg">
            Tout a commencé lors de mon stage de troisième, où j&#39;ai créé ma première wishlist en
            HTML, CSS, JavaScript, PHP et MySQL. Ça a été le déclic : j&#39;ai voulu comprendre
            comment tout ça fonctionnait et j&#39;ai continué à apprendre de mon côté, jusqu&#39;à
            en faire mon métier.
          </p>
          <p className="text-base text-neutral-400 sm:text-lg">
            Je suis actuellement en Bachelor Développeur Web à l&#39;Efrei, en France, et je suis à
            la recherche d&#39;un stage pour continuer à progresser sur des projets concrets. Mon
            objectif : évoluer vers des projets ambitieux et en faire un véritable métier qui me
            permette de vivre de ma passion.
          </p>
        </div>
      </div>

      <div>
        <h3 className="mb-8 text-center text-xl font-semibold sm:text-2xl">Stack technique</h3>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6 md:grid-cols-7">
          {stack.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 rounded-xl border p-4 transition-transform duration-300 hover:-translate-y-1 border-white/50"
            >
              <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
              <span className="text-center text-xs sm:text-sm text-neutral-400">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
