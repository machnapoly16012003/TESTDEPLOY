import classNames from 'classnames'
import { memo, useCallback, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { listSubscriptions } from '~/assets/mock/subscription'
import { BoxSubscription } from '~/components/feature/boxSubscription'
import { ArrowLeftIcon } from '~/components/shared/icon'
import { PATH_PUBLIC_APP } from '~/constants/paths'
import { useAppSelector } from '~/redux/configStore'
import { formatLocaleString } from '~/utils/format'

const ProductSubscription = memo(() => {
  const navigate = useNavigate()

  const { id: productId } = useParams()

  const { listProducts } = useAppSelector((s) => s.product)

  const productDetail = useMemo(() => listProducts.find((p) => p.product.id === productId), [productId, listProducts])

  const { product: productInfor, variants } = productDetail || {}

  const [subSelected, setSubSelected] = useState<number>(0)

  const subscriptionSelected = useMemo(
    () => listSubscriptions.find((s) => s.id === subSelected),
    [subSelected, listSubscriptions]
  )

  const handleSelectSubscription = useCallback((id: number) => {
    setSubSelected(id)
  }, [])

  return (
    <section className='flex min-h-[100vh] bg-[#fafdff]'>
      <div className='h-full min-h-[100vh] w-[62.5%] xl:!block xl:!pt-[120px] xl:pl-[100px] xl:pr-[184px] 3xl:!flex 3xl:!flex-col 3xl:!justify-center 3xl:!px-[200px] 3xl:!pt-[0px]'>
        <button className='mb-12 flex items-center gap-4' onClick={() => window.history.back()}>
          <ArrowLeftIcon className='opacity-[.44]' />
          <p className='text-[16px]/[16px] text-black/[.72]'>Back</p>
        </button>

        <h3 className='text-[36px]/[36px] font-semibold text-black'>Choose Subscription</h3>

        <div className='my-8 flex items-center gap-5'>
          {listSubscriptions.map((subscription) => (
            <BoxSubscription
              key={subscription.id}
              subscription={subscription}
              isSelected={subSelected === subscription.id}
              handleSelect={handleSelectSubscription}
            />
          ))}
        </div>

        <p className='mb-6 text-[14px]/[22px] text-[#818EA1]'>
          If you choose to purchase a subscription, payment will be charged to your account upon confirmation of
          purchase. The subscription will automatically renew unless canceled at least 24 hours before the end of the
          current billing cycle. You can manage or cancel your subscription at any time through your account settings.
        </p>

        <Link to={''} className='text-[14px]/[22px] text-[#0084FF] underline'>
          Terms & Conditions
        </Link>
      </div>
      <div className='shadow-s-24 flex min-h-[100vh] w-[37.5%] flex-col bg-ln-product-card px-[100px] pb-10 xl:!pt-[120px] 3xl:!pt-[100px]'>
        <p className='font-semibold uppercase text-white xl:!w-[210px] xl:!text-[28px]/[38px] 3xl:!w-[350px] 3xl:!text-[32px]/[40px]'>
          {productInfor?.params.name}
        </p>

        <div className='relative flex flex-1 items-center xl:!min-h-[300px]'>
          <p className='absolute z-10 font-bold tracking-tight text-white text-white/[.12] xl:!top-[8%] xl:!text-[240px]/[180px] 3xl:!text-[280px]/[200px]'>
            {productInfor?.params.type}
          </p>
          <div className={classNames('absolute left-1/2 z-20 -translate-x-1/2 xl:!w-[130%] 3xl:!w-[110%]')}>
            <img src={productInfor?.params.images[1]} alt={productInfor?.params.name} className='h-auto w-full' />
          </div>
        </div>

        <div className='w-full'>
          <div className='mb-5 w-full xs:space-y-1 md:space-y-3'>
            <div className='flex w-full items-center justify-between'>
              <span className='text-white/[.72] xs:text-[12px]/[12px] md:text-[16px]/[24px]'>Device price</span>
              <span className='font-semibold text-white xs:text-[30px]/[30px] md:text-[18px]/[24px]'>
                ${formatLocaleString(Number(variants?.[0].priceOptions.price) / 10 ** 6)}.00
              </span>
            </div>
            <div className='flex w-full items-center justify-between'>
              <span className='text-white/[.72] xs:text-[10px]/[10px] md:text-[16px]/[24px]'>Subscription</span>
              <span className='font-medium text-white xs:text-[12px]/[12px] md:text-[18px]/[24px]'>
                ${subSelected === 0 ? 0 : formatLocaleString(Number(subscriptionSelected?.subscription))}.00
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              navigate(`${PATH_PUBLIC_APP.checkout.root}/${productInfor?.id}`)
            }}
            className='flex w-full items-center justify-center gap-4 rounded-[8px] bg-ln-text-product p-[18px] transition duration-200 ease-in-out hover:scale-105'
          >
            <p className='text-[20px]/[20px] font-semibold text-white'>
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
