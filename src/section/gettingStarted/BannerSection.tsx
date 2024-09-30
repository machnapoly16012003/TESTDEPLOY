import { memo, useCallback, useMemo, useRef, useState } from 'react'
import { FaPlay } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { IProduct, IProductVariant } from '~/@types/models'
import { ProductCardBanner } from '~/components/feature/productCardBanner'
import { SliderPagination } from '~/components/feature/sliderPagination'
import { Button } from '~/components/shared/button'
import { ArrowLeftIcon, ArrowRightIcon, ShareIcon } from '~/components/shared/icon'
import { IconButton } from '~/components/shared/iconButton'
import { Skeleton } from '~/components/shared/skeleton'
import useResponsive from '~/hooks/useResponsive'
import { formatDate, formatLocaleString } from '~/utils/format'
import { Model } from './Model'
import { ModelMD } from './ModelMD'
import { ModelXS } from './ModelXS'

type BannerSectionProps = {
  isLoading: boolean
  product: IProduct
  purchases: string[]
  trend: string[]
}

const BannerSection = memo(({ isLoading, purchases, trend, product }: BannerSectionProps) => {
  const { product: productInfo, variants } = product || {}

  const swiperRef = useRef<any>(null)
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  const smDown = useResponsive('down', 'sm', 'sm')

  const [activeSlide, setActiveSlide] = useState<number>(0)

  const productQuantity = useMemo(
    () => variants.reduce((total: number, variant: IProductVariant) => total + +variant.priceOptions.quantity, 0),
    [variants]
  )

  const listImages = useMemo(
    () => productInfo?.params.images.slice(1) || productInfo?.params?.images || [],
    [productInfo?.params?.images]
  )

  const handleGoToSlide = useCallback(
    (index: number) => {
      const activeIndex = index === 3 ? 0 : index === 4 ? 1 : index === 5 ? 2 : index
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideToLoop(activeIndex === 0 ? 3 : activeIndex)
      }
      setActiveSlide(activeIndex)
    },
    [swiperRef]
  )

  const handleSlideChange = useCallback(() => {
    if (swiperRef.current && swiperRef.current.swiper) setActiveSlide(swiperRef.current.swiper.realIndex)
  }, [swiperRef])

  return (
    <section className='2xs:h-[844px] 3xl:[900px] relative overflow-hidden border-b-[3px] border-solid border-[#FFFFFF52] bg-ln-gray xs:h-[800px] sm:h-[810px]'>
      <h1 className='text-white/-[.68] 2xs:top-[280px] 2xs:text-[120px] absolute left-1/2 w-full -translate-x-1/2 transform text-nowrap bg-ln-text-product-detail text-center font-bold uppercase text-white xs:top-[280px] xs:text-[120px]/[110px] sm:top-[260px] sm:text-[180px]/[252px] md:text-[210px] lg:text-[210px]/[252px] xl:text-[210px] 3xl:top-[300px] 3xl:text-[240px]'>
        Truly <br className='xs:block sm:block md:hidden' /> smart
      </h1>

      <div className='2xs:mt-[180px] relative xs:mt-[200px] sm:mt-24 md:mt-40 lg:mt-40 xl:mt-44 3xl:mt-[140px]'>
        <Swiper
          ref={swiperRef}
          loop
          slidesPerView={1}
          initialSlide={0}
          allowTouchMove={false}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current ? prevRef.current : undefined,
            nextEl: nextRef.current ? nextRef.current : undefined
          }}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide>
            <div className='mx-auto xs:hidden xs:!h-[500px] xs:!w-full sm:hidden md:hidden md:!h-[500px] md:!w-[800px] lg:hidden xl:block xl:!h-[500px] xl:!w-[800px] 3xl:block 3xl:!h-[600px] 3xl:!w-[1200px] 4xl:block'>
              <Canvas>
                <ambientLight />
                <OrbitControls />
                <Model />
                <Environment preset='sunset' />
              </Canvas>
            </div>
            <div className='mx-auto xs:hidden xs:!h-[500px] xs:!w-full sm:hidden md:block md:!h-[500px] md:!w-[800px] lg:block xl:hidden xl:!h-[500px] xl:!w-[800px] 3xl:hidden 3xl:!h-[600px] 3xl:!w-[1200px] 4xl:hidden'>
              <Canvas>
                <ambientLight />
                <OrbitControls />
                <ModelMD />
                <Environment preset='sunset' />
              </Canvas>
            </div>
            <div className='mx-auto xs:block xs:!h-[500px] xs:!w-full sm:block md:hidden md:!h-[500px] md:!w-[800px] lg:hidden xl:hidden xl:!h-[500px] xl:!w-[800px] 3xl:hidden 3xl:!h-[600px] 3xl:!w-[1200px] 4xl:hidden'>
              <Canvas>
                <ambientLight />
                <OrbitControls />
                <ModelXS />
                <Environment preset='sunset' />
              </Canvas>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='mx-auto xs:hidden xs:!h-[500px] xs:!w-full sm:hidden md:hidden md:!h-[500px] md:!w-[800px] lg:hidden xl:block xl:!h-[500px] xl:!w-[800px] 3xl:block 3xl:!h-[600px] 3xl:!w-[1200px] 4xl:block'>
              <Canvas>
                <ambientLight />
                <OrbitControls />
                <Model />
                <Environment preset='sunset' />
              </Canvas>
            </div>
            <div className='mx-auto xs:hidden xs:!h-[500px] xs:!w-full sm:hidden md:block md:!h-[500px] md:!w-[800px] lg:block xl:hidden xl:!h-[500px] xl:!w-[800px] 3xl:hidden 3xl:!h-[600px] 3xl:!w-[1200px] 4xl:hidden'>
              <Canvas>
                <ambientLight />
                <OrbitControls />
                <ModelMD />
                <Environment preset='sunset' />
              </Canvas>
            </div>
            <div className='mx-auto xs:block xs:!h-[500px] xs:!w-full md:hidden md:!h-[500px] md:!w-[800px] lg:hidden xl:hidden xl:!h-[500px] xl:!w-[800px] 3xl:hidden 3xl:!h-[600px] 3xl:!w-[1200px] 4xl:hidden'>
              <Canvas>
                <ambientLight />
                <OrbitControls />
                <ModelXS />
                <Environment preset='sunset' />
              </Canvas>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='2xs:left-1 2xs:top-[240px] 2xs:h-[44px] 2xs:w-fit 2xs:rounded-lg 2xs:px-3 absolute z-20 flex items-center justify-center gap-3 bg-white/[.44] shadow-s-22 backdrop-blur-2xl transition-all duration-200 ease-in-out xs:left-0 xs:top-[15%] xs:h-[76px] xs:w-fit xs:flex-col xs:rounded-xl xs:rounded-bl-none xs:rounded-tl-none xs:px-4 sm:left-0 sm:top-[154px] sm:h-[88px] sm:scale-[80%] sm:flex-row sm:rounded-3xl sm:p-5 md:left-5 md:top-40 md:rounded-3xl lg:left-16 lg:top-40 lg:rounded-2xl xl:left-[190px] xl:top-[154px] xl:min-w-[388px] xl:gap-5 xl:rounded-3xl 3xl:h-[100px] 3xl:min-w-[400px] 3xl:scale-105'>
        <div className='2xs:-space-x-[10px] flex xs:-space-x-[10px] sm:-space-x-[18px]'>
          {[
            'https://images.unsplash.com/photo-1712068944618-21bbd010c8ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
            'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
            'https://images.unsplash.com/flagged/photo-1572129063552-570d721b9d5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
            'https://images.unsplash.com/photo-1725198639399-fb5fa2386267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
            'https://images.unsplash.com/flagged/photo-1572129063552-570d721b9d5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D'
          ].map((src, index: number) => (
            <img
              key={index}
              src={src}
              alt='Image Description'
              className='shadow-avatar 2xs:size-7 object-cente inline-block shrink-0 rounded-full border-[2px] border-solid border-white object-cover xs:size-7 sm:size-12 3xl:size-14'
            />
          ))}
        </div>
        {isLoading ? (
          <Skeleton className='2xs:!w-[118px] !h-[18.9px] rounded-sm xs:!w-[118px] sm:!w-[118px] md:!w-[118px] lg:!w-[118px] xl:!w-[140px]' />
        ) : (
          <p className='2xs:text-[12px] text-nowrap font-bold capitalize leading-[18.9px] xs:text-[14px] sm:text-[18px]'>
            +{formatLocaleString(trend?.length)} Purchasing
          </p>
        )}
      </div>

      <div className='2xs:right-4 2xs:top-[10%] absolute z-50 mb-10 xs:right-4 xs:top-[14%] sm:right-5 sm:top-16 md:right-5 md:top-20 lg:right-5 lg:top-24 xl:right-[110px] xl:top-[135px]'>
        {isLoading ? (
          <Skeleton className='!h-[76px]' />
        ) : (
          <p className='2xs:text-[48px] font-semibold xs:text-[42px]/[63px] sm:text-[56px] md:text-[60px] lg:text-[63px] xl:text-[63px]'>
            {formatLocaleString(purchases?.length)}+
          </p>
        )}
        <p className='2xs:text-[13.67px] font-customMedium capitalize leading-[21px] text-blackDark/[.68] xs:text-[13.67px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22.61px]'>
          Weekly search trends
        </p>
      </div>

      <div className='2xs:bottom-20 2xs:left-[5%] 2xs:gap-3 absolute z-50 flex flex-col xs:bottom-24 xs:left-[4.5%] xs:gap-3 sm:bottom-20 sm:left-4 sm:gap-6 md:bottom-8 md:left-8 md:gap-6 lg:bottom-10 lg:left-10 lg:gap-5 xl:bottom-[37px] xl:left-[116px] xl:gap-6'>
        <div className='flex items-center gap-2'>
          <Button className='2xs:h-[48px] 2xs:w-[150px] rounded-[27px] xs:h-[48px] xs:w-[150px] sm:h-[54px] sm:w-[184px]'>
            Discover
          </Button>
          <button
            className={`2xs:size-[48px] flex shrink-0 items-center justify-center rounded-full bg-blackMain p-[2px] transition-colors duration-300 ease-in-out xs:size-[48px] sm:size-[54px]`}
          >
            <div className='flex size-full shrink-0 items-center justify-center rounded-full bg-[#f5f5f6]'>
              <ShareIcon
                color='black'
                className='2xs:size-5 transition-colors duration-150 ease-in-out xs:size-5 sm:size-6'
              />
            </div>
          </button>
        </div>

        <div className='flex items-center gap-3'>
          <p className='2xs:text-[10.24px] font-customRegular text-[#606060]/[.64] xs:text-[12px] sm:text-[16px]/[16.8px]'>
            Remain:{' '}
            <span className='font-medium text-blackDark'>
              {formatDate(+product.product.params.expiryTime, 'h:mm:ss')}
            </span>
          </p>
          <svg width='6' height='6' viewBox='0 0 6 6' fill='none'>
            <circle opacity='0.44' cx='3' cy='3' r='3' fill='#0D0D0D' />
          </svg>
          <p className='2xs:text-[10.24px] font-customRegular text-[#606060]/[.64] xs:text-[12px] sm:text-[16px]/[16.8px]'>
            Left: <span className='font-medium text-blackDark'>{productQuantity} items</span>
          </p>
        </div>
      </div>

      <div className='2xs:bottom-6 2xs:right-[4%] absolute flex items-center gap-4 xs:bottom-10 xs:right-[4%] sm:bottom-10 sm:right-5 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 xl:bottom-[35px] xl:right-[118px]'>
        <p className='2xs:text-[16px] font-medium text-blackDark/[.44] xs:text-[16px] sm:text-[18px]/[18.9px]'>
          Discover our product
        </p>
        <Link to={product.product.params.videoUrl} className='cursor-pointer'>
          <IconButton size={smDown ? '28' : '32'} color='white' shadow>
            <FaPlay className='2xs:size-[8.5px] xs:size-[8.5px] sm:size-[10px]' />
          </IconButton>
        </Link>
      </div>

      <div className='2xs:bottom-[250px] 2xs:right-4 absolute z-50 xs:bottom-[200px] xs:right-0 sm:-right-5 sm:bottom-64 sm:scale-[80%] md:bottom-48 md:right-10 md:scale-100 lg:bottom-48 lg:right-20 xl:bottom-[118px] xl:right-[177px]'>
        <ProductCardBanner productParam={product.product} />
      </div>

      {product && listImages?.length > 1 && (
        <div className='2xs:bottom-7 2xs:left-[15%] 2xs:gap-2 absolute z-10 flex -translate-x-1/2 transform items-center justify-center xs:bottom-10 xs:left-[15%] xs:gap-2 sm:bottom-3 sm:left-1/2 sm:gap-3 md:bottom-4 lg:bottom-4 xl:bottom-6'>
          <button ref={prevRef} onClick={() => swiperRef.current?.swiper.slidePrev()}>
            <ArrowLeftIcon className='2xs:size-6 xs:size-6 sm:size-8' />
          </button>
          <SliderPagination
            gap='gap-3'
            className='2xs:!size-[8px] xs:!size-[8px] sm:!size-[10px]'
            activeIndex={activeSlide}
            slideToGo={handleGoToSlide}
            slideCount={2}
          />
          <button ref={nextRef} onClick={() => swiperRef.current?.swiper.slideNext()}>
            <ArrowRightIcon className='2xs:size-6 xs:size-6 sm:size-8' />
          </button>
        </div>
      )}
    </section>
  )
})

export default BannerSection
