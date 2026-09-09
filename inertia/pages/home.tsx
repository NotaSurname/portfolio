import NavBar from '~/ui/components/navbar'
import Hero from '~/ui/section/hero'

export default function Home() {
  return (
    <>
      <div className="bg-[#F6F5F2] dark:bg-slate-800">
        <NavBar />
        <Hero firstName="Mathéo Noguès" />
      </div>
    </>
  )
}
