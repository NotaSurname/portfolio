import { useForm, usePage } from '@inertiajs/react'
import type { FormEvent } from 'react'
import Input from '~/ui/components/input'
import Textarea from '~/ui/components/textarea'
import Button from '~/ui/components/button'

type FlashProps = { flash?: { error?: string } }

type Props = {
  action?: string
  className?: string
}

const fields = [
  {
    name: 'name',
    label: 'Nom',
    type: 'text',
    placeholder: 'Jean Dupont',
    autoComplete: 'name',
    required: true,
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'email@example.com',
    autoComplete: 'email',
    required: true,
  },
  {
    name: 'object',
    label: 'Objet',
    type: 'text',
    placeholder: 'Sujet du mail, nom du projet...',
    autoComplete: 'off',
    required: false,
  },
] as const

export default function ContactForm({ action = '/contact', className = '' }: Props) {
  const { flash } = usePage<{ flash?: { error?: string } }>().props
  const error = flash?.error

  const { data, setData, post, processing, errors, clearErrors, recentlySuccessful, reset } =
    useForm({ name: '', email: '', object: '', message: '' })

  function submit(e: FormEvent) {
    e.preventDefault()
    post(action, {
      preserveScroll: true,
      onSuccess: (page) => {
        if (!(page.props as FlashProps).flash?.error) reset()
      },
    })
  }

  const statusMessage = error ?? (recentlySuccessful ? 'Message envoyé, merci !' : null)

  return (
    <form
      onSubmit={submit}
      noValidate
      className={`flex flex-col gap-5 rounded-lg border border-white/10 bg-white/5 p-5 sm:p-8 ${className}`}
    >
      {fields.map(({ name, label, type, autoComplete, placeholder, required }) => (
        <Input
          key={name}
          id={name}
          type={type}
          autoComplete={autoComplete}
          labelPlaceholder={label}
          placeholder={placeholder}
          value={data[name]}
          onChange={(e) => {
            setData(name, e.target.value)
            clearErrors(name)
          }}
          error={errors[name]}
          required={required}
        />
      ))}

      <Textarea
        id="message"
        rows={5}
        labelPlaceholder="Message"
        placeholder="Expliquez-moi un peu plus votre projet"
        value={data.message}
        onChange={(e) => {
          setData('message', e.target.value)
          clearErrors('message')
        }}
        error={errors.message}
        required
      />

      <Button type="submit" disabled={processing}>
        {processing ? 'Envoi…' : 'Envoyer'}
      </Button>

      <p
        role="status"
        aria-live="polite"
        className={`text-center text-sm empty:hidden ${error ? 'text-red-500' : 'text-green-400'}`}
      >
        {statusMessage}
      </p>
    </form>
  )
}
