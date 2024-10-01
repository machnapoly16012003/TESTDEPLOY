import classNames from 'classnames'
import { Dispatch, forwardRef, memo, SetStateAction, useEffect, useImperativeHandle, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { IoCardOutline, IoWalletOutline } from 'react-icons/io5'
import { InputField, RadioGroupField } from '~/components/shared/form'
import { ArrowLeftIcon, CopyIcon } from '~/components/shared/icon'

export interface IPaymentFromRef {
  autoPayment: boolean
  setAutoPayment: Dispatch<SetStateAction<boolean>>
}

interface IPaymentFromProps {
  onBack: () => void
  errMessage: string
  setErrMessage: Dispatch<SetStateAction<string>>
}

const PaymentFrom = memo(
  forwardRef<IPaymentFromRef, IPaymentFromProps>(({ onBack, errMessage, setErrMessage }, ref) => {
    const { watch, setValue, clearErrors } = useFormContext()

    const [autoPayment, setAutoPayment] = useState<boolean>(false)

    const paymentMethod = watch('paymentMethod')

    useEffect(() => {
      if (paymentMethod === 'wallet-address') {
        setValue('paymentMethod', paymentMethod),
          setValue('cardNumber', '1234123412341234'),
          setValue('expirationDate', '12/33'),
          setValue('cvv', '123'),
          setValue('nameOnCard', 'set'),
          setValue('walletAddress', '')
      } else {
        setValue('paymentMethod', paymentMethod),
          setValue('cardNumber', ''),
          setValue('expirationDate', ''),
          setValue('cvv', ''),
          setValue('nameOnCard', ''),
          setValue('walletAddress', '1234123412341234')
      }
    }, [paymentMethod])

    useImperativeHandle(ref, () => ({
      autoPayment,
      setAutoPayment
    }))

    return (
      <div className='relative mt-5 flex h-full flex-col' style={{ minHeight: 'inherit' }}>
        <h3 className='text-[20px]/[30px] font-semibold'>Payment Method</h3>

        <div className='mt-6 flex-1'>
          <RadioGroupField
            name='paymentMethod'
            options={[
              {
                value: 'credit-card',
                label: (
                  <div className='xs:space-y-2 md:space-y-1'>
                    <IoCardOutline className='size-6' />
                    <p className='text-[16px]/[24px] font-semibold'>Credit Card</p>
                  </div>
                )
              },
              {
                value: 'wallet-address',
                label: (
                  <div className='xs:space-y-2 md:space-y-1'>
                    <IoWalletOutline className='size-6' />
                    <p className='text-[16px]/[24px] font-semibold'>Wallet Address</p>
                  </div>
                )
              }
            ]}
          />

          <div className='space-y-2 xs:mt-4 md:mt-8'>
            {paymentMethod === 'credit-card' ? (
              <>
                <InputField
                  fullWidth
                  required
                  name='cardNumber'
                  label='Card Number'
                  placeholder='Enter your card number'
                />
                <InputField
                  fullWidth
                  required
                  name='nameOnCard'
                  label='Name On Card'
                  placeholder='Enter your name'
                  rightIcon={
                    <button
                      className='mt-2'
                      onClick={async () => {
                        const string = await navigator.clipboard.readText()
                        setValue('nameOnCard', string)
                        clearErrors('nameOnCard')
                      }}
                    >
                      <CopyIcon color='#818EA1' className='xs:size-4 md:size-6' />
                    </button>
                  }
                />
                <div className='flex w-full items-start xs:gap-2 sm:gap-5'>
                  <InputField
                    fullWidth
                    required
                    name='expirationDate'
                    label='Expiration Date'
                    placeholder='mm/yy'
                    rightIcon={
                      <button
                        className='mt-2'
                        onClick={async () => {
                          const string = await navigator.clipboard.readText()
                          setValue('expirationDate', string)
                          clearErrors('expirationDate')
                        }}
                      >
                        <CopyIcon color='#818EA1' className='xs:size-4 md:size-6' />
                      </button>
                    }
                  />
                  <InputField
                    fullWidth
                    required
                    name='cvv'
                    label='CVV'
                    placeholder='XXX'
                    rightIcon={
                      <button
                        className='mt-2'
                        onClick={async () => {
                          const string = await navigator.clipboard.readText()
                          setValue('cvv', string)
                          clearErrors('cvv')
                        }}
                      >
                        <CopyIcon color='#818EA1' className='xs:size-4 md:size-6' />
                      </button>
                    }
                  />
                </div>
              </>
            ) : (
              <>
                <InputField
                  fullWidth
                  required
                  name='walletAddress'
                  label='Wallet address'
                  placeholder='Enter wallet address'
                  rightIcon={
                    <button
                      className='mt-2'
                      onClick={async () => {
                        const string = await navigator.clipboard.readText()
                        setValue('walletAddress', string)
                        clearErrors('walletAddress')
                      }}
                    >
                      <CopyIcon color='#818EA1' className='xs:size-4 md:size-6' />
                    </button>
                  }
                />
                <InputField fullWidth name='nameOnWallet' label='Name on wallet' placeholder='Enter full name' />
              </>
            )}
          </div>

          <div className='mt-2 flex items-center gap-2'>
            <div className='relative h-5'>
              <input
                readOnly
                type='checkbox'
                checked={autoPayment}
                onClick={() => {
                  setAutoPayment(!autoPayment)
                  if (errMessage !== '') {
                    setErrMessage('')
                  }
                }}
                className='checked:after:content-[" "] hover:shadow-avatar size-5 shrink-0 appearance-none rounded-[5px] border-[1px] border-solid border-[#0084FF] bg-[#0084FF]/[.08] transition-colors duration-200 ease-in-out checked:after:absolute checked:after:left-[7.5px] checked:after:top-[4.45px] checked:after:block checked:after:h-[10px] checked:after:w-[5.2px] checked:after:rotate-[45deg] checked:after:border-b-[2px] checked:after:border-r-[2px] checked:after:border-solid checked:after:border-[#0084FF] focus:outline-none'
              />
            </div>
            <p className='text-[14px]/[21px] font-medium'>Turn On Auto-Payment for Subscriptions</p>
          </div>
          <p className='ml-[26px] mt-1 h-[18px] text-[14px] text-red-500'>{errMessage && errMessage}</p>
        </div>

        <button
          onClick={onBack}
          className={classNames(
            paymentMethod === 'credit-card' ? 'mt-[90px]' : 'mt-[200px]',
            'items-center gap-4 xs:hidden sm:hidden md:hidden lg:hidden xl:flex'
          )}
        >
          <ArrowLeftIcon color='#818EA170' />
          <p className='text-[16px]/[16px] text-[#818EA1]'>Previous step</p>
        </button>
      </div>
    )
  })
)

export default PaymentFrom
