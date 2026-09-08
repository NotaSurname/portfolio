import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem('theme') as Theme | null
  if (stored) return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = useCallback(
    (origin?: { x: number; y: number }) => {
      const next: Theme = theme === 'dark' ? 'light' : 'dark'

      if (!document.startViewTransition || !origin) {
        setTheme(next)
        return
      }

      const transition = document.startViewTransition(() => {
        setTheme(next)
      })

      transition.ready.then(() => {
        const maxRadius = Math.hypot(
          Math.max(origin.x, window.innerWidth - origin.x),
          Math.max(origin.y, window.innerHeight - origin.y)
        )

        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${origin.x}px ${origin.y}px)`,
              `circle(${maxRadius}px at ${origin.x}px ${origin.y}px)`,
            ],
          },
          {
            duration: 700,
            easing: 'ease-in-out',
            pseudoElement: '::view-transition-new(root)',
          }
        )
      })
    },
    [theme]
  )

  return { theme, toggleTheme }
}
