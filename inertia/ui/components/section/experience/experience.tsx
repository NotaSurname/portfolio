import ExperienceCard from '~/ui/components/section/experience/experience_card'
import { usePage } from '@inertiajs/react'
import { type ExperienceData } from '~/types/experience'

export default function Experience() {
  const { experiences } = usePage().props as unknown as {
    experiences: ExperienceData[]
  }
  return (
    <section
      id="experiences"
      className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-14 px-4 py-20 sm:px-6 md:gap-20"
    >
      <div className="mx-auto flex w-full max-w-3xl items-center gap-4">
        <div className="h-px flex-1 bg-white/20 sm:h-0.5" />
        <h2 className="shrink-0 text-3xl font-semibold tracking-tight text-[#EDEAE4] sm:text-4xl">
          Mes expériences
        </h2>
        <div className="h-px flex-1 bg-white/20 sm:h-0.5" />
      </div>

      <ExperienceCard experiences={experiences} />
    </section>
  )
}
