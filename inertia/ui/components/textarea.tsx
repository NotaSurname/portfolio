import type { ChangeEvent } from 'react'
import CharCounter from '~/ui/components/char_counter'

type Props = {
  placeholder?: string
  id: string
  labelPlaceholder?: string
  rows?: number
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  error?: string
  className?: string
  required?: boolean
  maxChars?: number
}

export default function Textarea({
  placeholder,
  id,
  labelPlaceholder,
  rows = 4,
  value,
  onChange,
  error,
  className = '',
  required = false,
  maxChars,
}: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      {labelPlaceholder && (
        <label htmlFor={id} className="text-sm font-medium text-stone-200 flex gap-1">
          {labelPlaceholder}
          {required && (
            <span className="text-red-500" aria-hidden>
              *
            </span>
          )}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`resize-y rounded-xl border bg-white/5 px-4 py-2.5 text-white outline-none transition-colors focus:border-white ${
          error ? 'border-red-500' : 'border-white/10'
        } ${className}`}
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
