import { useState } from 'react'
import { router } from '@inertiajs/react'
import { Pencil, Trash2 } from 'lucide-react'
import type { UserData } from '~/types/user'
import Button from '~/ui/components/button'
import DeleteModal from '~/ui/components/delete_modal'

type Props = {
  users: UserData[]
  currentUserUuid: string
  onEdit: (user: UserData) => void
}

const formatDate = (iso: string | null, withTime = false) =>
  iso
    ? new Date(iso).toLocaleString('fr-FR', {
        dateStyle: 'short',
        ...(withTime && { timeStyle: 'short' }),
      })
    : '—'

export default function UserCard({ users, currentUserUuid, onEdit }: Props) {
  const [userToDelete, setUserToDelete] = useState<UserData | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const closeDeleteModal = () => setUserToDelete(null)

  const confirmDelete = () => {
    if (!userToDelete) return

    router.delete(`/admin/dashboard/user/${userToDelete.uuid}/delete`, {
      preserveScroll: true,
      onStart: () => setIsDeleting(true),
      onFinish: () => setIsDeleting(false),
      onSuccess: closeDeleteModal,
    })
  }

  if (users.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-white/10 p-6 text-center text-stone-200/60">
        Aucun utilisateur pour le moment.
      </p>
    )
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        {users.map((user) => {
          const isCurrentUser = user.uuid === currentUserUuid

          return (
            <div
              key={user.uuid}
              className="flex flex-col gap-3 rounded-lg border border-white/10 p-4 sm:p-5"
            >
              <div className="flex flex-wrap items-center gap-2">
                <p className="wrap-break-word break-all text-sm font-medium text-stone-200 sm:text-base">
                  {user.email}
                </p>
                {user.isAdmin && (
                  <span className="rounded-lg border border-blue-500/40 px-2 py-0.5 text-xs text-blue-400">
                    Admin
                  </span>
                )}
                {isCurrentUser && (
                  <span className="rounded-lg border border-white/20 px-2 py-0.5 text-xs text-stone-400">
                    Vous
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-1">
                  <p className="font-mono text-xs text-stone-400">
                    <span className="text-blue-500">Créé le</span>{' '}
                    {formatDate(user.createdAt, true)}
                  </p>
                  <p className="font-mono text-xs text-stone-400">
                    <span className="text-blue-500">Modifié le</span>{' '}
                    {formatDate(user.updatedAt, true)}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="delete"
                    size="sm"
                    fullWidth={false}
                    disabled={isCurrentUser}
                    onClick={() => setUserToDelete(user)}
                  >
                    <Trash2 />
                    Supprimer
                  </Button>
                  <Button variant="edit" size="sm" fullWidth={false} onClick={() => onEdit(user)}>
                    <Pencil />
                    Modifier
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <DeleteModal
        isOpen={userToDelete !== null}
        type="user"
        isLoading={isDeleting}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
        ObjectTitle={userToDelete?.email ?? ''}
      />
    </>
  )
}
