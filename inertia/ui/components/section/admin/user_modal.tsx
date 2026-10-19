import { useForm } from '@inertiajs/react'
import { LoaderCircle, Pencil, UserPlus } from 'lucide-react'
import type { FormEvent } from 'react'
import type { UserData } from '~/types/user'
import Button from '~/ui/components/button'
import Checkbox from '~/ui/components/checkbox'
import Input from '~/ui/components/input'
import Modal from '~/ui/components/modal'

type Props = {
  isOpen: boolean
  onClose: () => void
  mode: 'create' | 'edit'
  user?: UserData | null
  lockAdmin?: boolean
}
export default function UserModal({ isOpen, onClose, mode, user, lockAdmin = false }: Props) {
  const form = useForm({
    email: user?.email ?? '',
    isAdmin: user?.isAdmin ?? true,
    password: '',
    confirmPassword: '',
  })
  const isCreate = mode === 'create'

  const handleClose = () => {
    if (form.processing) return
    form.reset()
    form.clearErrors()
    onClose()
  }

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault()
    form.transform((data) =>
      isCreate || data.password || data.confirmPassword
        ? data
        : { email: data.email, isAdmin: data.isAdmin }
    )

    form.post(
      isCreate ? `/admin/dashboard/user/create` : `/admin/dashboard/user/${user?.uuid}/edit`,
      {
        preserveScroll: true,
        onSuccess: handleClose,
      }
    )
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      modalTitle={isCreate ? 'Ajouter un utilisateur' : "Modifier l'utilisateur"}
      icon={
        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-stone-200">
          {isCreate ? <UserPlus size={20} /> : <Pencil size={20} />}
        </span>
      }
      footer={
        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <Button
            variant="secondary"
            fullWidth={false}
            onClick={handleClose}
            disabled={form.processing}
          >
            Annuler
          </Button>
          <Button fullWidth={false} onClick={() => handleSubmit()} disabled={form.processing}>
            {form.processing && <LoaderCircle className="animate-spin" />}
            Enregistrer
          </Button>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          id="user-email"
          type="email"
          labelPlaceholder="Email"
          autoComplete="off"
          value={form.data.email}
          onChange={(e) => form.setData('email', e.target.value)}
          error={form.errors.email}
          required
        />

        <Checkbox
          id="user-is-admin"
          label="Administrateur"
          description={
            lockAdmin
              ? 'Tu ne peux pas retirer tes propres droits.'
              : "Donne accès à l'espace d'administration."
          }
          checked={form.data.isAdmin}
          onChange={(checked) => form.setData('isAdmin', checked)}
          disabled={lockAdmin}
          error={form.errors.isAdmin}
        />

        <Input
          id="password"
          type="password"
          labelPlaceholder={isCreate ? 'Mot de passe' : 'Nouveau mot de passe'}
          autoComplete="new-password"
          value={form.data.password}
          onChange={(e) => form.setData('password', e.target.value)}
          error={form.errors.password}
          required={isCreate}
        />
        <Input
          id="password-confirm"
          type="password"
          labelPlaceholder={
            isCreate ? 'Confirmer le mot de passe' : 'Confirmer le nouveau mot de passe'
          }
          autoComplete="new-password"
          value={form.data.confirmPassword}
          onChange={(e) => form.setData('confirmPassword', e.target.value)}
          error={form.errors.confirmPassword}
          required={isCreate}
        />

        <button type="submit" hidden />
      </form>
    </Modal>
  )
}
