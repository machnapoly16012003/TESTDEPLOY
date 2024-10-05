import { useRef } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { EffectCreative, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { CardInfo } from '~/@types/models'
import images from '~/assets'
import { formatLocaleString } from '~/utils/format'

interface RadioWalletGroupFieldProps {
  name: string
  rules?: Partial<Record<string, unknown>>
  disabled?: boolean
  required?: boolean
  className?: string | null
  helperText?: string
  defaultValue?: string
  options: CardInfo[]
}

function RadioWalletGroupField({
  name,
  rules = {},
  disabled = false,
  required = false,
  helperText,
  defaultValue = '',
  options
}: RadioWalletGroupFieldProps) {
  const swiperWalletRef = useRef<any>(null)
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  const { control } = useFormContext()

  const listBgCards = [images.bg.bg_card_1, images.bg.bg_card_2, images.bg.bg_card_3]

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => {
        return (
          <div className={`flex flex-col gap-1 xs:gap-0 xs:pl-0 md:pl-[10px]`}>
            <div className='flex flex-1 items-center justify-center gap-3'>
              <div className='flex h-[243px] min-w-[278px] overflow-hidden xs:w-full'>
                <Swiper
                  ref={swiperWalletRef}
                  direction='vertical'
                  loop
                  grabCursor
                  effect={'creative'}
                  slidesPerView={1}
                  initialSlide={0}
                  freeMode={true}
                  creativeEffect={{
                    perspective: true,
                    limitProgress: 3,
                    prev: {
                      translate: [0, '26px', 0],
                      rotate: [0, 0, 0],
                      scale: 0.9
                    },
                    next: {
                      translate: [0, '-30px', 0],
                      rotate: [0, 0, 0],
                      scale: 0.9
                    }
                  }}
                  modules={[EffectCreative, Navigation]}
                  navigation={{
                    prevEl: prevRef.current ? prevRef.current : undefined,
                    nextEl: nextRef.current ? nextRef.current : undefined
                  }}
                  className='pt-[39px]'
                >
                  {options.map((option, index) => {
                    const bgCard = listBgCards[index % listBgCards.length]
                    return (
                      <SwiperSlide key={`${option.address}-${index}`}>
                        <div
                          onClick={() => field.onChange(option.address)}
                          className={`relative overflow-hidden xs:h-[160px] xs:w-full xs:rounded-[15.16px] sm:h-[166px] sm:w-[278px] sm:rounded-[15px]`}
                        >
                          <img
                            src={bgCard}
                            alt='line-group'
                            className='absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transform'
                          />
                          <div
                            className={`absolute inset-0 z-10 flex h-full flex-col justify-between text-white xs:p-5 sm:px-4 sm:py-5`}
                          >
                            <div className='text-left'>
                              <p className='text-[14px]/[16.8px] font-semibold uppercase'>{option.name}</p>
                              <p className='mt-[10px] font-customMedium text-[12.5px]/[14px] text-white/[64%]'>
                                {option.address?.slice(0, 4)}...{option.address?.slice(-4)}
                              </p>
                            </div>
                            <p className='text-left text-[24px]/[26px] font-semibold text-white'>
                              ${formatLocaleString(Number(option.balance) / 10 ** 6)}
                            </p>
                          </div>

                          <input
                            {...field}
                            type='radio'
                            required={required}
                            disabled={disabled}
                            value={option.address}
                            onChange={(e) => {
                              const value = e.target.value.trimStart()
                              field.onChange(value)
                            }}
                            checked={field.value === option.address}
                            className='checked:after:content-[" "] hover:shadow-avatar absolute right-[10px] top-[10px] z-20 flex size-5 cursor-pointer appearance-none items-center justify-center rounded-full border-[1.5px] border-solid transition-all duration-300 ease-linear checked:z-10 checked:bg-[#2F373C] checked:after:absolute checked:after:left-[6.9px] checked:after:top-[3px] checked:after:block checked:after:h-[10px] checked:after:w-[5px] checked:after:rotate-[45deg] checked:after:border-b-[2px] checked:after:border-r-[2px] checked:after:border-solid checked:after:border-white'
                          />
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </div>
              <div className='flex flex-col gap-3 xs:hidden'>
                <button ref={prevRef} onClick={() => swiperWalletRef.current?.swiper?.slidePrev()}>
                  <img src={images.icon.arrow_top} alt='arrow-left' className='size-5' />
                </button>
                <button ref={nextRef} onClick={() => swiperWalletRef.current?.swiper?.slideNext()}>
                  <img src={images.icon.arrow_bot} alt='arrow-right' className='size-5' />
                </button>
              </div>
            </div>
            {helperText && (
              <div className='h-[18px]'>
                <p className='mt-2 text-[14px] text-gray-400'>{helperText}</p>
              </div>
            )}
            <div className='h-[18px]'>
              <p className='mt-2 text-[14px] text-red-500'>{fieldState.error && fieldState.error.message}</p>
            </div>
          </div>
        )
      }}
    />
  )
}

export default RadioWalletGroupField
