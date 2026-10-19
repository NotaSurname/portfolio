import Modal from '~/ui/components/modal'
import Button from '~/ui/components/button'
import { LoaderCircle, Trash2 } from 'lucide-react'

const DELETE_TYPES = {
  project: { modalTitle: 'Supprimer le projet', label: 'le projet' },
  experience: { modalTitle: "Supprimer l'expérience", label: "l'expérience" },
  text: { modalTitle: 'Supprimer le texte', label: 'ce texte' },
  user: { modalTitle: "Supprimer l'utilisateur", label: "l'utilisateur" },
}

type DeleteType = keyof typeof DELETE_TYPES // keyof = 'project' | 'text'

type Props = {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  type?: DeleteType
  modalTitle?: string
  ObjectTitle: string
  isLoading?: boolean
}

export default function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  type = 'project',
  modalTitle,
  ObjectTitle,
  isLoading = false,
}: Props) {
  const config = DELETE_TYPES[type]

  return (
    <Modal
      isOpen={isOpen}
      onClose={isLoading ? () => {} : onClose}
      modalTitle={config.modalTitle ?? modalTitle}
      icon={
        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/10 text-red-400">
          <Trash2 size={20} />
        </span>
      }
      footer={
        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <Button
            variant="secondary"
            type="button"
            fullWidth={false}
            onClick={onClose}
            disabled={isLoading}
          >
            Annuler
          </Button>
          <Button
            variant="delete"
            type="button"
            fullWidth={false}
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading && <LoaderCircle className="animate-spin" />}
            {isLoading ? 'Suppression…' : 'Supprimer'}
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <p className="leading-relaxed text-stone-200/70">
          Voulez-vous vraiment supprimer {config.label}
        </p>

        <p className="rounded-lg break-all py-2 font-medium text-stone-200">
          <span className="text-stone-200/70">« </span>
          {ObjectTitle}
          <span className="text-stone-200/70"> » ?</span>
        </p>

        <p className="leading-relaxed rounded-lg border border-red-500/20 bg-red-500/10 text-red-400 p-2">
          Cette action est irréversible.
        </p>
      </div>
    </Modal>
  )
}
