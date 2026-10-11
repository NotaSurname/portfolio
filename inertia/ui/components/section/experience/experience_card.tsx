import { router } from '@inertiajs/react'
import { ArrowDown, ArrowUp, Calendar, MapPin, Pencil, Trash2 } from 'lucide-react'
import { type ExperienceData } from '~/types/experience'
import Button from '~/ui/components/button'
import { useState } from 'react'
import DeleteModal from '~/ui/components/delete_modal'

type Props = {
  experiences: ExperienceData[]
  showCustom?: boolean
}

const MOVE_BUTTON =
  'flex size-8 items-center justify-center rounded-lg border border-white/20 text-white transition-colors ' +
  'hover:bg-white/10 cursor-pointer disabled:cursor-not-allowed disabled:opacity-30'

const editUrl = (experience: ExperienceData) =>
  `/admin/dashboard/experience/${experience.uuid}/edit`

export default function ExperienceCard({ experiences, showCustom = false }: Props) {
  const [experienceToDeleTe, setExperienceToDelete] = useState<ExperienceData | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const isDeleteModalOpen = experienceToDeleTe !== null
  const closeDeleteModal = () => setExperienceToDelete(null)

  const handleDelete = (experience: ExperienceData | null) => setExperienceToDelete(experience)

  const confirmDelete = () => {
    if (!isDeleteModalOpen && !experienceToDeleTe) return
    router.delete(`/admin/dashboard/experience/${experienceToDeleTe?.uuid}/delete`, {
      preserveScroll: true,
      onStart: () => setIsDeleting(true),
      onFinish: () => setIsDeleting(false),
      onSuccess: () => closeDeleteModal(),
    })
  }

  const move = (from: number, to: number) => {
    if (to < 0 || to >= experiences.length) return

    const next = [...experiences]
    const [moved] = next.splice(from, 1)
    next.splice(to, 0, moved)

    router.put(
      '/admin/dashboard/experience/reorder',
      { uuids: next.map((experience) => experience.uuid) },
      { preserveScroll: true }
    )
  }

  return (
    <>
      <div className="relative w-full pl-6 sm:pl-8">
        <div className="absolute bottom-0 left-2.5 top-2 w-px bg-white/10 sm:left-3.5" />

        <div className="flex flex-col gap-12">
          {experiences.map((experience, index) => (
            <div key={experience.uuid} className="relative flex flex-col gap-2">
              <div className="absolute -left-4.75 top-1.5 h-3 w-3 rounded-full border border-blue-500 bg-neutral-950 sm:-left-5.75" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-medium text-[#EDEAE4]">
                  {experience.role} <span className="text-blue-500">@ {experience.company}</span>
                </h3>
                <span className="flex items-center gap-1.5 font-mono text-xs text-stone-400">
                  <Calendar className="h-3.5 w-3.5" />
                  {experience.period}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-stone-400">
                <MapPin className="h-3.5 w-3.5 text-blue-500" />
                {experience.location}
              </div>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <p className="text-sm leading-relaxed text-stone-400 sm:text-base">
                  {experience.description}
                </p>

                {showCustom && (
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
                      disabled={index === experiences.length - 1}
                      onClick={() => move(index, index + 1)}
                      className={MOVE_BUTTON}
                    >
                      <ArrowDown className="size-4" />
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap-reverse gap-2">
                  {experience.stacks.map((stack) => (
                    <span
                      key={stack.uuid}
                      className="rounded-lg border border-white/10 bg-white/2 px-2.5 py-1 font-mono text-xs text-stone-200/80"
                    >
                      {stack.stackName}
                    </span>
                  ))}
                </div>

                {showCustom && (
                  <div className="flex items-center gap-2">
                    <Button
                      variant="delete"
                      size="sm"
                      fullWidth={false}
                      onClick={() => {
                        handleDelete(experience)
                      }}
                    >
                      <Trash2 />
                      Supprimer
                    </Button>
                    <Button variant="edit" size="sm" fullWidth={false} link={editUrl(experience)}>
                      <Pencil />
                      Modifier
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        type="experience"
        isLoading={isDeleting}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
        ObjectTitle={experienceToDeleTe?.role ?? ''}
      />
    </>
  )
}
