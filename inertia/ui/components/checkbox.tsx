import { Check } from 'lucide-react'

type Props = {
  id: string
  label: string
  description?: string
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  error?: string
}

export default function Checkbox({
  id,
  label,
  description,
  checked,
  onChange,
  disabled = false,
  error,
}: Props) {
  const boxState = checked
    ? 'border-blue-500 bg-blue-500 text-white'
    : error
      ? 'border-red-500 bg-white/5'
      : 'border-white/10 bg-white/5'

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-stone-200">
        {label}
      </label>

      <label
        htmlFor={id}
        className={`flex items-center gap-3 ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
      >
        <input
          id={id}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
          className="peer sr-only"
        />
        <span
          className={`flex size-6 shrink-0 items-center justify-center rounded-md border
          transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue-500 ${boxState}`}
        >
          {checked && <Check className="size-4" strokeWidth={3} />}
        </span>
        {description && <span className="min-w-0 text-sm text-stone-200/70">{description}</span>}
      </label>

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  )
}
