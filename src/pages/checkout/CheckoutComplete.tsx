import Lottie from 'lottie-react'
import { memo, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { QueryConfig } from '~/@types/common'
import { IProduct, ISubscription } from '~/@types/models'
import images from '~/assets'
import { listSubscriptions } from '~/assets/mock/subscription'
import { ProductCheckout, SupscriptionCheckout } from '~/components/feature/itemCheckout'
import success from '~/constants/animation/success.json'
import useQueryConfig from '~/hooks/useQueryConfig'
import { useAppSelector } from '~/redux/configStore'
import { formatLocaleString } from '~/utils/format'

const CheckoutComplete = memo(() => {
  const { id: productId } = useParams()

  const { listProducts } = useAppSelector((s) => s.product)

  const queryConfig: QueryConfig = useQueryConfig()

  const listProductCheckouts = useMemo(
    () =>
      listProducts
        .filter((p) => p.product.id === productId)
        .map((p) => ({ ...p, quantityInCart: Number(queryConfig.productQuantity) })),
    [productId, listProducts]
  )

  const listSubCheckouts = useMemo(
    () => listSubscriptions.filter((s) => s.id === Number(queryConfig.subscription)),
    [productId, listProducts]
  )

  return (
    <div className='flex items-start xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row xl:gap-[86px]'>
      <section
        className={`relative flex h-full w-full flex-1 flex-col py-20 xs:px-4 xs:pb-4 sm:px-4 md:px-10 md:pb-5 md:pt-[110px] lg:px-10 lg:pb-10 xl:min-h-[100vh] xl:pl-[100px] xl:pr-0 xl:pt-[116px]`}
      >
        <Lottie
          animationData={success}
          className='absolute -translate-x-1/2 transform xs:-top-5 xs:left-1/2 xs:w-[180px] sm:left-1/2 md:-top-5 md:left-1/2 md:w-[200px] lg:left-1/2 xl:left-[54.5%] xl:top-0'
        />

        <div className='mx-auto text-center xs:mb-0 xl:mb-[70px]'>
          <h1 className='mt-[100px] font-bold xs:text-[24px]/[36px] md:text-[34px]/[46px] xl:text-[40px]/[60px]'>
            Payment successful!
          </h1>
          <p className='text-[#757575] xs:text-[14px]/[28px] md:text-[16px]/[28px]'>
            Check your email for your order confirmation.
          </p>
        </div>

        <div className='mt-5 flex-col items-center justify-center gap-3 xs:hidden sm:hidden md:hidden lg:flex xl:flex'>
          <div className='flex gap-[73px] lg:flex-col lg:items-center xl:flex-row xl:items-start'>
            <div>
              <div className='lg:text-center xl:text-left'>
                <h1 className='text-[64px]/[54px] font-bold'>Download</h1>
                <h2 className='ml-[3px] text-nowrap text-[46px]/[46px] font-semibold text-[#11B0F2]'>OUR NEW APP!</h2>
              </div>

              <p className='mt-6 text-[16px]/[28px] text-[#818EA1]'>
                We’ve generated an account for you to manage and track your purchase through our app. You can change
                your password upon first login. Please find your login credentials below:
              </p>
            </div>

            <div className='flex flex-col items-center gap-4'>
              <div className='rounded-[14px] bg-ln-qr p-[4.5px]'>
                <div className='rounded-[10px] bg-white p-3'>
                  <div className='w-[188px] flex-shrink-0 rounded-[9px] bg-ln-qr p-[2px]'>
                    <img src={images.image.QR} alt='QR' className='size-full rounded-[7.8px]' />
                  </div>
                </div>
              </div>
              <h5 className='text-[30px]/[28px] font-semibold'>Scan QR code</h5>
            </div>
          </div>

          <div className='mt-11 flex items-center justify-between gap-4'>
            <img src={images.logo.gg_play_black} alt='google play' className='lg:h-[50px] xl:h-[70px]' />
            <img src={images.logo.app_store_black} alt='app store' className='lg:h-[50px] xl:h-[70px]' />
          </div>
        </div>
      </section>

      <section className='top-0 h-full flex-1 flex-col pt-[120px] xs:flex xs:w-full xs:gap-4 xs:bg-white xs:px-6 xs:py-8 sm:flex md:flex md:h-fit md:w-full md:gap-5 md:bg-white md:px-10 md:py-10 lg:flex lg:h-full lg:min-h-[1024px] lg:w-[50%] lg:pt-24 xl:sticky xl:order-2 xl:min-h-[100vh] xl:w-fit xl:min-w-[625px] xl:gap-5 xl:bg-[#FCFDFF] xl:px-10 xl:py-10 xl:pt-28'>
        <div>
          <p className='rp-content-checkout-complete'>Your order: C994747546746</p>
          <p className='rp-content-checkout-complete'>Order date: Dec 24 2024 at 3:40 PM GMT +2</p>
        </div>

        <h6 className='text-[20px]/[30px] font-bold capitalize'>Address</h6>

        <div>
          <p className='rp-content-checkout-complete'>Miracle Lipshutz</p>
          <p className='rp-content-checkout-complete'>(+38) 8995 4848</p>
          <p className='rp-content-checkout-complete'>1234 Elm Street, Springfield, IL 62704, USA.</p>
        </div>

        <h6 className='text-[20px]/[30px] font-bold capitalize xs:mt-10 md:mt-0'>Detail Information</h6>
        <div className='mb-[30px] flex flex-1 flex-col xs:gap-6 md:gap-5 xl:gap-6'>
          <div className='space-y-2'>
            <p className='text-[14px]/[21px] text-[#818EA1]'>Product</p>
            {listProductCheckouts.map((product, index) => (
              <ProductCheckout key={`${product.product.id}-${index}`} product={product} />
            ))}
          </div>
          <div className='space-y-2'>
            <p className='text-[14px]/[21px] text-[#818EA1]'>Subscription Package</p>
            {listSubCheckouts.map((sub, index) => (
              <SupscriptionCheckout key={`${sub.id}-${index}`} subscription={sub} />
            ))}
          </div>
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
              {listProductCheckouts.length > 0
                ? formatLocaleString(
                    (listProductCheckouts.reduce((total: number, currentProduct: IProduct) => {
                      return (
                        total +
                        Number(currentProduct.variants?.[0]?.priceOptions.price) * Number(currentProduct.quantityInCart)
                      )
                    }, 0) +
                      listSubCheckouts.reduce((total: number, currentSub: ISubscription) => {
                        return total + Number(currentSub.subscription)
                      }, 0)) /
                      10 ** 6
                  )
                : formatLocaleString(0)}
              .00
            </p>
          </div>
          <div className='flex w-full items-center justify-between'>
            <p
              className={`text-[#818EA1] xs:text-[16px]/[24px] md:text-[16px]/[24px] xl:text-[16px]/[24px] 3xl:text-[16px]/[24px]`}
            >
              Shipping
            </p>
            <p className='font-semibold xs:text-[16px]/[24px] md:text-[16px]/[24px]'>${formatLocaleString(0)}.00</p>
          </div>
          <div className='flex w-full items-center justify-between'>
            <p
              className={`text-[#818EA1] xs:text-[16px]/[24px] md:text-[16px]/[24px] xl:text-[16px]/[24px] 3xl:text-[16px]/[24px]`}
            >
              Discount
            </p>
            <p className='font-semibold xs:text-[16px]/[24px] md:text-[16px]/[24px]'>${formatLocaleString(0)}.00</p>
          </div>

          <div className='flex items-center justify-between'>
            <p className='text-[18px]/[27px] font-medium'>Total</p>
            <p className='text-[18px]/[27px] font-bold'>
              $
              {listProductCheckouts.length > 0
                ? formatLocaleString(
                    (listProductCheckouts.reduce((total: number, currentProduct: IProduct) => {
                      return (
                        total +
                        Number(currentProduct.variants?.[0]?.priceOptions.price) * Number(currentProduct.quantityInCart)
                      )
                    }, 0) +
                      listSubCheckouts.reduce((total: number, currentSub: ISubscription) => {
                        return total + Number(currentSub.subscription)
                      }, 0)) /
                      10 ** 6
                  )
                : formatLocaleString(0)}
              .00
            </p>
          </div>
        </div>
      </section>

      <div className='mt-5 flex-col items-center justify-center gap-3 px-6 pb-10 xs:flex sm:flex md:flex lg:hidden xl:hidden'>
        <div className='flex items-start gap-[24px] xs:flex-col xs:items-center sm:items-center md:flex-col md:items-center lg:items-center xl:flex-row'>
          <div className='xs:text-center sm:text-center md:text-center lg:text-center xl:text-left'>
            <div>
              <h1 className='text-[64px]/[54px] font-bold'>Download</h1>
              <h2 className='ml-[3px] text-nowrap text-[46px]/[46px] font-semibold text-[#11B0F2]'>OUR NEW APP!</h2>
            </div>

            <p className='mt-6 text-left text-[16px]/[28px] text-[#818EA1]'>
              We’ve generated an account for you to manage and track your purchase through our app. You can change your
              password upon first login. Please find your login credentials below:
            </p>
          </div>

          <div className='flex flex-col items-center gap-4'>
            <div className='rounded-[14px] bg-ln-qr p-[4.5px] xs:order-2 sm:order-2 md:order-2 lg:order-2 xl:order-1'>
              <div className='rounded-[10px] bg-white p-3'>
                <div className='w-[188px] flex-shrink-0 rounded-[9px] bg-ln-qr p-[2px]'>
                  <img src={images.image.QR} alt='QR' className='size-full rounded-[7.8px]' />
                </div>
              </div>
            </div>
            <h5 className='font-semibold xs:order-1 xs:text-[16px]/[28px] md:order-1 md:text-[24px]/[28px] lg:order-1 xl:order-2 xl:text-[30px]/[28px]'>
              Scan QR code
            </h5>
          </div>
        </div>

        <div className='flex items-center justify-between gap-4 xs:mt-6 sm:mt-6 md:mt-6 lg:mt-6 xl:mt-11'>
          <div className='xs:h-[48px] md:h-[60px] lg:h-[60px] xl:h-[70px]'>
            <img src={images.logo.gg_play_black} alt='google play' className='h-full' />
          </div>
          <div className='xs:h-[48px] md:h-[60px] lg:h-[60px] xl:h-[70px]'>
            <img src={images.logo.app_store_black} alt='google play' className='h-full' />
          </div>
        </div>
      </div>
    </div>
  )
})

export default CheckoutComplete
