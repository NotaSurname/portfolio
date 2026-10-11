import { X } from 'lucide-react'
import { type ReactNode, useEffect } from 'react'

type Props = {
  isOpen: boolean
  onClose: () => void
  modalTitle?: string
  icon?: ReactNode
  children: ReactNode
  footer?: ReactNode
}

const CLOSE_BUTTON_STYLES =
  'shrink-0 cursor-pointer rounded-lg p-1.5 text-white/70 transition-all duration-200 hover:bg-white/7 hover:text-stone-200'

export default function Modal({ isOpen, onClose, modalTitle, icon, children, footer }: Props) {
  useEffect(() => {
    if (!isOpen) return

    const { body, documentElement } = document
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth
    const prevOverflow = body.style.overflow
    const prevPaddingRight = body.style.paddingRight

    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`

    return () => {
      body.style.overflow = prevOverflow
      body.style.paddingRight = prevPaddingRight
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 "
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[calc(100vh-2rem)] w-full max-w-lg flex-col rounded-xl border border-white/10 bg-neutral-950 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {modalTitle ? (
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6 sm:py-5">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              {icon}
              <h2 className="min-w-0 wrap-break-word text-xl font-semibold text-stone-200">
                {modalTitle}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className={CLOSE_BUTTON_STYLES}
            >
              <X size={22} />
            </button>
          </div>
        ) : (
          <div className="flex shrink-0 justify-end px-5 pt-4 sm:px-6 sm:pt-5">
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className={CLOSE_BUTTON_STYLES}
            >
              <X size={22} />
            </button>
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">{children}</div>

        {footer && (
          <div className="shrink-0 border-t border-white/10 px-5 py-4 sm:px-6 sm:py-5">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}
