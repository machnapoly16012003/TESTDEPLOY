import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import clsx from 'clsx'
import { memo, useEffect, useMemo, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { OptionSelect } from '~/@types/common'
import { CheckIcon, ChevronDown } from '../icon'
import classNames from 'classnames'

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
}

const SelectField = memo(
  ({
    name,
    label,
    rules = {},
    options = [],
    width,
    disabled = false,
    required = false,
    fullWidth = false,
    helperText,
    placeholder,
    value,
    classNameLabel = null,
    variant = 'outline'
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
              <div className='flex flex-col gap-2'>
                {label && (
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
                      className={classNames(
                        'shadow-sm relative w-full rounded-[8px] border border-solid pl-4 pr-10 pt-[2px] focus:outline-none xs:h-11 md:h-12',
                        disabled
                          ? 'bg-black/[.03]'
                          : variant === 'outline'
                            ? 'border-[#DBDDE3] pb-[2px] hover:ring-[0.8px] hover:ring-black/[.2] focus:ring-[0.8px] focus:ring-black/[.2]'
                            : 'border-greyLight bg-greyLight hover:bg-black/[.05] focus:bg-black/[.05]'
                      )}
                    />
                    <ComboboxButton
                      disabled={disabled}
                      className={classNames(disabled && 'opacity-20', 'group absolute inset-y-0 right-0 px-2.5')}
                    >
                      <ChevronDown />
                    </ComboboxButton>
                  </div>
                  {options?.length > 0 && (
                    <ComboboxOptions
                      anchor='bottom'
                      className={clsx(
                        'shadow-lg mt-2 !max-h-[200px] w-[var(--input-width)] overflow-auto rounded-[8px] bg-white p-1 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
                        'scroll-bar-small transition duration-200 ease-in-out'
                      )}
                    >
                      {optionRenders.map((option) => (
                        <ComboboxOption
                          key={option.value}
                          value={option}
                          className='group flex cursor-default select-none items-center gap-2 rounded-[6px] px-3 py-1.5 data-[focus]:bg-black/5'
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

export default SelectField
