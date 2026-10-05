import { useState } from 'react'
import { router } from '@inertiajs/react'
import { Pencil, Trash2 } from 'lucide-react'
import type { ProjectData } from '~/types/project'
import Button from '~/ui/components/button'
import BorderGlow from '~/ui/components/border_glow'
import DeleteModal from '~/ui/components/delete_modal'

type ProjectsProps = {
  projects?: ProjectData[]
  showCustom?: boolean
}

type CardSize = ProjectData['cardSize']

const SIZE_STYLES: Record<CardSize, string> = {
  normal: '',
  medium: 'sm:col-span-2',
  wide: 'sm:col-span-2 lg:col-span-3',
}

const IMAGE_STYLES: Record<CardSize, string> = {
  normal: 'h-48',
  medium: 'h-48',
  wide: 'h-48 lg:h-56',
}

const editUrl = (project: ProjectData) => `/admin/dashboard/projects/${project.uuid}/edit`

export default function ProjectCard({ projects = [], showCustom = false }: ProjectsProps) {
  const [projectToDelete, setProjectToDelete] = useState<ProjectData | null>(null)

  const handleDelete = (project: ProjectData) => setProjectToDelete(project)
  const closeDeleteModal = () => setProjectToDelete(null)

  const [isDeleting, setIsDeleting] = useState(false)

  const confirmDelete = () => {
    if (!projectToDelete) return
    router.delete(`/admin/dashboard/projects/${projectToDelete.uuid}/delete`, {
      preserveScroll: true,
      onStart: () => setIsDeleting(true),
      onFinish: () => setIsDeleting(false),
      onSuccess: closeDeleteModal,
    })
  }

  if (projects.length === 0) {
    return <p className="py-12 text-center text-stone-200/60">Aucun projet pour le moment.</p>
  }

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <BorderGlow
            key={project.uuid}
            className={SIZE_STYLES[project.cardSize]}
            edgeSensitivity={7}
            glowColor="40 80 80"
            backgroundColor="#0a0a0a"
            borderRadius={8}
            glowRadius={61}
            glowIntensity={0.3}
            coneSpread={7}
            animated={false}
            colors={['#ffffff', '#ffffff', '#ffffff']}
          >
            <article className="flex flex-1 flex-col overflow-hidden rounded-lg">
              <img
                src={project.image.url}
                alt={project.title}
                className={`w-full shrink-0 object-cover ${IMAGE_STYLES[project.cardSize]}`}
              />

              <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-semibold text-white">{project.title}</h2>
                  <p className="line-clamp-2 text-sm text-stone-200/70">{project.description}</p>
                </div>

                {project.stacks.length > 0 && (
                  <ul className="mt-auto flex flex-wrap gap-1.5">
                    {project.stacks.map((stack) => (
                      <li
                        key={stack.uuid}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white"
                      >
                        {stack.stackName}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mx-3 mb-3 flex flex-wrap items-center justify-end gap-2">
                {showCustom && (
                  <>
                    <Button
                      variant="delete"
                      size="sm"
                      fullWidth={false}
                      onClick={() => handleDelete(project)}
                    >
                      <Trash2 />
                      Supprimer
                    </Button>
                    <Button variant="edit" size="sm" fullWidth={false} link={editUrl(project)}>
                      <Pencil />
                      Modifier
                    </Button>
                  </>
                )}
                <Button variant="secondary" size="sm" fullWidth={false}>
                  En savoir plus
                </Button>
              </div>
            </article>
          </BorderGlow>
        ))}
      </div>

      <DeleteModal
        isOpen={projectToDelete !== null}
        type="project"
        projectTitle={projectToDelete?.title ?? ''}
        modalTitle={projectToDelete?.title ?? ''}
        isLoading={isDeleting}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
      />
    </>
  )
}
