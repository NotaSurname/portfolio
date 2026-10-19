import { Plus } from 'lucide-react'
import { useState } from 'react'
import type { UserData } from '~/types/user'
import SidebarWrapper from '~/ui/components/section/admin/sidebar_wrapper'
import UserCard from '~/ui/components/section/admin/user_card'
import UserModal from '~/ui/components/section/admin/user_modal'

type Props = {
  users: UserData[]
  currentUserUuid: string
}

export default function DashboardUser({ users, currentUserUuid }: Props) {
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [userToEdit, setUserToEdit] = useState<UserData | null>(null)

  return (
    <div className="min-h-screen bg-neutral-950">
      <SidebarWrapper>
        <div className="flex w-full max-w-2xl items-center gap-3 sm:gap-5">
          <h1 className="text-2xl text-white sm:text-3xl">Utilisateur</h1>
          <div className="h-0.5 min-w-4 flex-1 bg-white/70" />
          <button
            type="button"
            onClick={() => setIsCreateOpen(true)}
            className="flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-white/70 px-3 py-1.5 text-sm text-white transition-colors hover:bg-white/10 sm:text-base [&>svg]:size-4 sm:[&>svg]:size-5"
          >
            <Plus />
            Ajouter un utilisateur
          </button>
        </div>

        <div className="mt-6 w-full max-w-2xl">
          <UserCard users={users} currentUserUuid={currentUserUuid} onEdit={setUserToEdit} />
        </div>
      </SidebarWrapper>

      <UserModal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} mode="create" />

      {userToEdit && (
        <UserModal
          key={userToEdit.uuid}
          isOpen
          onClose={() => setUserToEdit(null)}
          mode="edit"
          user={userToEdit}
          lockAdmin={userToEdit.uuid === currentUserUuid}
        />
      )}
    </div>
  )
}
