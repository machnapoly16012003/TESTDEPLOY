import { memo, useCallback, useEffect, useRef } from 'react'
import { useAppSelector } from '~/redux/configStore'
import { BannerSection, SlideProducts } from '~/section/gettingStarted'
import { smoothScrollToElement } from '~/utils/scroll'

const GettingStarted = memo(() => {
  const { isLoading, listProducts } = useAppSelector((s) => s.product)

  const slideProductRef = useRef<HTMLDivElement>(null)

  useEffect(() => window.scrollTo(0, 0), [])

  const scrollToSection = useCallback(() => {
    const duration = 1000
    if (slideProductRef.current) {
      smoothScrollToElement(slideProductRef.current, duration)
    }
  }, [slideProductRef])

  return (
    <section className='relative h-auto bg-[#fafdff]'>
      <BannerSection
        isLoading={isLoading}
        product={listProducts[0]}
        purchases={Array.from({ length: 23678 }).map((_, i) => `${i}`) || []}
        trend={Array.from({ length: 1040 }).map((_, i) => `${i}`) || []}
        scrollToSection={scrollToSection}
      />
      <div ref={slideProductRef}>
        <SlideProducts />
      </div>
    </section>
  )
})

export default GettingStarted
