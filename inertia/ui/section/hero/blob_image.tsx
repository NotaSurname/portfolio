type BlobImageProps = {
  src: string
  alt: string
  className?: string
}

export default function BlobImage({ src, alt, className = '' }: BlobImageProps) {
  return (
    <div
      className={`animate-blob relative aspect-square w-28 shrink-0 overflow-hidden shadow-lg sm:w-36 md:w-44 lg:w-52 ${className}`}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  )
}
