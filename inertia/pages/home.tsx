import Hero from '~/ui/components/section/hero/hero'
import LightRays from '~/ui/components/light_rays'
import About from '~/ui/components/section/about/about'
import NavBar from '~/ui/components/navbar'
import Projects from '~/ui/components/section/projects/projects'
import Experience from '~/ui/components/section/experience/experience'
import Contact from '~/ui/components/section/contact/contact'
import Footer from '~/ui/components/section/footer/footer'

export default function Home() {
  return (
    <>
      <div className="relative isolate min-h-screen bg-neutral-950" id="home">
        <div className="relative">
          <NavBar />
          <div className="pointer-events-none absolute inset-0 -z-10 hidden w-full lg:block">
            {/*Desktop UI*/}
            <LightRays
              raysOrigin="top-center"
              raysColor="#ffffff"
              raysSpeed={1}
              lightSpread={0.5}
              rayLength={4}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0}
              distortion={0}
              className="custom-rays"
              pulsating={false}
              fadeDistance={1}
              saturation={1}
              lightMode={false}
            />
          </div>

          <div className="pointer-events-none absolute inset-0 -z-10 block w-full lg:hidden">
            {/*Mobile UI*/}
            <LightRays
              raysOrigin="top-center"
              raysColor="#ffffff"
              raysSpeed={1}
              lightSpread={0.1}
              rayLength={4}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0}
              distortion={0}
              className="custom-rays"
              pulsating={false}
              fadeDistance={1}
              saturation={1}
              lightMode={false}
            />
          </div>

          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}
