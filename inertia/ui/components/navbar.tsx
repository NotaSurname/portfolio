import DesktopNavbar from './desktop_navbar'
import MobileNavbar from './mobile_navbar'

export default function NavBar() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopNavbar />
      </div>
      <div className="block md:hidden pt-3 px-3">
        <MobileNavbar />
      </div>
    </>
  )
}
