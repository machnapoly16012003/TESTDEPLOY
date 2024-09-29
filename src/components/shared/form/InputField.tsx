import classNames from 'classnames'
import { memo, ReactNode } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface InputFieldProps {
  name: string
  label?: string
  type?: string
  rules?: Partial<Record<string, unknown>>
  defaultValue?: string
  disabled?: boolean
  placeholder?: string
  width?: string
  gap?: string
  fullWidth?: boolean
  className?: string | null
  classNameLabel?: string | null
  helperText?: string
  required?: boolean
  rightIcon?: ReactNode
  variant?: 'outline' | 'container' | 'outline-green'
  size?: 'small' | 'medium'
}

const InputField = memo(
  ({
    name,
    label = '',
    type = 'text',
    rules = {},
    defaultValue = '',
    placeholder = '',
    width,
    gap,
    disabled = false,
    fullWidth = false,
    className = null,
    classNameLabel = null,
    required = false,
    helperText,
    rightIcon,
    variant = 'outline',
    size = 'medium'
  }: InputFieldProps) => {
    const { control } = useFormContext()

    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => {
          return (
            <div className={`flex flex-col gap-1 ${fullWidth ? 'w-full' : 'w-[350px]'} ${width ? width : ''}`}>
              <div className={`flex flex-col ${gap ? gap : 'gap-2'}`}>
                <label
                  htmlFor={name}
                  className={classNames(
                    classNameLabel,
                    disabled ? 'text-black/[.32]' : 'text-black',
                    `text-[16px]/[24px] font-semibold capitalize`
                  )}
                >
                  {label} {required && <span className='text-[#E23710]'>*</span>}
                </label>
                <div className='relative'>
                  <input
                    {...field}
                    id={name}
                    type={type}
                    required={required}
                    disabled={disabled}
                    placeholder={placeholder}
                    className={classNames(
                      className,
                      `w-full rounded-[8px] border border-solid px-4 transition-colors duration-300 ease-in-out xs:h-11 sm:h-12`,
                      disabled
                        ? 'bg-black/[.03]'
                        : variant === 'outline'
                          ? 'border-[#DBDDE3] pb-[2px] hover:ring-[0.8px] hover:ring-black/[.2] focus:ring-[0.8px] focus:ring-black/[.2]'
                          : 'border-greyLight bg-greyLight hover:bg-black/[.05] focus:bg-black/[.05]'
                    )}
                    onChange={(e) => {
                      let value = e.target.value

                      if (name === 'cvv') {
                        value = value.replace(/\D/g, '')
                        if (value.length > 3) {
                          value = value.slice(0, 3)
                        }
                        field.onChange(value)
                      } else {
                        field.onChange(value)
                      }
                    }}
                  />
                  <div
                    className={`absolute top-1/2 ${size === 'small' ? 'right-[20px]' : 'right-4'} -translate-y-1/2 transform`}
                  >
                    {rightIcon}
                  </div>
                </div>
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
          )
        }}
      />
    )
  }
)

export default InputField
