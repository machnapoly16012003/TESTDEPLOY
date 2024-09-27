import classNames from 'classnames'
import { memo, useMemo, useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { useNavigate, useParams } from 'react-router-dom'
import { listAdvantages } from '~/assets/mock/product'
import { ArrowLeftIcon } from '~/components/shared/icon'
import { PATH_PUBLIC_APP } from '~/constants/paths'
import { useAppSelector } from '~/redux/configStore'
import { checkNumbersInString, formatLocaleString } from '~/utils/format'

const tabs = ['purchase', 'hire']

const ProductDetail = memo(() => {
  const navigate = useNavigate()

  const { id: productId } = useParams()

  const { listProducts } = useAppSelector((s) => s.product)

  const productDetail = useMemo(() => listProducts.find((p) => p.product.id === productId), [productId, listProducts])

  const { product: productInfor, variants } = productDetail || {}

  const [tabActive, setTabActive] = useState<string>(tabs[1])

  return (
    <section className='flex min-h-[100vh]'>
      <div className='shadow-s-24 flex min-h-[100vh] w-[37.5%] flex-col bg-ln-product-card pb-[56px] pl-[100px] pr-10 pt-40 xl:!pt-[120px] 3xl:!pt-[100px]'>
        <div className='z-20 flex h-[115px] w-full items-end justify-between'>
          <p className='font-semibold uppercase text-white xl:!w-[210px] xl:!text-[28px]/[38px] 3xl:!w-[350px] 3xl:!text-[32px]/[40px]'>
            {productInfor?.params.name}
          </p>
          <div className='relative flex items-center'>
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
          <p className='absolute font-bold tracking-tight text-white text-white/[.12] xl:!top-[8%] xl:!text-[220px]/[180px] 3xl:!text-[280px]/[200px]'>
            {productInfor?.params.type}
          </p>
          <div
            className={classNames(
              checkNumbersInString(productInfor?.params.type as string)
                ? 'xl:!top-5 3xl:!top-[22%]'
                : 'xl:!top-1 3xl:!top-[15%]',
              'absolute xl:!left-14 xl:!w-[480px] 3xl:!left-14 3xl:!w-[680px]'
            )}
          >
            <img src={productInfor?.params.images[1]} alt={productInfor?.params.name} className='h-auto w-full' />
          </div>
        </div>

        <div className='flex w-full items-end justify-between'>
          <div className='xs:space-y-1 md:space-y-2'>
            <p className='text-white/[.72] xs:text-[12px]/[12px] md:text-[16px]/[16px]'>
              Rental price <span className='text-[#F200F2]'>*</span>
            </p>
            <p className='font-semibold text-white xs:text-[30px]/[30px] md:text-[48px]/[48px]'>
              ${formatLocaleString(Number(variants?.[0].priceOptions.price) / 10 ** 6)}
            </p>
            <p className='text-white/[.72] xs:text-[10px]/[10px] md:text-[16px]/[16px]'>
              Subscription fee:{' '}
              <span className='font-medium text-white xs:text-[12px]/[12px] md:text-[18px]/[18px]'>
                ${formatLocaleString(Number(variants?.[0].priceOptions.subscriptionFee) / 10 ** 6)}/month
              </span>
            </p>
          </div>

          <button
            onClick={() => {
              if (tabActive === tabs[1]) {
                navigate(`${PATH_PUBLIC_APP.product.root}/subscription/${productInfor?.id}`)
              }
            }}
            className='flex items-center justify-center gap-4 rounded-xl bg-ln-text-product p-[22px] transition duration-200 ease-in-out hover:scale-105'
          >
            <FaPlus className='xs:size-4 md:size-6' color='white' />
            <p className='text-[20px]/[20px] font-semibold text-white'>{tabActive === tabs[1] ? 'HIRE' : 'BUY'}</p>
          </button>
        </div>
      </div>
      <div className='h-full min-h-[100vh] w-[62.5%] xl:!block xl:!pt-[120px] xl:pl-[190px] xl:pr-[100px] 3xl:!flex 3xl:!flex-col 3xl:!justify-center 3xl:!px-[200px] 3xl:!pt-[0px]'>
        <button className='mb-12 flex items-center gap-4' onClick={() => window.history.back()}>
          <ArrowLeftIcon className='opacity-[.44]' />
          <p className='text-[16px]/[16px] text-black/[.72]'>Back</p>
        </button>

        <h3 className='mb-8 text-[36px]/[36px] font-semibold text-black'>Product Description</h3>

        <p
          dangerouslySetInnerHTML={{ __html: productInfor?.params.description as string }}
          className='text-[18px]/[28px] text-black/[.56]'
        />

        <div className='mt-10 space-y-6'>
          <p className='text-[20px]/[20px] font-semibold text-black'>Main advantages</p>
          <div className='flex items-center gap-5'>
            {listAdvantages.map((advantages) => (
              <div key={advantages.id} className='flex max-w-[85px] flex-col items-center gap-3'>
                <div className='flex size-[85px] flex-shrink-0 items-center justify-center rounded-2xl border border-solid border-[#E5E5EA]'>
                  <img src={advantages.icon} alt={advantages.title} className='size-9' />
                </div>
                <p
                  className='text-back text-nowrap text-center text-[12px]/[17px] font-semibold tracking-tighter'
                  dangerouslySetInnerHTML={{ __html: advantages.title as string }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default ProductDetail
