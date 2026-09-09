import { User } from 'lucide-react'
import BlurText from '~/ui/components/blur_text'

type HeroProps = {
  photoSrc?: string
  firstName: string
}

export default function Hero({ photoSrc, firstName }: HeroProps) {
  return (
    <section className="flex w-full items-center justify-center py-16 sm:py-20 md:py-28">
      <div className="relative h-72 w-56 sm:h-80 sm:w-64 md:h-104 md:w-72">
        <div
          className="absolute inset-0 scale-145 rounded-full blur-3xl dark:hidden"
          style={{
            background:
              'radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 hidden scale-145 rounded-full blur-3xl dark:block"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.5) 40%, transparent 70%)',
          }}
        />

        <div className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-4xl bg-white shadow-xl dark:bg-black">
          {photoSrc ? (
            <img src={photoSrc} alt={firstName} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-slate-100 dark:bg-slate-800">
              <User
                className="h-20 w-20 text-slate-400 dark:text-slate-600 sm:h-24 sm:w-24"
                strokeWidth={1.5}
              />
              <span className="font-medium text-red-500">Photo indisponible</span>
            </div>
          )}

          <div className="absolute inset-x-0 bottom-6 text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl">
            <BlurText
              text={firstName}
              delay={50}
              animateBy="letters"
              direction="top"
              className="mb-8 flex items-center justify-center text-2xl text-black"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
