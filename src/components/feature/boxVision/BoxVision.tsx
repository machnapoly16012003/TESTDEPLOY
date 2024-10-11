import classNames from 'classnames'
import { FC, memo, useMemo } from 'react'

interface IVision {
  id: number
  title: string
  description: string[]
}

interface IBoxVision {
  vision: IVision
  isActive: boolean
}

const BoxVision: FC<IBoxVision> = memo(({ vision, isActive }) => {
  const descRender = useMemo(() => (isActive ? vision.description : vision.description.slice(0, 1)), [isActive, vision])

  return (
    <div
      className={classNames(
        isActive
          ? 'bg-box-vision xs:min-h-[307px] xs:w-[726px] sm:min-h-[307px] sm:w-[726px] md:min-h-[307px] md:w-[726px] lg:min-h-[254px] lg:w-[600px] xl:min-h-[307px] xl:w-[726px]'
          : 'bg-white/[.64] xs:min-h-[165px] xs:w-[558px] sm:min-h-[165px] sm:w-[558px] md:min-h-[165px] md:w-[558px] lg:min-h-[156px] lg:w-[500px] xl:min-h-[165px] xl:w-[558px]',
        'flex rounded-3xl p-[2px] shadow-s-34 backdrop-blur-[125px] transition-all duration-500 ease-in-out'
      )}
    >
      <div
        className={classNames(
          isActive
            ? 'xs:min-h-[303px] xs:p-1 sm:min-h-[303px] sm:p-10 md:min-h-[303px] md:p-10 lg:min-h-[250px] lg:p-8 xl:min-h-[303px] xl:p-10'
            : 'xs:min-h-[161px] xs:p-[36px] sm:min-h-[161px] sm:p-[36px] md:min-h-[161px] md:p-[36px] lg:min-h-[152px] lg:p-7 xl:min-h-[161px] xl:p-[36px]',
          'flex h-full w-full flex-1 flex-col rounded-[22px] bg-[#fbfcfd] transition-all duration-500 ease-in-out'
        )}
      >
        <p className='font-semibold text-black xs:text-[24px]/[22.5px] sm:text-[24px]/[22.5px] md:text-[24px]/[22.5px] lg:text-[22px]/[20.5px] xl:text-[24px]/[22.5px]'>
          {vision.title}
        </p>

        <div className='xs:mt-6 sm:mt-6 md:mt-6 lg:mt-4 xl:mt-6'>
          {descRender.map((des, index) => (
            <div key={index} className='flex items-start xs:gap-5 sm:gap-5 md:gap-5 lg:gap-4 xl:gap-5'>
              <div className='bg-box-vision mt-[9px] size-[14px] flex-shrink-0 rounded-[2px] p-[1px]'>
                <div className='size-full rounded-[1px] bg-[#fbfcfd]' />
              </div>
              <p
                className={classNames(
                  !isActive && 'line-clamp-2',
                  'font-normal text-black/[.64] transition-all duration-500 ease-in-out xs:text-[18px]/[32px] sm:text-[18px]/[32px] md:text-[18px]/[32px] lg:text-[16px]/[30px] xl:text-[18px]/[32px]'
                )}
              >
                {des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

export default BoxVision
