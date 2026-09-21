import ShinyText from '~/ui/components/shiny_text'
import BlobImage from '~/ui/section/hero/blob_image'
import { MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex w-full flex-col items-center justify-center overflow-hidden text-center">
      <div className="relative flex max-w-7xl w-full flex-col items-center gap-8 text-center sm:flex-row sm:justify-around sm:gap-8 sm:text-left md:max-w-390">
        <div className="order-2 flex gap-3 min-h-24 flex-col text-4xl sm:order-1 sm:min-h-40 sm:text-5xl md:min-h-35 md:text-8xl">
          <ShinyText
            text={'Mathéo Noguès'.toUpperCase()}
            speed={2}
            delay={2}
            color="#6a7282"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
          <p className="text-[#357DED] sm:text-2xl md:text-5xl">
            {' Développeur Full-stack'.toUpperCase()}
          </p>
          <p className="sm:text-md md:text-xl text-stone-200/60 mt-2">
            Développeur web passionné, je conçois et développe des applications web modernes.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-stone-200/60 ">
            <MapPin className="text-[#357DED]" />
            Bordeaux, France
          </p>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
            <a
              className="flex items-center justify-center px-6 py-2 text-sm cursor-pointer rounded-lg bg-[#357DED] hover:bg-[#2A63BD] transition-colors duration-200"
              href="#projects"
            >
              Mes projets
            </a>
            <a
              className="flex items-center justify-center px-6 py-2 text-sm text-white cursor-pointer rounded-lg border border-slate-700 hover:border-[#357DED] bg-transparent hover:bg-[#357DED]/10 transition-colors duration-200"
              href="#contact"
            >
              Me contacter
            </a>
          </div>
        </div>

        <BlobImage src="/moi.jpg" alt="Photo de Mathéo" className="order-1 sm:order-2" />
      </div>
    </section>
  )
}
