import { memo, useCallback, useRef, useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductCard } from '~/components/feature/productCard'
import { SliderPaginationNumber } from '~/components/feature/sliderPagination'
import { ChevronLeft, ChevronRight } from '~/components/shared/icon'
import { useAppSelector } from '~/redux/configStore'

const SlideProducts = memo(() => {
  const swiperRef = useRef<any>(null)
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  const { listProducts } = useAppSelector((s) => s.product)

  const [isHover, setIsHover] = useState<boolean>(false)
  const [activeSlide, setActiveSlide] = useState<number>(0)

  const handleGoToSlide = useCallback(
    (index: number) => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideToLoop(index)
        setActiveSlide(index)
      }
    },
    [swiperRef]
  )

  const handleSlideChange = useCallback(() => {
    if (swiperRef.current && swiperRef.current.swiper) setActiveSlide(swiperRef.current.swiper.realIndex)
  }, [swiperRef])

  return (
    <section className='slide-products w-full overflow-hidden xs:mb-16 xs:mt-20 md:mb-36 md:mt-32 lg:mb-40'>
      <div className='mb-10 flex w-full justify-between xs:flex-col xs:items-start xs:gap-5 xs:px-5 md:flex-col md:items-center md:gap-10 md:px-10 xl:flex-row xl:px-20 3xl:px-[100px]'>
        <h2 className='rp-title-section'>Finding Camera</h2>
        <SliderPaginationNumber
          activeIndex={activeSlide}
          slideToGo={handleGoToSlide}
          slideCount={listProducts.length}
        />
      </div>

      <div className='xs:w-[900px] xs:px-5 md:w-auto md:translate-x-6 md:px-0 xl:translate-x-5 xl:px-12 3xl:translate-x-5'>
        <Swiper
          ref={swiperRef}
          loop
          initialSlide={0}
          slidesPerView={3}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          onSlideChange={handleSlideChange}
          modules={[Autoplay, Pagination, Navigation]}
          navigation={{
            prevEl: prevRef.current ? prevRef.current : undefined,
            nextEl: nextRef.current ? nextRef.current : undefined
          }}
          onInit={(swiper) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.prevEl = prevRef.current
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.nextEl = nextRef.current
            swiper.navigation.update()
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
              slidesPerView: 4
            }
          }}
        >
          {listProducts.map((product, index) => {
            return (
              <SwiperSlide key={`${product.product.id}-${index}`} className='xs:h-[400px] md:h-[600px]'>
                <ProductCard product={product} isActive={activeSlide === index && !isHover} setIsHover={setIsHover} />
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
