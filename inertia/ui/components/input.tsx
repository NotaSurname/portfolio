import type { ChangeEvent, InputHTMLAttributes } from 'react'
import CharCounter from '~/ui/components/char_counter'

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
  required?: boolean
  maxChars?: number
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
  required = false,
  maxChars,
}: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      {showLabel && (
        <label htmlFor={id} className="text-sm font-medium text-stone-200 flex gap-1">
          {labelPlaceholder}
          {required && (
            <span className="text-red-500" aria-hidden>
              *
            </span>
          )}
        </label>
      )}
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`rounded-xl border px-4 py-2.5 outline-none transition-colors
        bg-white/5 text-white focus:border-white
        ${error ? 'border-red-500' : 'border-white/10'}`}
      />
      {(error || maxChars !== undefined) && (
        <div className="flex items-start justify-between gap-2">
          {error && <span className="text-sm text-red-500">{error}</span>}
          {maxChars !== undefined && (
            <CharCounter current={value.length} max={maxChars} className="ml-auto shrink-0" />
          )}
        </div>
      )}
    </div>
  )
}
