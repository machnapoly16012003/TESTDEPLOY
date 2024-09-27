import { memo, useCallback, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { QueryConfig } from '~/@types/common'
import { IProduct, PaymentForm, ShippingForm } from '~/@types/models'
import { ItemCheckout } from '~/components/feature/itemCheckout'
import { AnimationPage } from '~/components/shared/animation'
import { CopyIcon } from '~/components/shared/icon'
import useQueryConfig from '~/hooks/useQueryConfig'
import { useAppSelector } from '~/redux/configStore'
import { PaymentFrom, ShippingInfoFrom } from '~/section/checkout'
import useValidationForm from '~/hooks/useValidationForm'

const Checkout = memo(() => {
  const navigate = useNavigate()

  const { listProducts } = useAppSelector((s) => s.product)

  const queryConfig: QueryConfig = useQueryConfig()
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

  const [step, setStep] = useState<number>(1)
  const [refCode, setRefCode] = useState<string>('')

  const handleContinue = useCallback(() => {}, [])

  return (
    <div className='flex items-start md:flex-col lg:flex-col xl:flex-row xl:gap-[56px]'>
      <section
        className={`2xs:gap-8 2xs:px-4 flex h-full w-full flex-col py-20 xs:gap-8 xs:px-4 sm:gap-10 sm:px-4 md:order-2 md:px-10 lg:order-2 lg:px-10 xl:order-1 xl:pl-[118px] xl:pr-0`}
      >
        <h6
          className={`font-bold capitalize xs:text-[28px] md:text-[32px] xl:text-[32px]/[48px] 3xl:text-[32px]/[48px]`}
        >
          Checkout
        </h6>

        <div className='2xs:h-[48px] relative flex w-full items-center rounded-lg bg-greyMain xs:h-[48px] sm:h-[60px]'>
          <input
            placeholder='Enter ref code'
            value={refCode}
            onChange={(e) => {
              const value = e.target.value
              setRefCode(value)
            }}
            className='h-full w-[90%] appearance-none bg-transparent px-5'
          />
          <button
            onClick={async () => {
              const string = await navigator.clipboard.readText()
              setRefCode(string)
            }}
          >
            <CopyIcon />
          </button>
        </div>

        <AnimationPage isVisble={step === 1} className={step === 1 ? 'block' : 'hidden'} homePage={true}>
          <FormProvider {...shippingForm}>
            <ShippingInfoFrom />
          </FormProvider>
        </AnimationPage>
        <AnimationPage isVisble={step === 2} className={step === 2 ? 'block' : 'hidden'}>
          <FormProvider {...paymentForm}>
            <PaymentFrom />
          </FormProvider>
        </AnimationPage>
      </section>

      {/* list item checkout */}
      <section className='2xs:hidden top-0 min-w-[536px] flex-col gap-[30px] bg-greyMain px-10 py-10 pt-[80px] xs:hidden sm:hidden md:flex md:h-fit md:w-full lg:flex lg:h-fit lg:w-full xl:sticky xl:order-2 xl:min-h-[100vh] xl:w-fit'>
        <h6 className='text-[20px]/[30px] font-bold capitalize'>Preview</h6>
        <div className='mb-[30px] flex flex-1 flex-col gap-6'>
          {listProducts.map((item, index) => (
            <ItemCheckout key={`${item.product.id}-${index}`} />
          ))}
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex w-full items-center justify-between'>
            <p
              className={`text-[#818EA1] xs:text-[16px]/[24px] md:text-[16px]/[24px] xl:text-[16px]/[24px] 3xl:text-[16px]/[24px]`}
            >
              Subtotal
            </p>
            <p className='2xs:text-[16px] font-customSemiBold leading-none xs:text-[16px] sm:text-[20px]'>
              $
              {listProducts.length > 0
                ? listProducts
                    .reduce((total: number, currentProduct: IProduct) => {
                      return total + Number(currentProduct.variants?.[0]?.priceOptions.price) / 1000000
                    }, 0)
                    .toFixed(2)
                : (0).toFixed(2)}
            </p>
          </div>
          <div className='flex w-full items-center justify-between'>
            <p
              className={`text-[#818EA1] xs:text-[16px]/[24px] md:text-[16px]/[24px] xl:text-[16px]/[24px] 3xl:text-[16px]/[24px]`}
            >
              Shipping
            </p>
            <p className='2xs:text-[16px] font-customSemiBold leading-none xs:text-[16px] sm:text-[20px]'>
              -${(5).toFixed(2)}
            </p>
          </div>

          <div className='flex items-center justify-between'>
            <p className='font-customMedium text-[20px]'>Total</p>
            <p className='font-customSemiBold text-[32px] leading-none'>
              $
              {listProducts.length > 0
                ? (
                    listProducts.reduce((total: number, currentProduct: IProduct) => {
                      return total + Number(currentProduct.variants?.[0]?.priceOptions.price) / 1000000
                    }, 0) + 5
                  ).toFixed(2)
                : (0).toFixed(2)}
            </p>
          </div>

          <button
            onClick={handleContinue}
            className='flex w-full items-center justify-center gap-4 rounded-[8px] bg-ln-text-product p-[18px] transition duration-200 ease-in-out hover:scale-105'
          >
            <p className='font-semibold text-white xs:text-[18px]/[20px] md:text-[26px]/[30px] xl:text-[20px]/[20px]'>
              Continue
            </p>
          </button>
        </div>
      </section>
    </div>
  )
})

export default Checkout
