import { yupResolver } from '@hookform/resolvers/yup'
import classNames from 'classnames'
import { memo, useCallback, useMemo, useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { QueryConfig } from '~/@types/common'
import { IProduct, PaymentForm, ShippingForm } from '~/@types/models'
import images from '~/assets'
import { listSubscriptions } from '~/assets/mock/subscription'
import { ProductCheckout, SupscriptionCheckout } from '~/components/feature/itemCheckout'
import { AnimationPage } from '~/components/shared/animation'
import { ArrowLeftIcon, CopyIcon } from '~/components/shared/icon'
import useDialog from '~/hooks/useDialog'
import useQueryConfig from '~/hooks/useQueryConfig'
import useValidationForm from '~/hooks/useValidationForm'
import { useAppSelector } from '~/redux/configStore'
import { OtpDialog, PaymentFrom, ShippingInfoFrom } from '~/section/checkout'
import { IPaymentFromRef } from '~/section/checkout/PaymentFrom'
import { IShippingInfoFromRef } from '~/section/checkout/ShippingInfoFrom'
import { formatPrice } from '~/utils/format'

const Checkout = memo(() => {
  const shippingRef = useRef<IShippingInfoFromRef>(null)
  const paymnetRef = useRef<IPaymentFromRef>(null)

  const { id: productId } = useParams()

  const { listProducts } = useAppSelector((s) => s.product)

  const queryConfig: QueryConfig = useQueryConfig()
  const { isOpen, setIsOpen, handleOpen } = useDialog()
  const { shippingFrom, paymentFrom } = useValidationForm()

  const shippingForm = useForm<ShippingForm>({
    resolver: yupResolver(shippingFrom),
    mode: 'onBlur'
  })

  const paymentForm = useForm<PaymentForm>({
    defaultValues: { paymentMethod: 'credit-card' },
    resolver: yupResolver(paymentFrom),
    mode: 'onBlur'
  })

  const { handleSubmit: handleSubmitShipping } = shippingForm

  const { handleSubmit } = paymentForm

  const [step, setStep] = useState<number>(1)
  const [refCode, setRefCode] = useState<string>('')
  const [errMessage, setErrMessage] = useState<string>('')

  const listProductCheckouts = useMemo(
    () => listProducts.filter((p) => p.product.id === productId),
    [productId, listProducts]
  )

  const listSubCheckouts = useMemo(
    () => listSubscriptions.filter((s) => s.id === Number(queryConfig.subscription)),
    [productId, listProducts]
  )

  const handleShippingFrom = useCallback(
    (values: ShippingForm) => {
      if (!shippingRef.current?.accepted) return setErrMessage('Please tick to accept the terms!')
      setErrMessage('')
      console.log('ShippingForm', values)
      setStep(2)
    },
    [shippingRef.current?.accepted]
  )

  const handlePaymentFrom = useCallback(
    (values: PaymentForm) => {
      if (!paymnetRef.current?.autoPayment) return setErrMessage('Please tick to auto payment subscriptions!')
      setErrMessage('')
      console.log('PaymentForm', values)
      handleOpen()
    },
    [paymnetRef.current?.autoPayment]
  )

  return (
    <>
      <div className='flex items-start xs:flex-col md:flex-col xl:flex-row xl:gap-[86px]'>
        <section
          className={`flex h-full w-full flex-1 flex-col py-20 xs:p-4 xs:pt-20 md:p-10 lg:pt-[116px] xl:min-h-[100vh] xl:pl-[100px] xl:pr-0 xl:pt-[116px]`}
        >
          <h6 className={`text-[32px]/[48px] font-bold capitalize`}>Checkout</h6>

          <div className='space-y-2 rounded-xl bg-[#F8F8F9] xs:mt-2 xs:p-2 md:mt-4 md:px-3 md:py-[10px]'>
            <div className='relative flex w-full items-center gap-5 rounded-[8px] bg-[#EAEAEA] xs:h-[52px] xs:px-3 sm:h-[60px] md:px-5'>
              <input
                placeholder='Enter ref code'
                value={refCode}
                onChange={(e) => {
                  const value = e.target.value
                  setRefCode(value)
                }}
                className='h-full w-full appearance-none bg-transparent'
              />
              <button
                onClick={async () => {
                  const string = await navigator.clipboard.readText()
                  setRefCode(string)
                }}
              >
                <CopyIcon color='#1E1B39' className='opacity-[.68]' />
              </button>
            </div>
            <div className='flex items-center gap-2'>
              <img src={images.icon.lock} alt='lock-icon' />
              <p className='text-[#818EA1] xs:text-[12px]/[18px] md:text-[14px]/[21px]'>
                This feature will be available soon.
              </p>
            </div>
          </div>

          <div className='flex-1'>
            <AnimationPage isVisble={step === 1} className={step === 1 ? 'flex' : 'hidden'} homePage={true}>
              <FormProvider {...shippingForm}>
                <ShippingInfoFrom ref={shippingRef} errMessage={errMessage} setErrMessage={setErrMessage} />
              </FormProvider>
            </AnimationPage>
            <AnimationPage isVisble={step === 2} className={step === 2 ? 'flex' : 'hidden'}>
              <FormProvider {...paymentForm}>
                <PaymentFrom
                  ref={paymnetRef}
                  onBack={() => setStep(1)}
                  errMessage={errMessage}
                  setErrMessage={setErrMessage}
                />
              </FormProvider>
            </AnimationPage>
          </div>
        </section>

        {/* list item checkout */}
        <section className='top-0 flex-col bg-[#FCFDFF] pt-[120px] xs:flex xs:w-full xs:gap-8 xs:px-6 xs:py-8 sm:flex md:flex md:h-fit md:w-full md:min-w-[625px] md:gap-5 md:px-10 md:py-10 lg:flex lg:h-fit lg:w-full xl:sticky xl:order-2 xl:min-h-[100vh] xl:w-fit xl:gap-5 xl:px-10 xl:py-10'>
          <h6 className='text-[20px]/[30px] font-bold capitalize'>Preview</h6>
          <div className='mb-[30px] flex flex-1 flex-col xs:gap-6 md:gap-5 xl:gap-5'>
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

            {step === 1 ? (
              <button
                onClick={handleSubmitShipping(handleShippingFrom)}
                className={classNames(
                  // shippingFormState.errors !== null ? 'bg-black/[.2]' : 'bg-ln-text-product hover:scale-[102%]',
                  'bg-ln-text-product hover:scale-[102%]',
                  'mt-4 flex w-full items-center justify-center gap-4 rounded-[8px] transition duration-200 ease-in-out xs:p-[16px] md:p-[18px]'
                )}
              >
                <p className='font-semibold text-white xs:text-[18px]/[20px] md:text-[20px]/[20px] xl:text-[20px]/[20px]'>
                  Continue
                </p>
              </button>
            ) : (
              <div className='mt-4 flex items-center gap-2'>
                <button
                  onClick={() => setStep(1)}
                  className='flex h-[52px] min-w-20 items-center justify-center rounded-[8px] bg-blackDark/[.24] shadow-s-24'
                >
                  <ArrowLeftIcon color='white' />
                </button>
                <button
                  onClick={handleSubmit(handlePaymentFrom)}
                  className={classNames(
                    // !formState.isValid ? 'bg-black/[.2]' : 'bg-ln-text-product hover:scale-[102%]',
                    'bg-ln-text-product hover:scale-[102%]',
                    'flex w-full items-center justify-center gap-4 rounded-[8px] transition duration-200 ease-in-out xs:p-[16px] md:p-[18px]'
                  )}
                >
                  <p className='font-semibold text-white xs:text-[18px]/[20px] md:text-[20px]/[20px] xl:text-[20px]/[20px]'>
                    Continue
                  </p>
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      <OtpDialog productId={productId as string} open={isOpen} setOpen={setIsOpen} />
    </>
  )
})

export default Checkout
