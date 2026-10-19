import { useForm } from '@inertiajs/react'
import { LoaderCircle } from 'lucide-react'
import type { AboutParagraphData } from '~/types/about'
import Button from '~/ui/components/button'
import Modal from '~/ui/components/modal'
import Textarea from '~/ui/components/textarea'

type Props = {
  onClose: () => void
  paragraph?: AboutParagraphData | null
}

const BASE_URL = '/admin/dashboard/about-paragraph'
const MAX_LENGTH = 2000

export default function AboutParagraphModal({ onClose, paragraph = null }: Props) {
  const form = useForm({ content: paragraph?.content ?? '' })
  const length = form.data.content.length

  const submit = () => {
    const url = paragraph ? `${BASE_URL}/${paragraph.uuid}/edit` : `${BASE_URL}/create`

    form.post(url, {
      preserveScroll: true,
      onSuccess: onClose,
    })
  }

  return (
    <Modal
      isOpen
      onClose={form.processing ? () => {} : onClose}
      modalTitle={paragraph ? 'Modifier le paragraphe' : 'Ajouter un paragraphe'}
      footer={
        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <Button
            variant="secondary"
            fullWidth={false}
            onClick={onClose}
            disabled={form.processing}
          >
            Annuler
          </Button>
          <Button fullWidth={false} onClick={submit} disabled={form.processing}>
            {form.processing && <LoaderCircle className="animate-spin" />}
            {form.processing ? 'Enregistrement…' : 'Enregistrer'}
          </Button>
        </div>
      }
    >
      <form
        onSubmit={(e) => {
          e.preventDefault()
          submit()
        }}
        className="flex flex-col gap-1.5"
      >
        <Textarea
          id="about-paragraph"
          labelPlaceholder="Paragraphe"
          placeholder="Écris ton paragraphe..."
          rows={8}
          required
          value={form.data.content}
          onChange={(e) => form.setData('content', e.target.value)}
          error={form.errors.content}
        />
        <span
          className={`self-end text-xs ${length > MAX_LENGTH ? 'text-red-500' : 'text-stone-200/60'}`}
        >
          {length}/{MAX_LENGTH}
        </span>
      </form>
    </Modal>
  )
}
