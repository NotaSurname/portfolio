import ContactForm from '~/ui/components/section/contact/contact_form'
import ContactInfo from '~/ui/components/section/contact/contact_info'
import { FiLinkedin } from 'react-icons/fi'
import { TbBrandGithub } from 'react-icons/tb'

const links = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mon-profil', icon: FiLinkedin },
  { label: 'GitHub', href: 'https://github.com/mon-profil', icon: TbBrandGithub },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-14 px-4 py-20 sm:px-6 md:gap-20"
    >
      <div className="mx-auto flex w-full max-w-3xl items-center gap-4">
        <div className="h-px flex-1 bg-white/20 sm:h-0.5" />
        <h2 className="shrink-0 text-3xl font-semibold tracking-tight text-[#EDEAE4] sm:text-4xl">
          Me contacter
        </h2>
        <div className="h-px flex-1 bg-white/20 sm:h-0.5" />
      </div>

      <div className="mx-auto grid w-full max-w-5xl items-start gap-6 lg:grid-cols-[2fr_3fr]">
        <ContactInfo
          title="Contact"
          description="Envie de réaliser un projet sans savoir par où commencer ? Je suis la personne qu'il vous faut !"
          links={links}
          location="Bordeaux, France"
        />
        <ContactForm action="/contact" />
      </div>
    </section>
  )
}
