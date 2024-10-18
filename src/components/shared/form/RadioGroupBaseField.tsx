import classNames from 'classnames'
import { memo, ReactNode } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface RadioGroupBaseFieldProps {
  name: string
  gap?: string
  label?: string
  rules?: Partial<Record<string, unknown>>
  disabled?: boolean
  required?: boolean
  className?: string | null
  classNameLabel?: string | null
  helperText?: string
  defaultValue?: string
  options: { value: number | string; label: ReactNode }[]
}

const RadioGroupBaseField = memo(
  ({
    gap,
    name,
    label,
    rules = {},
    disabled = false,
    required = false,
    className = null,
    classNameLabel = null,
    helperText,
    defaultValue = '',
    options
  }: RadioGroupBaseFieldProps) => {
    const { control } = useFormContext()

    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => {
          return (
            <div className={`flex w-full items-start gap-1 xs:flex-col sm:flex-row`}>
              <div className={`flex flex-col ${gap ? gap : 'xs:gap-2 sm:gap-1'}`}>
                {label && (
                  <label
                    htmlFor={name}
                    className={`font-customSemiBold capitalize xs:text-[18px] sm:text-[20px]/[18px] ${disabled && 'text-black-main/[.32]'} ${classNameLabel}`}
                  >
                    {label} {required && <span className='text-red-main'>*</span>}
                  </label>
                )}
                <div className='flex w-full xs:flex-row xs:items-start xs:gap-4 sm:flex-row sm:items-center sm:gap-10 md:gap-5 lg:gap-10'>
                  {options.map((option, i) => {
                    return (
                      <div key={i} className={`flex items-center gap-3 ${className}`}>
                        {option.label}:
                        <div className='relative'>
                          <input
                            {...field}
                            id={name}
                            type='radio'
                            required={required}
                            disabled={disabled}
                            value={option.value}
                            onChange={(e) => {
                              const value = e.target.value
                              field.onChange(value)
                            }}
                            checked={field.value === option.value || +field.value === option.value}
                            className={classNames(
                              (field.value === option.value || +field.value === option.value) && 'btn-explorer-now',
                              'checked:after:content-[" "] hover:shadow-avatar size-7 shrink-0 cursor-pointer appearance-none rounded-[6px] border-[1px] border-solid border-blackDark/[.22] bg-transparent transition-colors duration-300 ease-in-out checked:border-[0px] checked:after:absolute checked:after:left-[10px] checked:after:top-[5px] checked:after:block checked:after:h-[14px] checked:after:w-[7px] checked:after:rotate-[45deg] checked:after:border-b-[2px] checked:after:border-r-[2px] checked:after:border-solid checked:after:border-white focus:outline-none'
                            )}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>

                {helperText && (
                  <div className='min-h-[18px]'>
                    <p className='2xs:text-[13px] ml-2 text-gray-400 xs:text-[13px] sm:text-[14px]'>{helperText}</p>
                  </div>
                )}
                <div className='min-h-[18px]'>
                  <p className='2xs:text-[13px] ml-2 text-left text-red-500 xs:text-[13px] sm:text-[14px]'>
                    {fieldState.error && fieldState.error.message}
                  </p>
                </div>
              </div>
            </div>
          )
        }}
      />
    )
  }
)

export default RadioGroupBaseField
