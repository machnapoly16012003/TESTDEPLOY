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
            <div className={`flex w-full flex-col gap-1`}>
              <div className='2xs:flex-col 2xs:gap-3 flex w-full items-center xs:flex-row xs:gap-4 sm:gap-5'>
                {options.map((option, i) => (
                  <div
                    key={i}
                    onClick={() => field.onChange(option.value)}
                    className={`2xs:h-[50px] 2xs:px-3 flex w-full items-center justify-between border-[1px] border-solid border-blackMain/[.12] xs:h-[50px] xs:rounded-none xs:px-3 sm:h-[96px] sm:rounded-xl sm:px-6 ${className}`}
                  >
                    {option.label}
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
                      className='checked:after:content-[" "] 2xs:size-[16px] 2xs:checked:after:size-[10px] flex shrink-0 cursor-pointer appearance-none items-center justify-center rounded-full border border-solid border-blackMain transition-all duration-300 ease-linear checked:bg-transparent checked:after:rounded-full checked:after:bg-blackMain hover:scale-105 xs:size-[14px] xs:checked:after:size-[8px] sm:size-8 sm:checked:after:size-4'
                    />
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
