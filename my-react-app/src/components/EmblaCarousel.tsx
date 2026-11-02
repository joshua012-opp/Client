import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.plugins().autoplay?.play()
  }, [emblaApi])

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide bg-amber-400 rounded-xl w-70 h-70 flex justify-center items-center">crousel 1</div>
          <div className="embla__slide bg-amber-600 rounded-xl w-70 h-70 flex justify-center items-center">crousel 2</div>
          <div className="embla__slide bg-amber-800 rounded-xl w-70 h-70 flex justify-center items-center">crousel 3</div>
        </div>
      </div>

      <button className="embla__prev" onClick={goToPrev}>
        Scroll to prev
      </button>
      <button className="embla__next" onClick={goToNext}>
        Scroll to next
      </button>
    </div>
  )
}

export default EmblaCarousel;