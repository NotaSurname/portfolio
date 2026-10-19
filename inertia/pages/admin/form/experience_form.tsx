import { useForm } from '@inertiajs/react'
import { type FormEvent, useEffect } from 'react'
import Button from '~/ui/components/button'
import Input from '~/ui/components/input'
import TagInput from '~/ui/components/tag_input'
import Textarea from '~/ui/components/textarea'
import { type ExperienceData } from '~/types/experience'

const FIELD_ORDER = [
  'image',
  'title',
  'description',
  'explanation',
  'stacks',
  'projectUrl',
  'githubUrl',
  'cardSize',
]

const LIMITS = { role: 255, company: 255, location: 255, period: 255, description: 1000 }

type Props = {
  experience?: ExperienceData
}

export default function CreateProject({ experience }: Props) {
  const isEdit = !!experience

  const { data, setData, post, processing, errors } = useForm({
    role: experience?.role ?? '',
    company: experience?.company ?? '',
    location: experience?.location ?? '',
    period: experience?.period ?? '',
    description: experience?.description ?? '',
    stacks: experience?.stacks?.map((stack) => stack.stackName) ?? [],
  })

  useEffect(() => {
    const errorKeys = Object.keys(errors)
    if (errorKeys.length === 0) return

    const firstField = FIELD_ORDER.find((field) =>
      errorKeys.some((key) => key === field || key.startsWith(`${field}.`))
    )
    if (!firstField) return

    const element =
      document.getElementById(firstField) ??
      document.querySelector<HTMLElement>(`[name="${firstField}"]`)

    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    element?.focus({ preventScroll: true })
  }, [errors])

  const stackError = Object.entries(errors).find(([key]) => key.startsWith('stacks'))?.[1]

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    post(
      isEdit
        ? `/admin/dashboard/experience/${experience.uuid}/edit`
        : '/admin/dashboard/experience/create',
      { preserveScroll: 'errors' }
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 py-8 sm:py-12">
      <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/3 p-5 shadow-2xl shadow-black/40 sm:p-8">
        <div className="mb-6 text-center sm:mb-8">
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">
            {isEdit ? "Modifie l'expérience" : 'Ajoute une expérience'}
          </h1>
          <p className="mt-2 text-sm text-stone-200/60">
            {isEdit
              ? 'Modifie les informations relative à ton expérience professionnel.'
              : 'Renseigne les informations relative à ton expérience professionnel.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            id="role"
            type="text"
            labelPlaceholder="Rôle"
            placeholder="Développeur web"
            value={data.role}
            onChange={(e) => setData('role', e.target.value)}
            error={errors.role}
            maxChars={LIMITS.role}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              id="company"
              type="text"
              labelPlaceholder="Entreprise / Agence"
              placeholder="Google, Capgemini, etc..."
              value={data.company}
              onChange={(e) => setData('company', e.target.value)}
              error={errors.company}
              maxChars={LIMITS.company}
            />

            <Input
              id="location"
              type="text"
              labelPlaceholder="Localisation"
              placeholder="Bordeaux, Paris, etc..."
              value={data.location}
              onChange={(e) => setData('location', e.target.value)}
              error={errors.location}
              maxChars={LIMITS.location}
            />
          </div>

          <Input
            id="period"
            type="text"
            labelPlaceholder="Période"
            placeholder="Janvier 2026 - Fevrier 2026"
            value={data.period}
            onChange={(e) => setData('period', e.target.value)}
            error={errors.period}
            maxChars={LIMITS.period}
          />

          <Textarea
            id="description"
            labelPlaceholder="Courte description"
            placeholder="Description des missions"
            rows={2}
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
            error={errors.description}
            maxChars={LIMITS.description}
          />

          <TagInput
            id="stacks"
            labelPlaceholder="Stacks"
            placeholder="React, AdonisJS..."
            tags={data.stacks}
            onChange={(tags) => setData('stacks', tags)}
            error={stackError}
          />

          <div className="mt-2 flex flex-col-reverse gap-3 border-t border-white/10 pt-5 sm:flex-row sm:justify-end">
            <Button
              link="/admin/dashboard/experiences"
              variant="secondary"
              fullWidth={false}
              className="w-full sm:w-auto"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              fullWidth={false}
              disabled={processing}
              className="w-full sm:w-auto"
            >
              {processing
                ? isEdit
                  ? 'Enregistrement...'
                  : 'Création...'
                : isEdit
                  ? "Modifier l'expérience"
                  : "Créer l'expérience"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
