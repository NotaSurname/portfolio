const PLACEHOLDER_COUNT = 6

type ProjectSize = 'normal' | 'medium' | 'wide'

type Project = {
  title?: string
  size?: ProjectSize
}

type ProjectsProps = {
  projects?: Project[]
}

export default function Projects({
  projects = Array.from({ length: PLACEHOLDER_COUNT }, () => ({})),
}: ProjectsProps) {
  return (
    <section
      id="projects"
      className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-4 py-20 sm:px-6 md:gap-20"
    >
      <div className="flex w-full max-w-3xl flex-wrap items-center justify-center gap-8">
        <div className="flex w-full items-center gap-4">
          <h2 className="shrink-0 text-3xl leading-tight font-semibold tracking-tight text-[#EDEAE4] sm:text-4xl">
            Mes projets
          </h2>
          <div className="h-px flex-1 bg-white/20 sm:h-0.5" />
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex aspect-video items-center justify-center rounded-md border border-white/10 transition-colors duration-200 hover:bg-white/3 ${
              project.size === 'wide' ? 'sm:col-span-2 lg:col-span-3' : ''
            }`}
          >
            {project.title && (
              <span className="font-mono text-sm text-[#9C9890]">{project.title}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
