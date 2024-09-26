import { memo, useRef } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductCard } from '~/components/feature/productCard'
import { useAppSelector } from '~/redux/configStore'
import './styles.scss'
import { ChevronLeft, ChevronRight } from '~/components/shared/icon'

const SlideProducts = memo(() => {
  const swiperRef = useRef<any>(null)
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  const { listProducts } = useAppSelector((s) => s.product)

  return (
    <section className='slide-products w-full overflow-hidden bg-white xs:mb-16 xs:mt-20 md:mb-36 md:mt-32 lg:mb-40'>
      <div className='mb-10 flex w-full justify-between xs:flex-col xs:items-start xs:px-5 sm:flex-row md:items-center md:px-10 xl:px-20 3xl:px-[100px]'>
        <h2 className='rp-title-section'>Finding Camera</h2>
        <div>pagination</div>
      </div>

      <div className='xs:w-[900px] xs:px-5 md:w-auto md:translate-x-6 md:px-0 xl:translate-x-5 xl:px-12 3xl:translate-x-0'>
        <Swiper
          ref={swiperRef}
          loop
          initialSlide={1}
          slidesPerView={3}
          // spaceBetween={80}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current ? prevRef.current : undefined,
            nextEl: nextRef.current ? nextRef.current : undefined
          }}
          breakpoints={{
            640: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            },
            1600: {
              slidesPerView: 4
            },
            1900: {
              slidesPerView: 5
            }
          }}
        >
          {listProducts.map((product, index) => {
            return (
              <SwiperSlide key={`${product.product.id}-${index}`} className='xs:h-[400px] md:h-[600px]'>
                <ProductCard product={product} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      <div className='flex items-center justify-end gap-2 xs:mt-5 xs:px-4 md:mt-10 md:px-10 xl:px-20'>
        <button ref={prevRef} onClick={() => swiperRef.current?.swiper.slidePrev()}>
          <ChevronLeft className='size-8' />
        </button>
        <button ref={nextRef} onClick={() => swiperRef.current?.swiper.slideNext()}>
          <ChevronRight className='size-8' />
        </button>
      </div>
    </section>
  )
})

export default SlideProducts
