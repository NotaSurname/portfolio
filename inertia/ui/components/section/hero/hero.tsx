import ShinyText from '~/ui/components/shiny_text'
import BlobImage from '~/ui/components/section/hero/blob_image'
import { Briefcase, MapPin } from 'lucide-react'
import { usePage } from '@inertiajs/react'
import { type HeroStatusData } from '~/types/hero_status'

export default function Hero() {
  const { heroStatus, heroImageUrl } = usePage().props as unknown as {
    heroStatus: HeroStatusData | null
    heroImageUrl: string | null
  }

  return (
    <section className="relative min-h-screen flex w-full flex-col items-center justify-center overflow-hidden text-center">
      <div
        className={`relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 text-center sm:flex-row sm:gap-8 sm:px-6 sm:text-left md:max-w-390 ${heroImageUrl ? 'sm:justify-around' : 'mr-10'}`}
      >
        <div className="order-2 flex gap-3 min-h-24 flex-col text-4xl sm:order-1 sm:min-h-40 sm:text-5xl md:min-h-35 md:text-8xl">
          {heroStatus && (
            <p className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-stone-200 sm:px-4 sm:py-2 sm:text-sm w-fit">
              <Briefcase className="text-blue-500" />
              {heroStatus.text}
            </p>
          )}
          <ShinyText
            className="-ml-3 md:-ml-1.5"
            text={'Mathéo Noguès'.toUpperCase()}
            speed={2}
            delay={2}
            color="#9099a8"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />

          <div className="flex flex-col gap-6">
            <p className="text-blue-500 sm:text-2xl md:text-5xl">
              {'Développeur Full-stack'.toUpperCase()}
            </p>
            <p className="text-sm sm:text-md md:text-xl text-stone-200/60">
              Développeur web passionné, je conçois et développe des applications web modernes.
            </p>
            <p className="flex items-center gap-1.5 text-sm text-stone-200/60">
              <MapPin className="text-blue-500" />
              Bordeaux, France
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:w-auto mt-2">
            <a
              className="flex items-center justify-center px-6 py-2 text-sm cursor-pointer rounded-lg bg-blue-500 hover:bg-[#2A63BD] transition-colors duration-200"
              href="#projects"
            >
              Mes projets
            </a>
            <a
              className="flex items-center justify-center px-6 py-2 text-sm text-white cursor-pointer rounded-lg border border-slate-700 hover:border-blue-500 bg-transparent hover:bg-blue-500/10 transition-colors duration-200"
              href="#contact"
            >
              Me contacter
            </a>
          </div>
        </div>

        {heroImageUrl && (
          <BlobImage src={heroImageUrl} alt="Photo de Mathéo" className="order-1 sm:order-2" />
        )}
      </div>
    </section>
  )
}
