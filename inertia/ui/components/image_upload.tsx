import { useEffect, useMemo, useRef, useState, type DragEvent } from 'react'
import { ImagePlus, X } from 'lucide-react'

type Props = {
  id: string
  labelPlaceholder?: string
  file: File | null
  onChange: (file: File | null) => void
  currentUrl?: string | null
  accept?: string[]
  maxSizeMb?: number
  error?: string
  className?: string
}

const DEFAULT_ACCEPT = ['image/jpeg', 'image/png', 'image/webp']

export default function ImageUpload({
  id,
  labelPlaceholder,
  file,
  onChange,
  currentUrl = null,
  accept = DEFAULT_ACCEPT,
  maxSizeMb = 5,
  error,
  className = '',
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [localError, setLocalError] = useState<string>()

  const objectUrl = useMemo(() => (file ? URL.createObjectURL(file) : null), [file])
  const previewUrl = objectUrl ?? currentUrl

  useEffect(() => {
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [objectUrl])

  const handleFile = (selected: File | null | undefined) => {
    if (!selected) return

    if (!accept.includes(selected.type)) {
      setLocalError('Format non supporté (JPG, PNG ou WebP).')
      return
    }
    if (selected.size > maxSizeMb * 1024 * 1024) {
      setLocalError(`L'image dépasse ${maxSizeMb} Mo.`)
      return
    }

    setLocalError(undefined)
    onChange(selected)
  }

  const handleRemove = () => {
    setLocalError(undefined)
    onChange(null)
    if (inputRef.current) inputRef.current.value = ''
  }

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    setIsDragging(false)
    handleFile(e.dataTransfer.files?.[0])
  }

  const message = localError ?? error

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {labelPlaceholder && (
        <label htmlFor={id} className="text-sm font-medium text-stone-200">
          {labelPlaceholder}
        </label>
      )}

      <div className="relative">
        <label
          htmlFor={id}
          onDragOver={(e) => {
            e.preventDefault()
            setIsDragging(true)
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`flex cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-dashed bg-white/5 text-center text-sm text-stone-200/70 transition-colors hover:bg-white/10 ${
            message ? 'border-red-500' : isDragging ? 'border-white bg-white/10' : 'border-white/20'
          } ${previewUrl ? 'p-0' : 'px-4 py-8 sm:py-12'}`}
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Aperçu de l'image du projet"
              className="aspect-video w-full object-cover"
            />
          ) : (
            <>
              <ImagePlus className="size-6 sm:size-8" />
              <span>
                <span className="font-medium text-white">Clique pour choisir</span>
                <span className="hidden sm:inline"> ou glisse une image ici</span>
              </span>
              <span className="text-xs text-stone-200/50">
                JPG, PNG ou WebP, {maxSizeMb} Mo max
              </span>
            </>
          )}
        </label>

        {file && (
          <button
            type="button"
            onClick={handleRemove}
            aria-label="Retirer l'image"
            className="absolute top-2 right-2 cursor-pointer rounded-full bg-black/70 p-1.5 text-white backdrop-blur-sm transition-colors hover:bg-black"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        id={id}
        type="file"
        accept={accept.join(',')}
        onChange={(e) => handleFile(e.target.files?.[0])}
        className="sr-only"
      />

      {file && (
        <span className="truncate text-xs text-stone-200/50">
          {file.name} ({(file.size / 1024 / 1024).toFixed(2)} Mo)
        </span>
      )}
      {message && <span className="text-sm text-red-500">{message}</span>}
    </div>
  )
}
