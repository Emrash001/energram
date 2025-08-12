import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import img1 from "@/assets/energram_pro1.jpg"
import img2 from "@/assets/energram_pro2.jpg"
import img3 from "@/assets/energram_pro3.jpg"

const images = [
  { src: img1, alt: "Energram Pro front – smart solar power station" },
  { src: img2, alt: "Energram Pro side – compact, robust build" },
  { src: img3, alt: "Energram Pro rear – ports and connectivity" },
]

export default function GallerySpotlight() {
  return (
    <section aria-labelledby="gallery-spotlight" className="relative py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="gallery-spotlight" className="text-3xl font-display font-bold">
            Energram Photo Gallery
          </h2>
          <p className="mt-2 text-foreground/80">
            See the device up close — beautiful, compact, and built for everyday life.
          </p>
        </div>

        <div className="mt-8 relative">
          <Carousel opts={{ align: "center", loop: true }} className="w-full max-w-6xl mx-auto">
            <CarouselContent className="mask-fade-out">
              {images.map((img, i) => (
                <CarouselItem key={i} className="basis-[85%] sm:basis-1/2 lg:basis-2/5 xl:basis-1/3 pl-4">
                  <figure className="group relative overflow-hidden rounded-3xl border bg-card/80 backdrop-blur-md shadow-lg ring-1 ring-border hover:ring-primary/40 transition-transform duration-300 hover:scale-[1.02]">
                    <AspectRatio ratio={4 / 3}>
                      <div className="flex h-full w-full items-center justify-center bg-muted">
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-contain device-glow"
                        />
                      </div>
                    </AspectRatio>
                    <figcaption className="sr-only">{img.alt}</figcaption>
                    <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/0 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        <div className="mt-8 flex justify-center">
          <Link to="/learn-more#photos" aria-label="Open full Energram photo gallery">
            <Button size="lg" className="bg-gradient-to-r from-solar-500 to-tech-500 text-white hover:from-solar-700 hover:to-tech-700">
              View full gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
