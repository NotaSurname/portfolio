import { User } from 'lucide-react'
import BlurText from '~/ui/components/blur_text'

type HeroProps = {
  photoSrc?: string
  firstName: string
  cardColors?: string[]
}

const DEFAULT_COLORS = ['bg-amber-400', 'bg-sky-400']

export default function Hero({ photoSrc, firstName, cardColors = DEFAULT_COLORS }: HeroProps) {
  return (
    <section className="flex w-full items-center justify-center py-16 sm:py-20 md:py-28">
      <div className="relative h-72 w-56 sm:h-80 sm:w-64 md:h-96 md:w-72">
        <div
          className={`absolute inset-0 rounded-4xl ${cardColors[0]}`}
          style={{ transform: 'translate(-34px, 32px) rotate(-7deg)', zIndex: 0 }}
        />

        <div
          className={`absolute inset-0 rounded-4xl ${cardColors[1]}`}
          style={{ transform: 'translate(-10px, 8px)', zIndex: 1 }}
        />

        <div
          className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-4xl bg-white shadow-xl dark:bg-black"
          style={{ zIndex: 2, transform: 'translate(30px, 28px) rotate(14deg)' }}
        >
          {photoSrc ? (
            <img src={photoSrc} alt={firstName} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-100 dark:bg-slate-800">
              <User
                className="h-20 w-20 text-slate-400 dark:text-slate-600 sm:h-24 sm:w-24"
                strokeWidth={1.5}
              />
            </div>
          )}

          <span className="absolute inset-x-0 bottom-6 text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl">
            <BlurText
              text={firstName}
              delay={50}
              animateBy="letters"
              direction="top"
              className="text-2xl mb-8 text-black flex items-center justify-center"
            />
          </span>
        </div>
      </div>
    </section>
  )
}
