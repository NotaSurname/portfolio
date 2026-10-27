import { useForm } from '@inertiajs/react'
import ImageUpload from '~/ui/components/image_upload'
import Button from '~/ui/components/button'
import Switch from '~/ui/components/switch'

type Props = {
  currentImageUrl: string | null
  isPhotoVisible: boolean
}

export default function HeroPhotoCard({ currentImageUrl, isPhotoVisible }: Props) {
  const form = useForm({
    image: null as File | null,
    isPhotoVisible,
  })

  const isDirty = !!form.data.image || form.data.isPhotoVisible !== isPhotoVisible

  const submit = () => form.post('/admin/dashboard/hero-photo', { preserveScroll: true })

  return (
    <div className="flex w-full flex-col gap-3 rounded-lg border border-white/40 p-3 sm:p-4">
      <p className="text-sm font-medium text-stone-200">Photo du hero</p>
      <ImageUpload
        id="hero-photo"
        file={form.data.image}
        currentUrl={currentImageUrl}
        onChange={(file) => form.setData('image', file)}
        error={form.errors.image}
      />
      <div className="flex items-center justify-between gap-3 sm:h-11.5 sm:justify-end sm:gap-4">
        <Button
          variant="secondary"
          fullWidth={false}
          disabled={!isDirty || form.processing}
          onClick={submit}
          size="sm"
        >
          Enregistrer
        </Button>
        <Switch
          ariaLabel="Afficher la photo dans le Hero"
          checked={form.data.isPhotoVisible}
          onChange={(v) => form.setData('isPhotoVisible', v)}
          size="sm"
        />
      </div>
    </div>
  )
}
