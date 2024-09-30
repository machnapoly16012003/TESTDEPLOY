import { Dispatch, forwardRef, memo, SetStateAction, useImperativeHandle, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputField, SelectField, TextareaField } from '~/components/shared/form'
import useCountry from '~/hooks/useCountry'

export interface IShippingInfoFromRef {
  accepted: boolean
  setAccepted: Dispatch<SetStateAction<boolean>>
}

interface IShippingInfoProps {
  errMessage: string
  setErrMessage: Dispatch<SetStateAction<string>>
}

const ShippingInfoFrom = memo(
  forwardRef<IShippingInfoFromRef, IShippingInfoProps>(({ errMessage, setErrMessage }, ref) => {
    const [accepted, setAccepted] = useState<boolean>(false)

    const { watch } = useFormContext()

    const country = watch('country')
    const stateOrProvince = watch('stateOrProvince')

    const { countriesOptions, provincesOptions, listCity, citiesOptions } = useCountry({
      country,
      stateOrProvince
    })

    useImperativeHandle(ref, () => ({
      accepted,
      setAccepted
    }))

    return (
      <div className='mt-5'>
        <h3 className='text-[20px]/[30px] font-semibold'>Shipping Information</h3>

        <div className='mt-4 flex flex-col gap-2 xs:mb-[18px] md:mb-8'>
          <div className='flex w-full items-start xs:flex-col xs:gap-2 sm:flex-row sm:gap-5'>
            <InputField fullWidth required name={'firstName'} label='First Name' placeholder='Enter your first name' />
            <InputField fullWidth required name={'lastName'} label='Last Name' placeholder='Enter your last name' />
          </div>
          <div className='flex w-full items-start xs:flex-col xs:gap-2 sm:flex-row sm:gap-5'>
            <InputField fullWidth required name='email' label='Email' placeholder='example@gmail.com' />
            <div className='flex w-full items-center gap-2'>
              <SelectField
                fullWidth
                required
                options={countriesOptions}
                label='Country'
                name={'country'}
                placeholder='Select'
              />
              <div className='w-full xs:flex md:hidden'>
                <SelectField
                  fullWidth
                  required
                  options={provincesOptions}
                  name={'stateOrProvince'}
                  label='State/Province'
                  disabled={country === ''}
                  placeholder='Select'
                />
              </div>
            </div>
          </div>
          <div className='flex w-full items-start xs:gap-3 sm:gap-5'>
            <div className='w-full xs:hidden md:flex'>
              <SelectField
                fullWidth
                required
                options={provincesOptions}
                name={'stateOrProvince'}
                label='State/Province'
                disabled={country === ''}
                placeholder='Select'
              />
            </div>
            <div className='w-full xs:flex md:hidden'>
              <InputField fullWidth required name={'postalCode'} label='ZIP code' placeholder='Enter ZIP code' />
            </div>
            <SelectField
              fullWidth
              options={citiesOptions}
              name={'city'}
              label='City'
              placeholder='Select'
              disabled={country === '' || stateOrProvince === '' || listCity?.length === 0}
            />
          </div>
          <div className='flex w-full items-start xs:flex-row xs:gap-2 sm:flex-row sm:gap-5'>
            <div className='w-full xs:hidden md:flex'>
              <InputField fullWidth required name={'postalCode'} label='ZIP code' placeholder='Enter ZIP code' />
            </div>
            <InputField fullWidth required name={'phone'} label='Phone Number' placeholder='Enter your phone number' />
          </div>
          <TextareaField
            fullWidth
            required
            name={'addressDetail'}
            label='detail address '
            placeholder='Enter your address'
          />
        </div>

        <div className='flex items-center gap-2'>
          <div className='relative h-5'>
            <input
              readOnly
              type='checkbox'
              checked={accepted}
              onClick={() => {
                setAccepted(!accepted)
                if (errMessage !== '') {
                  setErrMessage('')
                }
              }}
              className='checked:after:content-[" "] hover:shadow-avatar size-5 shrink-0 appearance-none rounded-[5px] border-[1px] border-solid border-[#0084FF] bg-[#0084FF]/[.08] transition-colors duration-200 ease-in-out checked:after:absolute checked:after:left-[7.5px] checked:after:top-[4.45px] checked:after:block checked:after:h-[10px] checked:after:w-[5.2px] checked:after:rotate-[45deg] checked:after:border-b-[2px] checked:after:border-r-[2px] checked:after:border-solid checked:after:border-[#0084FF] focus:outline-none'
            />
          </div>
          <p className='text-[14px]/[21px] font-medium xs:flex md:hidden'>Agree to Terms</p>
          <p className='text-[14px]/[21px] font-medium xs:hidden md:flex'>
            I have read and agree to the <a className='text-[#0084FF] underline'>Terms and Conditions.</a>
          </p>
        </div>
        <p className='ml-[26px] mt-1 h-[18px] text-[14px] text-red-500'>{errMessage && errMessage}</p>
      </div>
    )
  })
)

export default ShippingInfoFrom
