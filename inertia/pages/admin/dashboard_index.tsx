import Sidebar from '~/ui/components/section/admin/sidebar'

export default function DashboardIndex() {
  return (
    <>
      <div className="min-h-screen bg-neutral-950">
        <Sidebar />
        <p className="text-stone-200">Page Dashboard</p>
      </div>
    </>
  )
}
