type SwitchProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  ariaLabel?: string
  className?: string
}

const SIZES = {
  sm: { track: 'h-7 w-12', thumb: 'h-5 w-5', on: 'translate-x-5' },
  md: { track: 'h-9 w-16', thumb: 'h-6 w-6', on: 'translate-x-7' },
  lg: { track: 'h-11 w-20', thumb: 'h-8 w-8', on: 'translate-x-9' },
}

export default function Switch({
  checked,
  onChange,
  size = 'md',
  disabled = false,
  ariaLabel,
  className = '',
}: SwitchProps) {
  const s = SIZES[size]

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex shrink-0 cursor-pointer items-center rounded-full border px-1 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:cursor-not-allowed disabled:opacity-50 ${s.track} ${
        checked ? 'border-blue-500 bg-blue-500' : 'border-white/40 bg-transparent'
      } ${className}`}
    >
      <span
        className={`rounded-full border border-white/70 bg-white/10 transition-transform duration-200 ${s.thumb} ${
          checked ? `${s.on} border-white bg-white` : 'translate-x-0'
        }`}
      />
    </button>
  )
}
