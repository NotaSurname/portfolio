import { useForm } from '@inertiajs/react'
import Switch from '~/ui/components/switch'
import Input from '~/ui/components/input'
import Button from '~/ui/components/button'
import { type HeroStatusData } from '~/types/hero_status'

type Props = {
  status: HeroStatusData
  action?: string
  maxLength?: number
  placeholder?: string
  className?: string
}

export default function HeroStatusCard({
  status,
  action = '/admin/dashboard/hero-status',
  maxLength = 100,
  placeholder = 'Ex : En recherche de stage',
  className = '',
}: Props) {
  const form = useForm({ isActive: status.isActive, text: status.text })

  const isDirty = form.data.isActive !== status.isActive || form.data.text !== status.text

  const submit = () => form.post(action, { preserveScroll: true })

  return (
    <div
      className={`flex w-full flex-col gap-3 rounded-lg border border-white/40 p-3 sm:flex-row sm:gap-4 sm:p-4 ${className}`}
    >
      <div className="min-w-0 flex-1">
        <Input
          id="hero-status-text"
          type="text"
          showLabel={false}
          placeholder={placeholder}
          value={form.data.text}
          onChange={(e) => form.setData('text', e.target.value)}
          error={form.errors.text}
          maxChars={maxLength}
        />
      </div>

      <div className="flex items-center justify-between gap-3 sm:h-11.5 sm:justify-start sm:gap-4">
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
          ariaLabel="Afficher le statut dans le Hero"
          checked={form.data.isActive}
          onChange={(v) => form.setData('isActive', v)}
          size="sm"
        />
      </div>
    </div>
  )
}
