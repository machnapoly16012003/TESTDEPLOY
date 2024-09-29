import { memo, useMemo } from 'react'
import Lottie from 'lottie-react'
import { useParams } from 'react-router-dom'
import { QueryConfig } from '~/@types/common'
import { IProduct } from '~/@types/models'
import { listSubscriptions } from '~/assets/mock/subscription'
import { ProductCheckout, SupscriptionCheckout } from '~/components/feature/itemCheckout'
import useQueryConfig from '~/hooks/useQueryConfig'
import { useAppSelector } from '~/redux/configStore'
import { formatPrice } from '~/utils/format'
import success from '~/constants/animation/success.json'
import images from '~/assets'

const CheckoutComplete = memo(() => {
  const { id: productId } = useParams()

  const { listProducts } = useAppSelector((s) => s.product)

  const queryConfig: QueryConfig = useQueryConfig()

  const listProductCheckouts = useMemo(
    () => listProducts.filter((p) => p.product.id === productId),
    [productId, listProducts]
  )

  const listSubCheckouts = useMemo(
    () => listSubscriptions.filter((s) => s.id === Number(queryConfig.subscription)),
    [productId, listProducts]
  )

  return (
    <div className='flex items-start md:flex-col lg:flex-col xl:flex-row xl:gap-[86px]'>
      <section
        className={`relative flex h-full w-full flex-1 flex-col py-20 xs:px-4 sm:px-4 md:order-2 md:px-10 lg:order-2 lg:px-10 xl:order-1 xl:min-h-[100vh] xl:pl-[100px] xl:pr-0 xl:pt-[116px]`}
      >
        <Lottie animationData={success} className='absolute left-10 top-0 xs:w-[180px] md:w-[200px]' />

        <h1 className='mb-3 mt-[100px] text-[40px]/[60px] font-bold'>Your payment is successful!</h1>

        <div>
          <p className='rp-content-checkout-complete'>Check your email for your order confirmation.</p>
          <p className='rp-content-checkout-complete'>Your order: C994747546746</p>
          <p className='rp-content-checkout-complete'>Order date: Dec 24 2024 at 3:40 PM GMT +2</p>
        </div>

        <div className='my-4 h-[1px] w-[80%] bg-[#818EA1]' />

        <div>
          <p className='rp-content-checkout-complete'>
            We’ve generated an account for you to manage and track your purchase through our app. Please find your login
            credentials below:
          </p>

          <div className='my-6'>
            <p className='font-medium text-black'>
              Username: <span className='rp-content-checkout-complete font-normal'>example24@gmail.com</span>
            </p>
            <p className='font-medium text-black'>
              Temporary Password: <span className='rp-content-checkout-complete font-normal'>A1B2C3D4</span>
            </p>
          </div>

          <p className='rp-content-checkout-complete'>
            You can change your password upon first login. Please download our app from{' '}
          </p>
        </div>

        <div className='mt-5 flex flex-col items-center justify-center gap-3'>
          <p className='text-[16px]/[28px] font-medium text-[#0D0D0D]'>Download now</p>

          <div className='flex items-center gap-4'>
            <img src={images.logo.gg_play} alt='google play' />
            <img src={images.logo.app_store} alt='app store' />
          </div>
        </div>
      </section>
      <section className='2xs:hidden top-0 min-w-[625px] flex-col gap-5 bg-[#FCFDFF] px-10 py-10 pt-[120px] xs:hidden sm:hidden md:flex md:h-fit md:w-full lg:flex lg:h-fit lg:w-full xl:sticky xl:order-2 xl:min-h-[100vh] xl:w-fit'>
        <h6 className='text-[20px]/[30px] font-bold capitalize'>Address</h6>

        <div>
          <p className='rp-content-checkout-complete'>Miracle Lipshutz</p>
          <p className='rp-content-checkout-complete'>(+38) 8995 4848</p>
          <p className='rp-content-checkout-complete'>1234 Elm Street, Springfield, IL 62704, USA.</p>
        </div>

        <h6 className='text-[20px]/[30px] font-bold capitalize'>Detail Information</h6>
        <div className='mb-[30px] flex flex-1 flex-col gap-5'>
          {listProductCheckouts.map((product, index) => (
            <ProductCheckout key={`${product.product.id}-${index}`} product={product} />
          ))}
          {listSubCheckouts.map((sub, index) => (
            <SupscriptionCheckout key={`${sub.id}-${index}`} subscription={sub} />
          ))}
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex w-full items-center justify-between'>
            <p
              className={`text-[#818EA1] xs:text-[16px]/[24px] md:text-[16px]/[24px] xl:text-[16px]/[24px] 3xl:text-[16px]/[24px]`}
            >
              Subtotal
            </p>
            <p className='font-semibold xs:text-[16px]/[24px] md:text-[16px]/[24px]'>
              $
              {listProducts.length > 0
                ? formatPrice(
                    listProducts.reduce((total: number, currentProduct: IProduct) => {
                      return total + Number(currentProduct.variants?.[0]?.priceOptions.price)
                    }, 0),
                    2
                  )
                : formatPrice(0, 2)}
            </p>
          </div>
          <div className='flex w-full items-center justify-between'>
            <p
              className={`text-[#818EA1] xs:text-[16px]/[24px] md:text-[16px]/[24px] xl:text-[16px]/[24px] 3xl:text-[16px]/[24px]`}
            >
              Shipping
            </p>
            <p className='font-semibold xs:text-[16px]/[24px] md:text-[16px]/[24px]'>+${formatPrice(5000000, 2)}</p>
          </div>

          <div className='flex items-center justify-between'>
            <p className='text-[18px]/[27px] font-medium'>Total</p>
            <p className='text-[18px]/[27px] font-bold'>
              $
              {listProducts.length > 0
                ? formatPrice(
                    listProducts.reduce((total: number, currentProduct: IProduct) => {
                      return total + Number(currentProduct.variants?.[0]?.priceOptions.price)
                    }, 0) + 5000000,
                    2
                  )
                : formatPrice(0, 2)}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
})

export default CheckoutComplete
