import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  variant?: 'primary' | 'secondary' | 'edit' | 'delete'
  size?: 'sm' | 'md'
  fullWidth?: boolean
  link?: string
  disabled?: boolean
  className?: string
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
}

const BASE_STYLES =
  'inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-xl font-medium transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 [&>svg]:shrink-0'

const SIZE_STYLES = {
  sm: 'gap-1.5 px-3 py-1.5 text-xs sm:text-sm [&>svg]:size-3.5 sm:[&>svg]:size-4',
  md: 'gap-2 px-4 py-2.5 text-sm sm:px-5 sm:text-base [&>svg]:size-4 sm:[&>svg]:size-5',
}

const VARIANT_STYLES = {
  primary: 'bg-white text-black',
  secondary:
    'border border-white/10 bg-transparent text-white hover:bg-white/20 hover:border-white/20',
  edit: 'border border-sky-400/30 bg-sky-400/10 text-sky-300 hover:bg-sky-400/20',
  delete: 'border border-red-400/30 bg-red-500/10 text-red-300 hover:bg-red-500/20',
}

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = true,
  className = '',
  link,
  disabled = false,
  onClick,
}: Props) {
  const classes = `${BASE_STYLES} ${SIZE_STYLES[size]} ${VARIANT_STYLES[variant]} ${fullWidth ? 'w-full' : ''} ${className}`

  if (link) {
    return (
      <a href={link} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
