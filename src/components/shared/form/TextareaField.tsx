import classNames from 'classnames'
import { memo } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface TextareaFieldProps {
  name: string
  label?: string
  rows?: number
  rules?: Partial<Record<string, unknown>>
  defaultValue?: string
  disabled?: boolean
  placeholder?: string
  width?: string
  fullWidth?: boolean
  className?: string | null
  helperText?: string
  classNameLabel?: string
  required?: boolean
  variant?: 'outline' | 'container'
}

const TextareaField = memo(
  ({
    name,
    label = '',
    rows = 4,
    rules = {},
    defaultValue = '',
    placeholder = '',
    width,
    disabled = false,
    fullWidth = false,
    className = null,
    required = false,
    variant = 'outline',
    helperText,
    classNameLabel
  }: TextareaFieldProps) => {
    const { control } = useFormContext()

    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => (
          <div className={`flex flex-col gap-1 ${fullWidth ? 'w-full' : 'w-[350px]'} ${width ? width : ''}`}>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor={name}
                className={classNames(
                  classNameLabel,
                  disabled ? 'text-black/[.32]' : 'text-black',
                  `font-semibold capitalize xs:text-[14px]/[21px] md:text-[16px]/[24px]`
                )}
              >
                {label} {required && <span className='text-[#E23710]'>*</span>}
              </label>
              <textarea
                {...field}
                id={name}
                rows={rows}
                required={required}
                disabled={disabled}
                placeholder={placeholder}
                className={classNames(
                  className,
                  `w-full rounded-[8px] border border-solid px-4 py-2 transition-colors duration-300 ease-in-out`,
                  disabled
                    ? 'bg-black/[.03]'
                    : variant === 'outline'
                      ? 'border-[#DBDDE3] pb-[2px] hover:ring-[0.8px] hover:ring-black/[.2] focus:ring-[0.8px] focus:ring-black/[.2]'
                      : 'border-greyLight bg-greyLight hover:bg-black/[.05] focus:bg-black/[.05]'
                )}
                onChange={(e) => {
                  const value = e.target.value.trimStart()
                  field.onChange(value)
                }}
              />
            </div>
            {helperText && (
              <div className='min-h-[18px]'>
                <p className='2xs:text-[13px] ml-2 text-gray-400 xs:text-[13px] sm:text-[14px]'>{helperText}</p>
              </div>
            )}
            <div className='min-h-[18px]'>
              <p className='2xs:text-[13px] ml-2 text-red-500 xs:text-[13px] sm:text-[14px]'>
                {fieldState.error && fieldState.error.message}
              </p>
            </div>
          </div>
        )}
      />
    )
  }
)

export default TextareaField
