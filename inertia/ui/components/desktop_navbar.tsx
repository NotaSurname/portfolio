import { useRef, type MouseEvent } from 'react'
import ThemeToggle from '~/ui/components/theme_toggle'

export default function Desktop_navbar() {
  const identityRef = useRef<HTMLDivElement>(null)
  const identityCircleRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const linksCircleRef = useRef<HTMLDivElement>(null)

  const moveCircle = (
    e: MouseEvent<HTMLElement>,
    boxRef: React.RefObject<HTMLDivElement | null>,
    circleRef: React.RefObject<HTMLDivElement | null>
  ) => {
    const box = boxRef.current
    const circle = circleRef.current
    if (!box || !circle) return

    const rect = box.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    circle.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
    circle.style.opacity = '1'
  }

  const hideCircle = (circleRef: React.RefObject<HTMLDivElement | null>) => {
    if (circleRef.current) circleRef.current.style.opacity = '0'
  }

  return (
    <nav className="mx-auto flex w-fit max-w-full flex-wrap items-stretch justify-center gap-6 md:gap-6 lg:gap-12 p-2 sm:p-3">
      <div
        ref={identityRef}
        onMouseMove={(e) => moveCircle(e, identityRef, identityCircleRef)}
        onMouseLeave={() => hideCircle(identityCircleRef)}
        className="relative flex min-w-fit items-center gap-1.5 overflow-hidden rounded-2xl bg-white dark:bg-black px-4 py-5 sm:gap-3 sm:px-5"
      >
        <span className="relative z-10 text-sm font-medium text-slate-900 dark:text-white">
          Logo
        </span>
        <div className="relative z-10 flex flex-col leading-tight">
          <span className="font-semibold text-slate-900 dark:text-white">Mathéo</span>
          <span className="text-sm text-slate-500 dark:text-white/70">Développeur Web</span>
        </div>

        <div
          ref={identityCircleRef}
          className="pointer-events-none absolute left-0 top-0 z-20 h-14 w-14 rounded-full bg-white opacity-0 mix-blend-difference transition-[transform,opacity] duration-500 ease-out"
        />
      </div>

      <div
        ref={linksRef}
        onMouseMove={(e) => moveCircle(e, linksRef, linksCircleRef)}
        onMouseLeave={() => hideCircle(linksCircleRef)}
        className="relative flex min-w-fit items-center gap-6 overflow-hidden rounded-2xl bg-white dark:bg-black px-4 py-2 sm:gap-8 sm:px-6"
      >
        <ul className="relative z-10 flex flex-wrap items-center gap-4 font-medium text-slate-900 dark:text-white sm:gap-6">
          <li className="cursor-pointer p-3 rounded-lg hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition-all duration-400">
            A propos
          </li>
          <li className="cursor-pointer p-3 rounded-lg hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition-all duration-400">
            Mes projets
          </li>
          <li className="cursor-pointer p-3 rounded-lg hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition-all duration-400">
            Me contacter
          </li>
        </ul>

        <div className="relative z-10 shrink-0">
          <ThemeToggle />
        </div>

        <div
          ref={linksCircleRef}
          className="pointer-events-none absolute left-0 top-0 z-20 h-14 w-14 rounded-full bg-white opacity-0 mix-blend-difference transition-[transform,opacity] duration-500 ease-out"
        />
      </div>
    </nav>
  )
}
