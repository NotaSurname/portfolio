import ShinyText from '~/ui/components/shiny_text'
import BlobImage from '~/ui/section/hero/blob_image'

export default function Hero() {
  return (
    <section className="relative flex min-h-100 w-full flex-col items-center justify-center overflow-hidden text-center my-30">
      <div className="relative flex w-full flex-col items-center gap-8 text-center sm:flex-row sm:justify-around sm:gap-8 sm:text-left md:max-w-300">
        <div className="order-2 flex min-h-24 flex-col text-4xl sm:order-1 sm:min-h-40 sm:text-6xl md:min-h-35 md:text-8xl">
          <ShinyText
            text={'Mathéo'.toUpperCase()}
            speed={2}
            delay={2}
            color="#6a7282"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
          <ShinyText
            text={'Développeur'.toUpperCase()}
            speed={2}
            delay={2}
            color="#6a7282"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
          <p className="text-orange-500">{'Full-stack'.toUpperCase()}</p>
        </div>

        <BlobImage src="/moi.jpg" alt="Photo de Mathéo" className="order-1 sm:order-2" />
      </div>
    </section>
  )
}
