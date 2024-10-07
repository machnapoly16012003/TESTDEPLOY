import classNames from 'classnames'
import { Dispatch, forwardRef, memo, SetStateAction, useEffect, useImperativeHandle, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { IoCardOutline, IoWalletOutline } from 'react-icons/io5'
import images from '~/assets'
import { listTypeCards } from '~/assets/mock/payment'
import { InputField, RadioGroupField } from '~/components/shared/form'
import { CopyIcon } from '~/components/shared/icon'
import useDialog from '~/hooks/useDialog'
import SelectCardPaymentDialog from './SelectCardPaymentDialog'

export interface IPaymentFromRef {
  autoPayment: boolean
  setAutoPayment: Dispatch<SetStateAction<boolean>>
}

interface IPaymentFromProps {
  errMessage: string
  setErrMessage: Dispatch<SetStateAction<string>>
  onConfirm: () => void
}

const PaymentFrom = memo(
  forwardRef<IPaymentFromRef, IPaymentFromProps>(({ errMessage, setErrMessage, onConfirm }, ref) => {
    const { watch, setValue, clearErrors } = useFormContext()

    const { isOpen, setIsOpen, handleOpen } = useDialog()

    const [autoPayment, setAutoPayment] = useState<boolean>(false)
    const [cardType, setCardType] = useState<number>(0)

    const paymentMethod = watch('paymentMethod')
    const walletAddress = watch('walletAddress')

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
      <>
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

            <div className='space-y-2 xs:mt-4 xs:min-h-[300px] md:mt-8 md:min-h-[322px]'>
              {paymentMethod === 'credit-card' ? (
                <>
                  <InputField
                    fullWidth
                    required
                    name='cardNumber'
                    label='Card Number'
                    placeholder='Enter your card number'
                    rightIcon={
                      <button
                        className='mt-2'
                        onClick={async () => {
                          const string = await navigator.clipboard.readText()
                          setValue('cardNumber', string)
                          clearErrors('cardNumber')
                        }}
                      >
                        <CopyIcon color='#818EA1' className='xs:size-4 md:size-6' />
                      </button>
                    }
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
                <div className='grid gap-5 xs:grid-cols-1 md:grid-cols-2'>
                  <div className='col-span-1 flex flex-col gap-5'>
                    {listTypeCards.map((card) => {
                      return (
                        <div
                          key={card.id}
                          onClick={() => {
                            handleOpen()
                            setCardType(card.id)
                          }}
                          className={classNames(
                            cardType === 0 ? 'opacity-100' : cardType === card.id ? 'opacity-100' : 'opacity-45',
                            'flex h-[56px] items-center justify-between rounded-[10px] bg-white/[.75] pl-3 pr-3 backdrop-blur-[30px] transition duration-200 ease-in-out'
                          )}
                          style={{
                            boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.10), 0px 0px 106.667px 0px rgba(0, 0, 0, 0.05)'
                          }}
                        >
                          <div className='flex items-center gap-2'>
                            <div
                              style={{
                                boxShadow:
                                  '0px 0px 8px 0px rgba(0, 0, 0, 0.10), 0px 0px 106.667px 0px rgba(0, 0, 0, 0.05)'
                              }}
                              className='flex size-8 items-center justify-center rounded-[6px] bg-white/[.85] backdrop-blur-[54px]'
                            >
                              <img
                                src={card.icon}
                                alt={card.title}
                                className='size-[26px] rounded-[8px] object-cover'
                              />
                            </div>

                            <p className='text-[16px]/[21px] font-bold'>{card.title}</p>
                          </div>

                          <input
                            type='radio'
                            value={card.id}
                            checked={cardType === card.id}
                            onChange={() => setCardType(card.id)}
                            className='checked:after:content-[" "] 2xs:size-[16px] 2xs:checked:after:size-[10px] flex shrink-0 cursor-pointer appearance-none items-center justify-center rounded-full border border-solid border-blackMain transition-all duration-300 ease-linear checked:bg-transparent checked:after:rounded-full checked:after:bg-blackMain hover:scale-105 xs:size-[20px] xs:checked:after:size-[10px] sm:size-6 sm:checked:after:size-3'
                          />
                        </div>
                      )
                    })}
                  </div>
                  <div className='col-span-1 flex flex-1 items-center xs:flex-col xs:justify-center xs:gap-3 md:flex-row md:justify-center md:gap-[35px] lg:justify-center xl:justify-end 3xl:justify-center'>
                    <p className='text-[18px]/[22px] font-bold'>OR</p>
                    <div className='flex flex-col items-center gap-4'>
                      <div className='space-y-2 text-center'>
                        <p className='text-[14px]/[16.94px] font-medium'>Scan QR to Pay</p>
                        <p className='text-[12px]/[14.52px]'>Sufficient wallet balance required</p>
                      </div>
                      <div className='rounded-xl bg-white p-2 shadow-s-30 xs:size-[230px] md:size-[230px] xl:size-[230px]'>
                        <img src={images.image.QR} alt='QR' className='size-full rounded-[7.8px]' />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className={classNames(
                paymentMethod === 'wallet-address' ? 'mt-0 xs:mt-5' : 'xs:mt-5 md:mt-8',
                'flex items-center gap-2'
              )}
            >
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
              <p className='text-[14px]/[21px] font-medium'>
                Auto-Payment <a className='text-[#0084FF] underline'>Terms and Conditions.</a>
              </p>
            </div>
            <p className='ml-[26px] mt-1 h-[18px] text-[14px] text-red-500'>{errMessage && errMessage}</p>

            {paymentMethod === 'wallet-address' && (
              <button
                disabled={walletAddress === ''}
                className={classNames(
                  walletAddress === '' && 'opacity-50',
                  'z-10 mt-2 flex w-[105px] items-center justify-center gap-4 rounded-[8px] bg-ln-text-product p-[18px] py-3 transition duration-300 ease-in-out hover:scale-[101%] hover:bg-ln-text-product-left'
                )}
              >
                <p className='font-semibold text-white xs:text-[16px]/[20px] md:text-[16px]/[20px] xl:text-[16px]/[20px]'>
                  Connect
                </p>
              </button>
            )}
          </div>
        </div>

        <SelectCardPaymentDialog open={isOpen} setOpen={setIsOpen} onConfirm={onConfirm} />
      </>
    )
  })
)

export default PaymentFrom
