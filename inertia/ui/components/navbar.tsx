export default function NavBar() {
  return (
    <nav className="mx-auto flex w-fit max-w-full flex-wrap items-stretch justify-center gap-3 p-2 sm:p-3">
      <div className="flex min-w-fit items-center gap-3 rounded-2xl bg-neutral-100 px-4 py-2 sm:px-5">
        <span className="text-sm font-medium text-neutral-900">Logo</span>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-neutral-900">Mathéo</span>
          <span className="text-xs text-neutral-500">Développeur Web</span>
        </div>
      </div>

      {/* Liens + toggle theme */}
      <div className="flex min-w-fit items-center gap-6 rounded-2xl bg-neutral-100 px-4 py-2 sm:gap-8 sm:px-6">
        <ul className="flex flex-wrap items-center gap-4 text-sm font-medium text-neutral-900 sm:gap-6">
          <li className="cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white transition-all duration-400">
            A propos
          </li>
          <li className="cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white transition-all duration-400">
            Mes projets
          </li>
          <li className="cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white transition-all duration-400">
            Me contacter
          </li>
        </ul>

        {/* Placeholder — ThemeToggle en composant séparé à venir */}
        <div className="shrink-0">{/* <ThemeToggle /> */}ThemeToggle</div>
      </div>
    </nav>
  )
}
