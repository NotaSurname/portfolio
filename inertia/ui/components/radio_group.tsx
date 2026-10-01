type Option = {
  value: string
  label: string
  description?: string
}

type Props = {
  name: string
  legend?: string
  options: Option[]
  value: string
  onChange: (value: string) => void
  error?: string
  className?: string
}

export default function RadioGroup({
  name,
  legend,
  options,
  value,
  onChange,
  error,
  className = '',
}: Props) {
  return (
    <fieldset className={`flex min-w-0 flex-col gap-1.5 ${className}`}>
      {legend && <legend className="mb-1.5 text-sm font-medium text-stone-200">{legend}</legend>}

      <div className="flex flex-col gap-3 sm:flex-row">
        {options.map((option) => (
          <label key={option.value} className="relative flex-1 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="peer sr-only"
            />
            <div
              className={`flex h-full flex-col rounded-xl border bg-white/5 px-4 py-2.5 text-white transition-colors hover:bg-white/10 peer-checked:border-white peer-checked:bg-white/10 peer-focus-visible:ring-2 peer-focus-visible:ring-white/50 ${
                error ? 'border-red-500' : 'border-white/10'
              }`}
            >
              <span className="text-sm font-medium sm:text-base">{option.label}</span>
              {option.description && (
                <span className="text-xs text-stone-200/60">{option.description}</span>
              )}
            </div>
          </label>
        ))}
      </div>

      {error && <span className="text-sm text-red-500">{error}</span>}
    </fieldset>
  )
}
