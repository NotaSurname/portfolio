import { useState } from 'react'
import { router } from '@inertiajs/react'
import { ArrowDown, ArrowUp, Pencil, Trash2 } from 'lucide-react'
import type { AboutParagraphData } from '~/types/about'
import Button from '~/ui/components/button'
import DeleteModal from '~/ui/components/delete_modal'

type Props = {
  paragraphs: AboutParagraphData[]
  onEdit: (paragraph: AboutParagraphData) => void
}

const BASE_URL = '/admin/dashboard/about-paragraph'

const MOVE_BUTTON =
  'flex size-8 items-center justify-center rounded-lg border border-white/20 text-white transition-colors ' +
  'hover:bg-white/10 cursor-pointer disabled:cursor-not-allowed disabled:opacity-30'

const truncate = (text: string, max = 80) => (text.length > max ? `${text.slice(0, max)}…` : text)

export default function AboutParagraphCard({ paragraphs, onEdit }: Props) {
  const [paragraphToDelete, setParagraphToDelete] = useState<AboutParagraphData | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const closeDeleteModal = () => setParagraphToDelete(null)

  const confirmDelete = () => {
    if (!paragraphToDelete) return

    router.delete(`${BASE_URL}/${paragraphToDelete.uuid}/delete`, {
      preserveScroll: true,
      onStart: () => setIsDeleting(true),
      onFinish: () => setIsDeleting(false),
      onSuccess: closeDeleteModal,
    })
  }

  const move = (from: number, to: number) => {
    if (to < 0 || to >= paragraphs.length) return

    const next = [...paragraphs]
    const [moved] = next.splice(from, 1)
    next.splice(to, 0, moved)

    router.put(
      `${BASE_URL}/reorder`,
      { uuids: next.map((paragraph) => paragraph.uuid) },
      { preserveScroll: true }
    )
  }

  if (paragraphs.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-white/10 p-6 text-center text-stone-200/60">
        Aucun paragraphe pour le moment.
      </p>
    )
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        {paragraphs.map((paragraph, index) => (
          <div
            key={paragraph.uuid}
            className="flex flex-col gap-4 rounded-lg border border-white/10 p-4 sm:p-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="flex min-w-0 flex-col gap-2">
                <span className="font-mono text-xs text-stone-400">Paragraphe {index + 1}</span>
                <p className="whitespace-pre-line wrap-break-word text-sm leading-relaxed text-stone-400 sm:text-base">
                  {paragraph.content}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  aria-label="Monter"
                  disabled={index === 0}
                  onClick={() => move(index, index - 1)}
                  className={MOVE_BUTTON}
                >
                  <ArrowUp className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Descendre"
                  disabled={index === paragraphs.length - 1}
                  onClick={() => move(index, index + 1)}
                  className={MOVE_BUTTON}
                >
                  <ArrowDown className="size-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:justify-end">
              <Button
                variant="delete"
                size="sm"
                fullWidth={false}
                onClick={() => setParagraphToDelete(paragraph)}
              >
                <Trash2 />
                Supprimer
              </Button>
              <Button variant="edit" size="sm" fullWidth={false} onClick={() => onEdit(paragraph)}>
                <Pencil />
                Modifier
              </Button>
            </div>
          </div>
        ))}
      </div>

      <DeleteModal
        isOpen={paragraphToDelete !== null}
        type="text"
        isLoading={isDeleting}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
        ObjectTitle={truncate(paragraphToDelete?.content ?? '')}
      />
    </>
  )
}
