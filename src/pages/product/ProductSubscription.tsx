import classNames from 'classnames'
import { memo, useCallback, useMemo, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { RiInformation2Fill } from 'react-icons/ri'
import { createSearchParams, Link, useNavigate, useParams } from 'react-router-dom'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { listSubscriptions } from '~/assets/mock/subscription'
import { BoxSubscription } from '~/components/feature/boxSubscription'
import { SliderPagination } from '~/components/feature/sliderPagination'
import { ArrowLeftIcon } from '~/components/shared/icon'
import { PATH_PUBLIC_APP } from '~/constants/paths'
import { useAppSelector } from '~/redux/configStore'
import { checkNumbersInString10, formatLocaleString } from '~/utils/format'
import './styles.scss'

const ProductSubscription = memo(() => {
  const swiperRef = useRef<any>(null)

  const navigate = useNavigate()

  const { id: productId } = useParams()

  const { listProducts } = useAppSelector((s) => s.product)

  const productDetail = useMemo(() => listProducts.find((p) => p.product.id === productId), [productId, listProducts])

  const { product: productInfor, variants } = productDetail || {}

  const [subSelected, setSubSelected] = useState<number>(0)
  const [activeSlide, setActiveSlide] = useState<number>(0)

  const subscriptionSelected = useMemo(
    () => listSubscriptions.find((s) => s.id === subSelected),
    [subSelected, listSubscriptions]
  )

  const handleSelectSubscription = useCallback((id: number) => {
    setSubSelected(id)
  }, [])

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

  const handleCheckout = useCallback(() => {
    if (subSelected === 0)
      return toast('Please select subscription!', {
        icon: <RiInformation2Fill color='#5495FC' />
      })
    navigate({
      pathname: `${PATH_PUBLIC_APP.checkout.root}/${productInfor?.id}`,
      search: createSearchParams({
        subscription: subSelected.toString()
      }).toString()
    })
  }, [subSelected])

  return (
    <section className='product-subscription flex min-h-[100vh] bg-[#fafdff] xs:flex-col md:flex-col xl:flex-row'>
      <div className='x h-full pb-[60px] xs:w-full xs:px-6 xs:pb-10 xs:pt-20 md:min-h-[700px] md:w-full md:px-24 md:pt-[100px] xl:!block xl:min-h-[100vh] xl:w-[62.5%] xl:!pt-[120px] xl:pl-[100px] xl:pr-[184px] 3xl:!flex 3xl:!flex-col 3xl:!justify-center 3xl:!px-[200px] 3xl:!pt-[0px]'>
        <button className='flex items-center xs:mb-8 xs:gap-3 md:mb-12 md:gap-4' onClick={() => window.history.back()}>
          <ArrowLeftIcon className='opacity-[.44] xs:size-6 md:size-8' />
          <p className='text-black/[.72] xs:text-[18px]/[18px] md:text-[18px]/[18px] xl:text-[16px]/[16px]'>Back</p>
        </button>

        <h3 className='text-[36px]/[36px] font-semibold text-black xs:hidden md:flex'>Choose Subscription</h3>

        <div className='my-8 items-center gap-5 xs:hidden md:flex'>
          {listSubscriptions.map((subscription) => (
            <BoxSubscription
              key={subscription.id}
              subscription={subscription}
              isSelected={subSelected === subscription.id}
              handleSelect={handleSelectSubscription}
            />
          ))}
        </div>

        <div className='relative mb-7 flex justify-center'>
          <div className='z-10 ml-3 h-[300px] w-[640px] xs:flex md:hidden'>
            <Swiper
              ref={swiperRef}
              loop
              initialSlide={1}
              slidesPerView={3}
              spaceBetween={20}
              onSlideChange={handleSlideChange}
              modules={[Pagination]}
            >
              {[...listSubscriptions, ...listSubscriptions].map((subscription) => (
                <SwiperSlide key={`${subscription.id}`}>
                  <BoxSubscription
                    key={subscription.id}
                    subscription={subscription}
                    isSelected={subSelected === subscription.id}
                    handleSelect={handleSelectSubscription}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className='absolute left-1/2 z-[100] mx-auto w-fit -translate-x-1/2 -translate-y-16 transform xs:block md:hidden'>
          <SliderPagination
            activeIndex={activeSlide === 3 ? 0 : activeSlide === 4 ? 1 : activeSlide === 5 ? 2 : activeSlide}
            slideToGo={handleGoToSlide}
            slideCount={3}
          />
        </div>

        <p className='text-[#818EA1] xs:mb-5 xs:text-justify xs:text-[16px]/[26px] md:mb-6 md:text-pretty md:text-[16px]/[24px] xl:text-[14px]/[22px]'>
          If you choose to purchase a subscription, payment will be charged to your account upon confirmation of
          purchase. The subscription will automatically renew unless canceled at least 24 hours before the end of the
          current billing cycle. You can manage or cancel your subscription at any time through your account settings.
        </p>

        <Link
          to={''}
          className='text-[#0084FF] underline xs:text-[16px]/[22px] md:text-[16px]/[24px] xl:text-[14px]/[22px]'
        >
          Terms & Conditions
        </Link>
      </div>

      <div className='flex flex-col bg-ln-product-card shadow-s-24 xs:min-h-[888px] xs:w-full xs:px-6 xs:pb-16 xs:pt-[100px] md:min-h-[1000px] md:w-full md:px-20 md:pb-16 md:pt-[100px] xl:min-h-[100vh] xl:w-[37.5%] xl:px-[100px] xl:!pt-[120px] xl:pb-10 3xl:!pt-[100px]'>
        <p className='font-semibold uppercase text-white xs:!w-[80%] xs:!text-[36px]/[46px] md:!w-[260px] md:!text-[36px]/[46px] xl:!w-[210px] xl:!text-[28px]/[38px] 3xl:!w-[350px] 3xl:!text-[32px]/[40px]'>
          {productInfor?.params.name}
        </p>

        <div className='relative flex flex-1 items-center xl:!min-h-[300px]'>
          <p className='absolute z-10 font-bold tracking-tight text-white text-white/[.12] xs:top-5 xs:!text-[240px]/[180px] md:top-0 md:!text-[300px]/[280px] xl:!top-[8%] xl:!text-[240px]/[180px] 3xl:!text-[280px]/[200px]'>
            {productInfor?.params.type}
          </p>
          <div
            className={classNames(
              checkNumbersInString10(productInfor?.params.type as string) ? 'mt-[50px]' : 'mt-12',
              'absolute left-1/2 z-20 -translate-x-1/2 xs:!w-[115%] md:!w-[100%] xl:!w-[130%] 3xl:!w-[110%]'
            )}
          >
            <img src={productInfor?.params.images[1]} alt={productInfor?.params.name} className='h-auto w-full' />
          </div>
        </div>

        <div className='w-full'>
          <div className='w-full xs:mb-4 xs:space-y-2 md:mb-5 md:space-y-4 xl:space-y-3'>
            <div className='flex w-full items-center justify-between'>
              <span className='text-white/[.72] xs:text-[14px]/[24px] md:text-[20px]/[28px] xl:text-[16px]/[24px]'>
                Device price
              </span>
              <span className='font-semibold text-white xs:text-[16px]/[24px] md:text-[24px]/[32px] xl:text-[18px]/[24px]'>
                ${formatLocaleString(Number(variants?.[0].priceOptions.price) / 10 ** 6)}.00
              </span>
            </div>
            <div className='flex w-full items-center justify-between'>
              <span className='text-white/[.72] xs:text-[14px]/[24px] md:text-[20px]/[28px] xl:text-[16px]/[24px]'>
                Subscription
              </span>
              <span className='font-medium text-white xs:text-[16px]/[24px] md:text-[24px]/[32px] xl:text-[18px]/[24px]'>
                ${subSelected === 0 ? 0 : formatLocaleString(Number(subscriptionSelected?.subscription))}.00
              </span>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className='flex w-full items-center justify-center gap-4 rounded-[8px] bg-ln-text-product p-[18px] transition duration-200 ease-in-out hover:scale-105'
          >
            <p className='font-semibold text-white xs:text-[18px]/[20px] md:text-[26px]/[30px] xl:text-[20px]/[20px]'>
              Pay $
              {formatLocaleString(
                Number(variants?.[0].priceOptions.price) / 10 ** 6 +
                  (subSelected === 0 ? 0 : Number(subscriptionSelected?.subscription))
              )}
              .00
            </p>
          </button>
        </div>
      </div>
    </section>
  )
})

export default ProductSubscription
