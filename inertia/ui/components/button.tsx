import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  link?: string
  disabled?: boolean
  className?: string
}

const VARIANT_STYLES = {
  primary: 'bg-black text-white dark:bg-white dark:text-black',
  secondary:
    'border border-slate-200 bg-transparent text-slate-900 dark:border-white/10 dark:text-white',
}

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  fullWidth = true,
  className = '',
  link,
  disabled = false,
}: Props) {
  if (link) {
    return (
      <a
        href={link}
        className={`cursor-pointer rounded-xl py-2.5 font-medium transition-opacity hover:opacity-90
      disabled:cursor-not-allowed disabled:opacity-50 ${VARIANT_STYLES[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={`cursor-pointer rounded-xl py-2.5 font-medium transition-opacity hover:opacity-90
      disabled:cursor-not-allowed disabled:opacity-50 ${VARIANT_STYLES[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
