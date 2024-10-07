import classNames from 'classnames'
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa6'
import { createSearchParams, useLocation, useNavigate, useParams } from 'react-router-dom'
import { listAdvantages } from '~/assets/mock/product'
import { QuantityController } from '~/components/feature/quantityController'
import { ArrowLeftIcon } from '~/components/shared/icon'
import { PATH_PUBLIC_APP } from '~/constants/paths'
import { useAppSelector } from '~/redux/configStore'
import { checkNumbersInString, checkNumbersInString10, formatLocaleString } from '~/utils/format'

const tabs = ['purchase', 'hire']

const ProductDetail = memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const { id: productId } = useParams()

  const { listProducts } = useAppSelector((s) => s.product)

  const productDetail = useMemo(() => listProducts.find((p) => p.product.id === productId), [productId, listProducts])

  const { product: productInfor, variants } = productDetail || {}

  const [tabActive, setTabActive] = useState<string>(tabs[0])
  const [playVideo, setPlayVideo] = useState<boolean>(false)
  const [quantity, setQuantity] = useState<number>(1)

  useEffect(() => window.scrollTo(0, 0), [pathname])

  const handleQuantity = useCallback((value: number) => setQuantity(value), [])

  return (
    <section className='flex bg-[#fafdff] xs:flex-col md:flex-col lg:translate-y-5 xl:flex-row'>
      <div className='flex h-screen flex-col bg-ln-product-card shadow-s-24 xs:min-h-[844px] xs:w-full xs:px-6 xs:pb-[100px] xs:pt-40 md:min-h-[1000px] md:px-20 md:pb-[56px] md:pt-32 lg:pb-[80px] xl:!min-h-[810px] xl:w-[37.5%] xl:!pt-[120px] 3xl:!min-h-[1000px] 3xl:!pt-[100px]'>
        <div className='z-20 flex w-full items-end justify-between xs:h-[138px] md:h-[138px] xl:h-[115px]'>
          <p className='font-semibold uppercase text-white xs:!w-[280px] xs:!text-[36px]/[46px] md:!w-[280px] md:!text-[36px]/[46px] xl:!w-[210px] xl:!text-[28px]/[38px] 3xl:!w-[320px] 3xl:!text-[32px]/[40px]'>
            {productInfor?.params.name}
          </p>
          <div className='relative items-center xs:hidden md:hidden xl:flex 3xl:mb-1'>
            {tabs.map((tab) => (
              <button
                className={classNames(tab === tabs[0] ? 'w-[114px]' : 'w-fit', 'text-left')}
                key={tab}
                onClick={() => setTabActive(tab)}
              >
                <p
                  className={classNames(
                    tabActive === tab ? 'font-semibold text-white' : 'text-white/[.72]',
                    'text-[18px]/[16px] capitalize text-white transition-all duration-200 ease-linear'
                  )}
                >
                  {tab}
                </p>
              </button>
            ))}
            <span
              style={{ transition: 'left 0.8s' }}
              className={classNames(
                'absolute bottom-[-10px] h-[2px] w-9 bg-[#F200F2]',
                tabActive === tabs[0] ? 'left-0' : 'left-[114px]'
              )}
            />
          </div>
        </div>

        <div className='relative flex-1 xl:!min-h-[300px]'>
          <p
            className={classNames(
              checkNumbersInString10(productInfor?.params.type as string)
                ? 'xs:-left-2 xs:!text-[260px]/[260px]'
                : 'xs:left-4 xs:!text-[185px]/[200px]',
              'absolute font-bold tracking-tight text-white text-white/[.12] xs:top-5 md:-top-3 md:!text-[300px]/[280px] xl:!top-[8%] xl:!text-[220px]/[180px] 3xl:!top-[10%] 3xl:!text-[280px]/[200px]'
            )}
          >
            {productInfor?.params.type}
          </p>
          <div
            className={classNames(
              checkNumbersInString(productInfor?.params.type as string)
                ? 'xs:top-1/4 md:top-1/4 xl:!top-[22%] 3xl:!top-[26%]'
                : 'xs:top-[18%] md:top-[20%] xl:!top-[20%] 3xl:!top-[20%]',
              'absolute xs:-left-4 xs:!w-[110%] md:left-1/2 md:!w-[100%] md:-translate-x-1/2 md:transform xl:!left-[64px] xl:!w-[500px] xl:translate-x-0 3xl:!left-8 3xl:!w-[680px]'
            )}
          >
            <img src={productInfor?.params.images[1]} alt={productInfor?.params.name} className='h-auto w-full' />
          </div>
        </div>

        <div className='flex w-full items-end justify-between'>
          <div className='xs:space-y-2 md:space-y-3 xl:space-y-2'>
            <p className='text-white/[.72] xs:text-[14px]/[16px] md:text-[20px]/[20px] xl:text-[16px]/[16px]'>
              Rental price <span className='text-[#F200F2]'>*</span>
            </p>
            <p className='font-semibold text-white xs:text-[38px]/[48px] md:text-[52px]/[52px] xl:text-[48px]/[48px]'>
              ${formatLocaleString(Number(variants?.[0].priceOptions.price) / 10 ** 6)}
            </p>
            <p className='text-white/[.72] xs:text-[14px]/[18px] md:text-[20px]/[20px] xl:text-[16px]/[16px]'>
              Subscription fee:{' '}
              <span className='font-medium text-white xs:text-[18px]/[18px] md:text-[22px]/[22px] xl:text-[18px]/[18px]'>
                ${formatLocaleString(Number(variants?.[0].priceOptions.subscriptionFee) / 10 ** 6)}/month
              </span>
            </p>
          </div>

          <div className='relative flex w-fit flex-col items-center justify-center xs:gap-2 md:gap-3 xl:gap-2'>
            <div className='group relative z-50'>
              <video
                ref={videoRef}
                className='rounded-[10px] border border-solid border-[#E5E5EACC]/[.8] object-cover object-center xs:size-[52px] md:size-[100px] xl:size-[60px]'
                src={productInfor?.params.videoUrl}
                muted
                loop
              />
              <button
                onClick={() => {
                  if (playVideo) {
                    setPlayVideo(false)
                    videoRef.current?.pause()
                  } else {
                    setPlayVideo(true)
                    videoRef.current?.play()
                  }
                }}
                className='absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform transition duration-200 ease-in-out group-hover:block'
              >
                {playVideo ? (
                  <FaPause color='white' className='opacity-90 xs:size-5 md:size-6 xl:size-4' />
                ) : (
                  <FaPlay color='white' className='opacity-90 xs:size-5 md:size-6 xl:size-4' />
                )}
              </button>
            </div>

            <p className='text-center font-medium text-white xs:text-[12px]/[17px] md:text-[16px]/[16.8px] xl:text-[12px]/[17px]'>
              Review
            </p>
          </div>
        </div>
      </div>

      <div className='h-screen xs:min-h-[860px] xs:w-full xs:px-6 xs:py-8 md:h-fit md:px-10 md:py-14 xl:!block xl:!min-h-[810px] xl:w-[62.5%] xl:!pt-[120px] xl:pl-[190px] xl:pr-[100px] 3xl:!flex 3xl:!min-h-[1000px] 3xl:!flex-col 3xl:!justify-center 3xl:!px-[200px] 3xl:!pt-[0px]'>
        <button className='mb-12 items-center gap-4 xs:hidden md:hidden xl:flex' onClick={() => window.history.back()}>
          <ArrowLeftIcon className='opacity-[.44]' />
          <p className='text-[16px]/[16px] text-black/[.72]'>Back</p>
        </button>

        <div className='relative items-center xs:mb-5 xs:flex md:mb-10 md:flex xl:hidden'>
          {tabs.map((tab) => (
            <button
              className={classNames(tab === tabs[0] ? 'xs:w-[114px] md:w-[160px]' : 'w-fit', 'text-left')}
              key={tab}
              onClick={() => setTabActive(tab)}
            >
              <p
                className={classNames(
                  tabActive === tab ? 'font-semibold text-black' : 'text-black/[.72]',
                  'capitalize text-black transition-all duration-200 ease-linear xs:text-[16px]/[18px] md:text-[24px]/[26.8px]'
                )}
              >
                {tab}
              </p>
            </button>
          ))}
          <span
            style={{ transition: 'left 0.8s' }}
            className={classNames(
              'absolute bottom-[-10px] h-[2px] bg-[#F200F2] xs:w-9 md:w-12',
              tabActive === tabs[0] ? 'left-0' : 'xs:left-[114px] md:left-[160px]'
            )}
          />
        </div>

        <h3 className='font-semibold text-black xs:mb-5 xs:text-[32px]/[40px] md:mb-8 md:text-[36px]/[36px]'>
          Product Description
        </h3>

        <p
          dangerouslySetInnerHTML={{ __html: productInfor?.params.description as string }}
          className='text-black/[.56] xs:text-justify xs:text-[16px]/[26px] md:text-justify md:text-[20px]/[28px] xl:text-pretty xl:text-[18px]/[28px]'
        />

        <div className='space-y-6 xs:mt-8 md:mt-10'>
          <p className='font-semibold text-black xs:text-[18px]/[20px] md:text-[24px]/[26.8px] xl:text-[20px]/[20px]'>
            Main advantages
          </p>
          <div className='flex items-center xs:flex-wrap xs:justify-between xs:gap-4 md:flex-nowrap md:justify-center md:gap-4 xl:justify-start xl:gap-5'>
            {listAdvantages.map((advantages) => (
              <div
                key={advantages.id}
                className='md:max-[95px] xs:max-[85px] flex flex-col items-center gap-3 xs:max-w-[98px] xl:max-w-[85px]'
              >
                <div className='flex flex-shrink-0 items-center justify-center rounded-2xl border border-solid border-[#E5E5EA] xs:size-[98px] md:size-[95px] xl:size-[85px]'>
                  <img src={advantages.icon} alt={advantages.title} className='xs:size-[42px] md:size-9' />
                </div>
                <p
                  className='text-back text-nowrap text-center font-semibold xs:text-[12px]/[20px] md:text-[14px]/[20px] md:tracking-tight xl:text-[12px]/[17px] xl:tracking-tighter'
                  dangerouslySetInnerHTML={{ __html: advantages.title as string }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='ml-auto flex w-fit items-center gap-[18px] rounded-xl bg-white pl-[18px] shadow-s-28 xs:mt-10 md:mt-[62px] xl:mr-5'>
          <QuantityController
            value={quantity}
            onDecrease={handleQuantity}
            onIncrease={handleQuantity}
            max={Number(variants?.[0].priceOptions.quantity)}
          />

          <button
            onClick={() => {
              navigate({
                pathname: `${PATH_PUBLIC_APP.product.root}/subscription/${productInfor?.id}`,
                search: createSearchParams({ productQuantity: String(quantity) }).toString()
              })
            }}
            className='flex items-center justify-center bg-ln-text-product shadow-s-25 transition duration-200 ease-in-out hover:scale-105 xs:gap-3 xs:rounded-[8px] xs:p-[17px] md:gap-4 md:rounded-xl md:px-[22.25px] md:py-[24px]'
          >
            <p className='font-semibold text-white xs:text-[16px]/[16px] md:text-[20px]/[20px]'>
              {tabActive === tabs[1] ? 'HIRE' : 'BUY'}
            </p>
          </button>
        </div>
      </div>
    </section>
  )
})

export default ProductDetail
