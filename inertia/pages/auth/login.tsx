import Input from '~/ui/components/input'
import ThemeToggle from '~/ui/components/theme_toggle'
import Button from '~/ui/components/button'
import { useForm, usePage } from '@inertiajs/react'
import { type FormEvent } from 'react'
import { Link } from '@adonisjs/inertia/react'

export default function Login() {
  const { data, setData, post, processing } = useForm({
    email: '',
    password: '',
  })

  const { errors } = usePage<{ errors?: Record<string, string> }>().props
  const { flash } = usePage<{ flash?: { error?: string } }>()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    post('/login')
  }
  return (
    <section className="flex min-h-screen w-full items-center justify-center px-4 py-16 dark:bg-[#070707]">
      <div className="relative w-full max-w-sm rounded-4xl bg-white p-8 shadow-xl dark:bg-black sm:p-10">
        <div className="absolute top-5 right-5">
          <ThemeToggle type="button" />
        </div>
        <div className="absolute group flex flex-col top-5 left-5 text-black font-medium dark:text-stone-200">
          <Link href="/">← Retour</Link>
          <span className="h-0.5 w-0 rounded bg-neutral-500 transition-all duration-300 ease-out group-hover:w-full" />
        </div>
        <h1 className="text-center text-2xl font-bold tracking-tight text-slate-900 dark:text-stone-200">
          Connexion
        </h1>
        <p className="mt-1 text-center text-sm text-slate-500 dark:text-stone-50/70">
          Accède à ton espace
        </p>
        {flash?.error && (
          <div className="mt-5 flex items-center justify-center rounded-lg border border-red-500 bg-red-50 px-4 py-3 dark:bg-red-950/30">
            <p className="text-center text-sm text-red-500">{flash.error}</p>
          </div>
        )}

        <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            type="email"
            id="email"
            placeholder="toi@exemple.com"
            labelPlaceholder="Email"
            autoComplete="email"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            error={errors?.email}
          />

          <Input
            type="password"
            id="password"
            placeholder="••••••••"
            labelPlaceholder="Mot de passe"
            autoComplete="current-password"
            value={data.password}
            onChange={(e) => setData('password', e.target.value)}
            error={errors?.password}
          />

          {processing ? (
            <Button type="submit" disabled={true}>
              Connection en cours...
            </Button>
          ) : (
            <Button type="submit">Se connecter</Button>
          )}
        </form>
      </div>
    </section>
  )
}
