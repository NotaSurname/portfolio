import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  link?: string
  disabled?: boolean
  className?: string
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
}

const BASE_STYLES =
  'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:px-5 sm:text-base [&>svg]:size-4 [&>svg]:shrink-0 sm:[&>svg]:size-5'

const VARIANT_STYLES = {
  primary: 'bg-white text-black',
  secondary: 'border border-white/10 bg-transparent text-white',
}

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  fullWidth = true,
  className = '',
  link,
  disabled = false,
  onClick,
}: Props) {
  const classes = `${BASE_STYLES} ${VARIANT_STYLES[variant]} ${fullWidth ? 'w-full' : ''} ${className}`

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
