import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

type Props = {
  children: string
  className?: string
}

const components: Components = {
  h1: (props) => <h1 className="text-2xl font-bold text-white sm:text-3xl" {...props} />,
  h2: (props) => <h2 className="text-xl font-semibold text-white sm:text-2xl" {...props} />,
  h3: (props) => <h3 className="text-lg font-semibold text-white sm:text-xl" {...props} />,
  p: (props) => <p className="text-sm text-stone-200/80 sm:text-base" {...props} />,
  a: (props) => (
    <a
      className="text-white underline underline-offset-2"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul
      className={`flex flex-col gap-1 text-sm text-stone-200/80 sm:text-base ${
        className?.includes('contains-task-list') ? 'list-none' : 'list-disc pl-5'
      }`}
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="flex list-decimal flex-col gap-1 pl-5 text-sm text-stone-200/80 sm:text-base"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.9em] text-white"
      {...props}
    />
  ),
  pre: (props) => <pre className="overflow-x-auto rounded-lg bg-black/40 p-3 text-sm" {...props} />,
  input: (props) => <input className="mr-2 align-middle" {...props} />,
}

export default function Markdown({ children, className = '' }: Props) {
  return (
    <div className={`flex w-full flex-col gap-3 wrap-break-word ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  )
}
