import classNames from 'classnames'
import { memo, ReactNode } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface RadioGroupFieldProps {
  name: string
  rules?: Partial<Record<string, unknown>>
  disabled?: boolean
  required?: boolean
  className?: string | null
  helperText?: string
  defaultValue?: string
  options: { value: number | string; label: ReactNode }[]
}

const RadioGroupField = memo(
  ({
    name,
    rules = {},
    disabled = false,
    required = false,
    className = null,
    helperText,
    defaultValue = '',
    options
  }: RadioGroupFieldProps) => {
    const { control } = useFormContext()

    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => {
          return (
            <div className={`radio-options flex w-full flex-col gap-1`}>
              <div className='2xs:flex-col 2xs:gap-3 flex w-full items-center xs:flex-row xs:gap-4 sm:gap-5'>
                {options.map((option, i) => (
                  <div
                    className={classNames(
                      field.value === option.value ? 'bg-ln-box-sub-card-border' : 'bg-[#E1E6EF]',
                      'w-full rounded-[8px] p-[1px]'
                    )}
                  >
                    <div className='rounded-[7px] bg-white'>
                      <div
                        key={i}
                        onClick={() => field.onChange(option.value)}
                        className={classNames(
                          className,
                          field.value === option.value ? 'bg-ln-box-sub-card' : 'bg-transparent',
                          `relative flex w-full items-center justify-between xs:h-[88px] xs:rounded-none xs:px-5 sm:rounded-[7px] md:h-[88px] md:px-5`
                        )}
                      >
                        {option.label}
                        <div className='absolute right-[10px] top-[10px]'>
                          <div className='relative h-5'>
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
                              checked={field.value === option.value}
                              className='checked:after:content-[" "] hover:shadow-avatar size-5 shrink-0 appearance-none rounded-full bg-transparent transition-colors duration-200 ease-in-out checked:border-none checked:bg-[#D814F2] checked:after:absolute checked:after:left-[7px] checked:after:top-[4px] checked:after:block checked:after:h-[10px] checked:after:w-[5.2px] checked:after:rotate-[45deg] checked:after:border-b-[2px] checked:after:border-r-[2px] checked:after:border-solid checked:after:border-white focus:outline-none'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {helperText && (
                <div className='h-[18px]'>
                  <p className='2xs:text-[13px] mt-2 text-gray-400 xs:text-[13px] sm:text-[14px]'>{helperText}</p>
                </div>
              )}
              <div className='h-[18px]'>
                <p className='2xs:text-[13px] mt-2 text-red-500 xs:text-[13px] sm:text-[14px]'>
                  {fieldState.error && fieldState.error.message}
                </p>
              </div>
            </div>
          )
        }}
      />
    )
  }
)

export default RadioGroupField
