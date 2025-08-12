import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"

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
  return (
    <div className={className}>
      <div className="relative">
        <Carousel className="relative">
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((img, i) => (
              <CarouselItem key={i} className="pl-2 md:pl-4">
                <figure className="overflow-hidden rounded-xl border bg-card shadow-sm">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
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
    </div>
  )
}
