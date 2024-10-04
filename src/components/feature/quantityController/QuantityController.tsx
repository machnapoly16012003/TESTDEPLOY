import { memo, useCallback, useState } from 'react'

import classNames from 'classnames'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { IconButton } from '~/components/shared/iconButton'

interface QuantityControllerProps {
  gap?: string
  isCart?: boolean
  isSmall?: boolean
  disabled?: boolean
  max: number
  value: number | string
  onIncrease: (value: number) => void
  onDecrease: (value: number) => void
}

const QuantityController = memo(
  ({
    gap = 'gap-3',
    isCart,
    isSmall,
    disabled = false,
    max,
    value,
    onIncrease,
    onDecrease
  }: QuantityControllerProps) => {
    const [localValue, setLocalValue] = useState<number | string>(Number(value) || 1)

    const increase = useCallback(() => {
      let _value = Number(value || localValue) + 1
      if (max !== undefined && _value > max) _value = max
      onIncrease(_value)
      setLocalValue(_value)
    }, [value, localValue, max, isCart])

    const decrease = useCallback(() => {
      let _value = Number(value || localValue) - 1
      if (isCart) {
        if (_value < 1) _value = 1
        onDecrease(_value)
        setLocalValue(_value)
      } else {
        if (_value === 0 || _value < 0) _value = 0
        onDecrease(_value)
        setLocalValue(_value)
      }
    }, [value, localValue, isCart])

    return (
      <div className={`flex items-center ${gap}`}>
        <IconButton
          size={isSmall ? '28' : '40'}
          variant='outline'
          onClick={decrease}
          disabled={value === 1 || localValue === 1}
          className={`${isSmall ? 'border-[0.88px]' : 'border-[1.88px]'} hover:border-blackMain hover:bg-transparent`}
        >
          <FaMinus fontSize={isSmall ? 10 : 15} color={value === 1 || localValue === 1 ? 'white' : 'black'} />
        </IconButton>

        <p
          className={classNames(
            isSmall ? 'sm:text-[16px]' : 'sm:text-[22px]/[29px]',
            `2xs:text-[16px] min-w-[30px] text-center font-semibold text-blackMain xs:text-[16px]`
          )}
        >
          {(localValue as number) < 10 && (localValue as number) !== 0 ? `0${localValue}` : localValue}
        </p>

        <IconButton
          size={isSmall ? '28' : '40'}
          variant='outline'
          onClick={increase}
          disabled={value === max || localValue === max || disabled}
          className={`${isSmall ? 'border-[0.88px]' : 'border-[1.88px]'} hover:border-blackMain hover:bg-transparent`}
        >
          <FaPlus
            fontSize={isSmall ? 10 : 15}
            color={value === max || localValue === max || disabled ? 'white' : 'black'}
          />
        </IconButton>
      </div>
    )
  }
)

export default QuantityController
