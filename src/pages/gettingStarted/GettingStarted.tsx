import { memo, useEffect } from 'react'
import { useAppSelector } from '~/redux/configStore'
import { BannerSection, SlideProducts } from '~/section/gettingStarted'

const GettingStarted = memo(() => {
  const { isLoading, listProducts } = useAppSelector((s) => s.product)

  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <section className='relative h-auto bg-[#fafdff]'>
      <BannerSection
        isLoading={isLoading}
        product={listProducts[0]}
        purchases={Array.from({ length: 23678 }).map((_, i) => `${i}`) || []}
        trend={Array.from({ length: 1040 }).map((_, i) => `${i}`) || []}
      />
      <SlideProducts />
    </section>
  )
})

export default GettingStarted
