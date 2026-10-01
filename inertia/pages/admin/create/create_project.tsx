import { useForm } from '@inertiajs/react'
import type { FormEvent } from 'react'
import Button from '~/ui/components/button'
import Input from '~/ui/components/input'
import Textarea from '~/ui/components/textarea'
import TagInput from '~/ui/components/tag_input'
import RadioGroup from '~/ui/components/radio_group'
import ImageUpload from '~/ui/components/image_upload'

export default function CreateProject() {
  const { data, setData, post, processing, errors } = useForm({
    image: null as File | null,
    title: '',
    description: '',
    explanation: '',
    projectUrl: '',
    githubUrl: '',
    cardSize: 'normal',
    stacks: [] as string[],
  })

  const CARD_SIZES = [
    { value: 'normal', label: 'Normale', description: 'Petite card' },
    { value: 'medium', label: 'Moyenne', description: 'Card intermédiaire' },
    { value: 'wide', label: 'Large', description: 'Pleine largeur' },
  ]

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    post('/admin/dashboard/projects/create')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 py-8 sm:py-12">
      <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/3 p-5 shadow-2xl shadow-black/40 sm:p-8">
        <div className="mb-6 text-center sm:mb-8">
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">Création de projet</h1>
          <p className="mt-2 text-sm text-stone-200/60">
            Renseigne les informations de ton nouveau projet.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <ImageUpload
            id="image"
            labelPlaceholder="Image du projet"
            file={data.image}
            onChange={(file) => setData('image', file)}
            error={errors.image}
          />

          <Input
            id="title"
            type="text"
            labelPlaceholder="Titre"
            placeholder="Mon super projet"
            value={data.title}
            onChange={(e) => setData('title', e.target.value)}
            error={errors.title}
          />

          <Textarea
            id="description"
            labelPlaceholder="Description courte"
            placeholder="Affichée sur la page d'accueil"
            rows={2}
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
            error={errors.description}
          />

          <Textarea
            id="explanation"
            labelPlaceholder="Explication détaillée (markdown)"
            placeholder="## Contexte&#10;&#10;Explique ton projet en détail..."
            rows={8}
            className="font-mono text-sm"
            value={data.explanation}
            onChange={(e) => setData('explanation', e.target.value)}
            error={errors.explanation}
          />

          <TagInput
            id="stacks"
            labelPlaceholder="Stacks"
            placeholder="React, AdonisJS..."
            tags={data.stacks}
            onChange={(tags) => setData('stacks', tags)}
            error={errors.stacks}
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Input
              id="projectUrl"
              type="url"
              labelPlaceholder="Lien du projet"
              placeholder="https://..."
              value={data.projectUrl}
              onChange={(e) => setData('projectUrl', e.target.value)}
              error={errors.projectUrl}
            />
            <Input
              id="githubUrl"
              type="url"
              labelPlaceholder="Lien GitHub"
              placeholder="https://github.com/..."
              value={data.githubUrl}
              onChange={(e) => setData('githubUrl', e.target.value)}
              error={errors.githubUrl}
            />
          </div>

          <RadioGroup
            name="cardSize"
            legend="Taille de la card"
            options={CARD_SIZES}
            value={data.cardSize}
            onChange={(value) => setData('cardSize', value)}
            error={errors.cardSize}
          />

          <div className="mt-2 flex flex-col-reverse gap-3 border-t border-white/10 pt-5 sm:flex-row sm:justify-end">
            <Button
              link="/admin/dashboard/projects"
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
              {processing ? 'Création...' : 'Créer le projet'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
