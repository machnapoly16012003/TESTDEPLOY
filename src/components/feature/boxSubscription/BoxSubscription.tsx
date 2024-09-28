import classNames from 'classnames'
import { FC, memo } from 'react'
import { ISubscription } from '~/@types/models'
import { formatPrice } from '~/utils/format'

interface IBoxSubscription {
  subscription: ISubscription
  isSelected: boolean
  handleSelect: (id: number) => void
}

const BoxSubscription: FC<IBoxSubscription> = memo(({ subscription, isSelected, handleSelect }) => {
  return (
    <div
      onClick={() => handleSelect(subscription.id)}
      className={classNames(
        isSelected
          ? 'border-transparent bg-box-subscription bg-cover bg-center bg-no-repeat'
          : 'border-[#e5e5ea] bg-transparent',
        'relative flex h-[240px] w-[190px] flex-col items-center rounded-xl border-[1.5px] border-solid pb-5 pt-6 shadow-s-24 transition-all duration-100 ease-in-out'
      )}
    >
      <div className='absolute right-[6px] top-[6px]'>
        <input
          readOnly
          type='checkbox'
          checked={isSelected}
          onClick={() => handleSelect(subscription.id)}
          className='checked:after:content-[" "] hover:shadow-avatar size-5 shrink-0 appearance-none rounded-full border-[1px] border-solid border-[#E5E5EA] bg-transparent transition-colors duration-200 ease-in-out checked:border-none checked:bg-[#D814F2] checked:after:absolute checked:after:left-[7.4px] checked:after:top-[4.45px] checked:after:block checked:after:h-[10px] checked:after:w-[5.2px] checked:after:rotate-[45deg] checked:after:border-b-[2px] checked:after:border-r-[2px] checked:after:border-solid checked:after:border-white focus:outline-none'
        />
      </div>

      <p className={classNames('pb-5 text-[16px]/[22px] font-semibold uppercase')}>{subscription.title}</p>

      <div
        className={classNames(
          isSelected ? 'bg-ln-line-sub-card-inactive' : 'bg-ln-line-sub-card',
          'h-[2px] w-full transition-colors duration-200 ease-in-out'
        )}
      />

      <div className='flex flex-1 flex-col items-center justify-center space-y-4'>
        <p className='text-[32px]/[22px] font-semibold text-[#834CFF]'>${formatPrice(+subscription.subscription)}</p>
        <p className='font-normal text-[#818EA1E0] xs:text-[12px]/[14px] md:text-[14px]/[16px] xl:text-[12px]/[14px]'>
          Cancel anytime
        </p>
      </div>

      <button
        className={classNames(
          isSelected ? 'bg-[#834CFF] text-white' : 'bg-[#834CFF]/[.1] text-[#834CFF]',
          'h-6 w-[87px] rounded text-center text-[12px]/[14px] font-medium shadow-s-24 transition-colors duration-200 ease-in-out'
        )}
      >
        {subscription.save}
      </button>
    </div>
  )
})

export default BoxSubscription
