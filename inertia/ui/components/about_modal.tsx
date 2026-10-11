import { type ProjectData } from '~/types/project'
import Modal from '~/ui/components/modal'
import Markdown from '~/ui/components/markdown'

type Props = {
  isOpen: boolean
  onClose: () => void
  project: ProjectData | null
  className?: string
}

export default function AboutModal({ isOpen, onClose, project, className = '' }: Props) {
  if (!project) return null

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      modalTitle={project.title}
      footer={
        project.stacks.length > 0 && (
          <ul className="flex flex-wrap-reverse gap-1.5 sm:gap-2">
            {project.stacks.map((stack) => (
              <li
                key={stack.uuid}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white sm:text-sm"
              >
                {stack.stackName}
              </li>
            ))}
          </ul>
        )
      }
    >
      <div className={`flex w-full flex-col gap-4 ${className}`}>
        <p className="text-sm whitespace-pre-line text-stone-200/80 sm:text-base">
          {project.description}
        </p>
        {project.explanation && <Markdown className="text-white">{project.explanation}</Markdown>}
      </div>
    </Modal>
  )
}
