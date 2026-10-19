import { useState, type KeyboardEvent } from 'react'
import { Plus, X } from 'lucide-react'
import Button from '~/ui/components/button'
import CharCounter from '~/ui/components/char_counter'

type Props = {
  id: string
  labelPlaceholder?: string
  placeholder?: string
  tags: string[]
  onChange: (tags: string[]) => void
  error?: string
  className?: string
  maxTags?: number
  maxChars?: number
}

export default function TagInput({
  id,
  labelPlaceholder,
  placeholder,
  tags,
  onChange,
  error,
  className = '',
  maxTags,
  maxChars,
}: Props) {
  const [value, setValue] = useState('')

  const isFull = maxTags !== undefined && tags.length >= maxTags
  const isTooLong = maxChars !== undefined && value.trim().length > maxChars
  const canAdd = value.trim() !== '' && !isFull && !isTooLong

  const addTag = () => {
    if (!canAdd) return

    const tag = value.trim()
    const exists = tags.some((t) => t.toLowerCase() === tag.toLowerCase())
    if (!exists) onChange([...tags, tag])
    setValue('')
  }

  const removeTag = (tag: string) => onChange(tags.filter((t) => t !== tag))

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addTag()
    }
  }

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {(labelPlaceholder || maxTags !== undefined) && (
        <div className="flex items-center justify-between gap-2">
          {labelPlaceholder && (
            <label htmlFor={id} className="text-sm font-medium text-stone-200">
              {labelPlaceholder}
            </label>
          )}
          {maxTags !== undefined && (
            <CharCounter current={tags.length} max={maxTags} className="ml-auto shrink-0" />
          )}
        </div>
      )}

      <div className="flex gap-2">
        <input
          id={id}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className={`min-w-0 flex-1 rounded-xl border bg-white/5 px-4 py-2.5 text-white outline-none transition-colors focus:border-white ${
            error ? 'border-red-500' : 'border-white/10'
          }`}
        />
        <Button type="button" fullWidth={false} onClick={addTag} disabled={!canAdd}>
          <Plus />
          <span className="hidden sm:inline">Ajouter</span>
        </Button>
      </div>

      {(tags.length > 0 || maxChars !== undefined) && (
        <div className="mt-1 flex items-start justify-between gap-2">
          {tags.length > 0 && (
            <ul className="flex min-w-0 flex-1 flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="flex break-all items-center gap-1.5 rounded-full border border-white/10 bg-white/5 py-1 pr-1.5 pl-3 text-sm text-white"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    aria-label={`Retirer ${tag}`}
                    className="cursor-pointer rounded-full p-0.5 text-stone-200/70 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <X className="size-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {maxChars !== undefined && (
            <div className="ml-auto shrink-0">
              <CharCounter current={value.length} max={maxChars} />
            </div>
          )}
        </div>
      )}

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  )
}
