import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"

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

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <figure key={i} className={`group overflow-hidden rounded-2xl border bg-card shadow-sm hover:shadow-md transition-all hover-scale ${i === 1 ? 'sm:translate-y-4' : ''}`}>
              <AspectRatio ratio={4 / 3}>
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
          ))}
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
