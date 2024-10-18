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
          ? 'bg-box-vision xs:min-h-[236px] xs:w-full sm:min-h-[236px] sm:w-full md:min-h-[307px] md:w-[726px] lg:min-h-[254px] lg:w-[600px] xl:min-h-[307px] xl:w-[726px]'
          : 'bg-white/[.64] xs:min-h-[69px] xs:w-[294px] sm:min-h-[69px] sm:w-[294px] md:min-h-[165px] md:w-[558px] lg:min-h-[156px] lg:w-[500px] xl:min-h-[165px] xl:w-[558px]',
        'flex p-[2px] shadow-s-34 backdrop-blur-[125px] transition-all duration-500 ease-in-out xs:rounded-[12px] sm:rounded-[12px] md:rounded-3xl'
      )}
    >
      <div
        className={classNames(
          isActive
            ? 'xs:min-h-[232px] xs:p-3 xs:px-[14px] sm:min-h-[232px] sm:p-3 sm:px-[14px] md:min-h-[303px] md:p-10 lg:min-h-[250px] lg:p-8 xl:min-h-[303px] xl:p-10'
            : 'xs:min-h-[65px] xs:p-3 xs:px-[14px] sm:min-h-[65px] sm:p-3 sm:px-[14px] md:min-h-[161px] md:p-[36px] lg:min-h-[152px] lg:p-7 xl:min-h-[161px] xl:p-[36px]',
          'flex h-full w-full flex-1 flex-col bg-[#fbfcfd] transition-all duration-500 ease-in-out xs:rounded-[10px] sm:rounded-[10px] md:rounded-[22px]'
        )}
      >
        <p className='font-semibold text-black xs:text-[14px]/[11.5px] sm:text-[14px]/[11.5px] md:text-[24px]/[22.5px] lg:text-[22px]/[20.5px] xl:text-[24px]/[22.5px]'>
          {vision.title}
        </p>

        <div className='xs:mt-[14px] sm:mt-[14px] md:mt-6 lg:mt-4 xl:mt-6'>
          {descRender.map((des, index) => (
            <div key={index} className='flex items-start xs:gap-2 sm:gap-2 md:gap-5 lg:gap-4 xl:gap-5'>
              <div className='bg-box-vision flex-shrink-0 rounded-[2px] p-[1px] xs:mt-[6px] xs:size-[8px] sm:mt-[6px] sm:size-[8px] md:mt-[9px] md:size-[14px]'>
                <div className='size-full rounded-[1px] bg-[#fbfcfd]' />
              </div>
              <p
                className={classNames(
                  !isActive && 'line-clamp-2',
                  'font-normal transition-all duration-500 ease-in-out xs:text-[14px]/[22px] xs:text-black/[.8] sm:text-[14px]/[22px] sm:text-black/[.8] md:text-[18px]/[32px] md:text-black/[.64] lg:text-[16px]/[30px] xl:text-[18px]/[32px]'
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
