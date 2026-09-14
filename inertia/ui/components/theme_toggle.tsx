import type { MouseEvent } from 'react'
import { useTheme } from '~/hooks/use_theme'

type Props = {
  type?: 'slider' | 'button'
}

export default function ThemeToggle({ type = 'slider' }: Props) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    toggleTheme({ x: e.clientX, y: e.clientY })
  }

  if (type === 'slider') {
    return (
      <button
        type="button"
        onClick={handleClick}
        aria-label="Basculer le thème clair/sombre"
        className="relative flex h-8 w-16 items-center rounded-full border cursor-pointer border-slate-900 bg-neutral-300 p-1 transition-colors dark:border-slate-100 dark:bg-neutral-700"
      >
        <span
          className={`flex h-6 w-6 items-center justify-center select-none rounded-full bg-white dark:bg-black text-xs shadow transition-transform duration-300 ${
            isDark ? 'translate-x-8' : 'translate-x-0'
          }`}
        >
          {isDark ? '🌙' : '☀️'}
        </span>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Basculer le thème clair/sombre"
      className="flex h-9 w-9 items-center justify-center cursor-pointer rounded-lg
      bg-transparent text-base transition-all duration-200 hover:bg-slate-200 dark:hover:bg-white/10"
    >
      <span className="select-none">{isDark ? '☀️' : '🌙'}</span>
    </button>
  )
}
