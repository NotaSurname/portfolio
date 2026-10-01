import type { ChangeEvent } from 'react'

type Props = {
  placeholder?: string
  id: string
  labelPlaceholder?: string
  rows?: number
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  error?: string
  className?: string
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
}: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      {labelPlaceholder && (
        <label htmlFor={id} className="text-sm font-medium text-stone-200">
          {labelPlaceholder}
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
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  )
}
