// inertia/ui/components/input.tsx
import type { ChangeEvent, InputHTMLAttributes } from 'react'

type Props = {
  type: string
  placeholder?: string
  id: string
  showLabel?: boolean
  labelPlaceholder?: string
  autoComplete?: InputHTMLAttributes<HTMLInputElement>['autoComplete']
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  error?: string
}

export default function Input({
  type,
  placeholder,
  id,
  showLabel = true,
  labelPlaceholder,
  autoComplete,
  value,
  onChange,
  error,
}: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      {showLabel && (
        <label htmlFor={id} className="text-sm font-medium text-slate-900 dark:text-white">
          {labelPlaceholder}
        </label>
      )}
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`rounded-xl border bg-slate-50 px-4 py-2.5 text-slate-900 outline-none transition-colors
        focus:border-slate-900 dark:bg-white/5 dark:text-white dark:focus:border-white
        ${error ? 'border-red-500' : 'border-slate-200 dark:border-white/10'}`}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  )
}
