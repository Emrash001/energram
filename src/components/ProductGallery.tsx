import * as React from "react"
import type { UseEmblaCarouselType } from "embla-carousel-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, ZoomIn, ZoomOut } from "lucide-react"

import img1 from "@/assets/energram_pro1.jpg"
import img2 from "@/assets/energram_pro2.jpg"
import img3 from "@/assets/energram_pro3.jpg"

interface ProductGalleryProps {
  className?: string
}

const images = [
  { src: img1, alt: "Energram Pro product photo front angle – solar + intelligence device" },
  { src: img2, alt: "Energram Pro product photo side profile – compact solar energy system" },
  { src: img3, alt: "Energram Pro product photo rear ports – smart power and connectivity" },
]

export default function ProductGallery({ className }: ProductGalleryProps) {
  type CarouselApi = UseEmblaCarouselType[1]
  const [embla, setEmbla] = React.useState<CarouselApi | null>(null)
  const [selected, setSelected] = React.useState(0)
  const [lightboxOpen, setLightboxOpen] = React.useState(false)
  const [zoomed, setZoomed] = React.useState(false)

  React.useEffect(() => {
    if (!embla) return
    const onSelect = () => setSelected(embla.selectedScrollSnap())
    embla.on("select", onSelect)
    onSelect()
    return () => {
      embla.off("select", onSelect)
    }
  }, [embla])

  const openLightbox = (index: number) => {
    setSelected(index)
    embla?.scrollTo(index)
    setZoomed(false)
    setLightboxOpen(true)
  }

  const prev = () => {
    embla?.scrollPrev()
    setZoomed(false)
  }
  const next = () => {
    embla?.scrollNext()
    setZoomed(false)
  }

  return (
    <div className={className}>
      <div className="relative">
        <Carousel className="relative" setApi={setEmbla}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((img, i) => (
              <CarouselItem key={i} className="pl-2 md:pl-4">
                <figure className="overflow-hidden rounded-xl border bg-card shadow-sm">
                  <AspectRatio ratio={4 / 3}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain bg-muted"
                      onClick={() => openLightbox(i)}
                    />
                  </AspectRatio>
                  <figcaption className="sr-only">{img.alt}</figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur border border-border hover:bg-background"
            aria-label="Previous product photo"
          />
          <CarouselNext
            className="right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur border border-border hover:bg-background"
            aria-label="Next product photo"
          />
        </Carousel>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-2">
        {images.map((img, i) => (
          <button
            key={`thumb-${i}`}
            onClick={() => embla?.scrollTo(i)}
            aria-label={`View photo ${i + 1}`}
            className={`relative overflow-hidden rounded-lg border bg-card ${
              selected === i ? "ring-2 ring-primary" : ""
            }`}
          >
            <AspectRatio ratio={4 / 3}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </AspectRatio>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-6xl w-[95vw] bg-background/95 p-2 sm:p-4">
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden bg-card">
              <AspectRatio ratio={4 / 3}>
                <img
                  src={images[selected].src}
                  alt={images[selected].alt}
                  className={`h-full w-full object-contain transition-transform duration-300 ${
                    zoomed ? "scale-125 cursor-zoom-out" : "scale-100 cursor-zoom-in"
                  }`}
                  onClick={() => setZoomed((z) => !z)}
                />
              </AspectRatio>
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="pointer-events-auto rounded-full bg-background/80 backdrop-blur border-border"
                aria-label="Previous photo"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="pointer-events-auto rounded-full bg-background/80 backdrop-blur border-border"
                aria-label="Next photo"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-3 flex items-center justify-center gap-2">
              <Button variant="secondary" size="sm" onClick={() => setZoomed((z) => !z)} aria-label={zoomed ? "Zoom out" : "Zoom in"}>
                {zoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
                <span className="ml-2 hidden sm:inline">{zoomed ? "Zoom out" : "Zoom in"}</span>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
