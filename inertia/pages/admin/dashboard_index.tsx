import SidebarWrapper from '~/ui/components/section/admin/sidebar_wrapper'

export default function DashboardIndex() {
  return (
    <>
      <div className="min-h-screen bg-neutral-950">
        <SidebarWrapper>
          <h1 className="text-3xl text-white">Dashboard</h1>
        </SidebarWrapper>
      </div>
    </>
  )
}
