import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { Dispatch, Fragment, memo, ReactNode, SetStateAction } from 'react'
import { OptionSelect } from '~/@types/common'
import { CheckIcon, ChevronDown, CloseIcon, SortIcon } from '~/components/icons'
import useLocales from '~/hooks/useLocales'

type SelectFilterProps = {
  label?: string
  anchor?: boolean
  className?: string
  fullWidth?: boolean
  isSortBy?: boolean
  isLangs?: boolean
  hideClear?: boolean
  isTransparent?: boolean
  isSelectQuantity?: boolean
  options: OptionSelect[]
  selected: OptionSelect
  setSelected: Dispatch<SetStateAction<OptionSelect>>
  leftIcon?: ReactNode
  maxHeight?: string
  handleUpdateCartItem?: (value: string, type: 'color' | 'size' | 'capacities') => void
}

const SelectFilter = memo(
  ({
    isLangs,
    label,
    className,
    anchor = false,
    fullWidth = false,
    isSortBy = false,
    isTransparent = false,
    hideClear = false,
    isSelectQuantity = false,
    options,
    selected,
    setSelected,
    leftIcon,
    maxHeight,
    handleUpdateCartItem
  }: SelectFilterProps) => {
    const { onChangeLang } = useLocales()

    return (
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <div className={`relative ${fullWidth ? '2xs:w-full xs:w-full' : ''}`}>
            <ListboxButton
              className={`relative min-h-10 rounded-lg 2xs:min-w-[130px] xs:min-w-[130px] sm:min-w-[180px] ${isTransparent || isSelectQuantity ? 'bg-transparent' : 'shadow-sm bg-white ring-1 ring-inset ring-blackMain/[.22] hover:ring-[1.2px] hover:ring-blackMain/[.30] focus:ring-[1px] focus:ring-blackMain/[.30]'} ${isSelectQuantity ? 'pl-0' : 'pl-3'} py-1.5 text-left transition-colors duration-300 ease-in-out xs:pr-8 sm:pr-12 ${className}`}
            >
              <div className='flex items-center gap-2'>
                {leftIcon && leftIcon}
                {isSortBy && (
                  <>
                    <SortIcon className='2xs:size-[18px] xs:size-[18px] sm:size-5' />
                    <div className='h-6 border-0 border-r-[1px] border-solid border-blackMain/[.1]' />
                  </>
                )}
                <span
                  className={`2xs:text-[12px] xs:text-[12px] ${isSelectQuantity ? 'sm:text-[16px]' : 'sm:text-[14px]'} text-nowrap font-customRegular text-blackMain/[.64]`}
                >
                  {label && `${label}:`}{' '}
                  <span
                    className={classNames(
                      isTransparent
                        ? 'text-white sm:text-[14px]'
                        : isSelectQuantity
                          ? 'font-customSemiBold text-blackMain sm:text-[16px]'
                          : 'font-customSemiBold text-blackMain sm:text-[16px]',
                      `truncate xs:text-[14px]`
                    )}
                  >
                    {selected.label}
                  </span>
                </span>
              </div>
              {!hideClear && selected.value !== '' && (
                <span
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelected({ value: '', label: '' })
                  }}
                  className='absolute inset-y-0 right-5 flex items-center px-2'
                >
                  <CloseIcon
                    className='size-2'
                    color={isTransparent ? 'white' : isSelectQuantity ? 'black' : 'black'}
                  />
                </span>
              )}
              <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                <ChevronDown
                  className='size-4'
                  color={isTransparent ? 'white' : isSelectQuantity ? 'black' : 'black'}
                />
              </span>
            </ListboxButton>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <ListboxOptions
                anchor={anchor && 'bottom'}
                className={`absolute mt-1 !w-[var(--button-width)] overflow-auto ${maxHeight ? maxHeight : 'max-h-56'} scroll-bar-xs w-full overflow-auto rounded-lg bg-white/[.56] px-3 pb-[14px] pt-3 shadow-avatar backdrop-blur-2xl`}
              >
                {options.map((option, index) => (
                  <ListboxOption
                    key={index}
                    value={option}
                    className={classNames(
                      index === 0 ? 'pb-3 pt-0' : options.length - 1 === index ? 'pb-0 pt-3' : 'py-3',
                      options.length - 1 === index ? 'border-b-0' : 'border-b-[1px]',
                      `flex cursor-pointer select-none items-center justify-between border-0 border-solid border-[#2F373C]/[.12] px-2`
                    )}
                    onClick={() => {
                      if (isLangs) onChangeLang(option.value)
                      handleUpdateCartItem && handleUpdateCartItem(option.value, 'capacities')
                    }}
                  >
                    <span
                      className={`${selected.value === option.value ? 'font-customMedium opacity-100' : 'font-customRegular opacity-[.64]'} block truncate leading-none hover:opacity-100`}
                    >
                      {option.label}
                    </span>
                    {selected.value === option.value && <CheckIcon className='size-6' />}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        )}
      </Listbox>
    )
  }
)

export default SelectFilter
