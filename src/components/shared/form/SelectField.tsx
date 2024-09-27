import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import clsx from 'clsx'
import { memo, useEffect, useMemo, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { OptionSelect } from '~/@types/common'
import images from '~/assets'
import { CheckIcon } from '../icons'

interface SelectFieldProps {
  name: string
  label?: string
  rules?: Record<string, unknown>
  options: OptionSelect[]
  width?: string
  disabled?: boolean
  fullWidth?: boolean
  className?: string | null
  classNameLabel?: string | null
  required?: boolean
  helperText?: string
  placeholder?: string
  value?: OptionSelect
  variant?: 'outline' | 'container'
  size?: 'small' | 'medium'
}

const SelectField = memo(
  ({
    name,
    label,
    rules = {},
    options = [],
    width,
    disabled = false,
    fullWidth = false,
    helperText,
    placeholder,
    value,
    classNameLabel = null,
    variant = 'outline',
    size = 'medium'
  }: SelectFieldProps) => {
    const { control } = useFormContext()

    const [query, setQuery] = useState<string>('')
    const [selected, setSelected] = useState<OptionSelect>({ value: '', label: '' })

    useEffect(() => {
      if (value) setSelected(value)
    }, [value])

    const optionRenders = useMemo(
      () =>
        query === ''
          ? options
          : options.filter((option) => {
              return option.label.toLowerCase().includes(query.toLowerCase())
            }),
      [query, options]
    )

    return (
      <Controller
        name={name}
        rules={rules}
        control={control}
        defaultValue={''}
        render={({ field, fieldState }) => {
          return (
            <div className={`flex flex-col gap-1 ${fullWidth ? 'w-full' : 'w-[350px]'} ${width ? width : ''}`}>
              <div className='flex flex-col 2xs:gap-2 xs:gap-2 sm:gap-3'>
                {label && (
                  <label
                    htmlFor={name}
                    className={`${size === 'small' ? 'text-[16px]' : '2xs:text-[18px] xs:text-[18px] sm:text-[20px]'} font-customSemiBold capitalize ${disabled && 'text-blackMain/[.32]'} ${classNameLabel}`}
                  >
                    {label}
                  </label>
                )}

                <Combobox
                  value={selected}
                  onChange={(value) => {
                    if (value) {
                      setSelected(value)
                      field.onChange(value?.value)
                    }
                  }}
                  onClose={() => setQuery('')}
                >
                  <div className='relative'>
                    <ComboboxInput
                      disabled={disabled}
                      placeholder={placeholder}
                      onChange={(event) => setQuery(event.target.value)}
                      displayValue={(option: OptionSelect) => option?.label}
                      className={`relative w-full ${size === 'small' ? 'h-[48px]' : '2xs:h-11 xs:h-11 sm:h-[52px]'} shadow-sm py-1.5 pl-5 pr-10 ${
                        variant === 'outline'
                          ? `${
                              disabled ? 'bg-blackMain/[.03]' : 'bg-white'
                            } rounded-[30px] border-[1px] border-solid border-blackMain/[.22]`
                          : `${disabled ? 'bg-blackMain/[.03]' : 'bg-greyLight'} rounded-lg`
                      } focus:outline-none ${
                        variant === 'outline'
                          ? `focus:ring-[1.5px] focus:ring-blackMain/[.30] ${
                              disabled ? '' : 'hover:ring-[1.5px] hover:ring-blackMain/[.30]'
                            } 2xs:rounded-[30px] xs:rounded-[30px] sm:rounded-[32px]`
                          : `focus:bg-blackMain/[.05] ${disabled ? '' : 'hover:bg-blackMain/[.05]'} rounded-[8px]`
                      }`}
                    />
                    <ComboboxButton disabled={disabled} className='group absolute inset-y-0 right-0 px-2.5'>
                      <img src={images.icons.chevron_bot} alt='icon-arrow' />
                    </ComboboxButton>
                  </div>
                  {options?.length > 0 && (
                    <ComboboxOptions
                      anchor='bottom'
                      className={clsx(
                        'shadow-lg mt-2 !max-h-[200px] w-[var(--input-width)] overflow-auto rounded-lg bg-white p-1 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
                        'scroll-bar-small transition duration-200 ease-in-out'
                      )}
                    >
                      {optionRenders.map((option) => (
                        <ComboboxOption
                          key={option.value}
                          value={option}
                          className='group flex cursor-default select-none items-center gap-2 rounded-md px-3 py-1.5 data-[focus]:bg-black/5'
                        >
                          <CheckIcon className='invisible size-4 fill-black group-data-[selected]:visible' />
                          <div className='text-sm/6 text-black'>{option.label}</div>
                        </ComboboxOption>
                      ))}
                    </ComboboxOptions>
                  )}
                </Combobox>
              </div>

              {helperText && (
                <div className='min-h-[18px]'>
                  <p className='ml-2 text-gray-400 2xs:text-[13px] xs:text-[13px] sm:text-[14px]'>{helperText}</p>
                </div>
              )}
              <div className='min-h-[18px]'>
                <p className='ml-2 text-red-500 2xs:text-[13px] xs:text-[13px] sm:text-[14px]'>
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

export default SelectField
