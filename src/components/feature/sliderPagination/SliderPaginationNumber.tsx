import classNames from 'classnames'
import { memo, useCallback } from 'react'

type SliderPaginationNumberProps = {
  slideToGo: (index: number) => void
  activeIndex: number
  slideCount: number
  className?: string
  gap?: string
  size?: 4 | 6 | 8
}

const SliderPaginationNumber = memo(
  ({ slideToGo, activeIndex, slideCount, className, gap }: SliderPaginationNumberProps) => {
    const getPaginationRange = useCallback(() => {
      const paginationSize = 6

      if (slideCount <= paginationSize) {
        // Case 1: Slide count <= 6, show all pages
        return Array.from({ length: slideCount }, (_, i) => i)
      } else if (activeIndex <= 2) {
        // Case 2: Active index is in the first 3 pages
        return [0, 1, 2, 3, 4, 5]
      } else if (activeIndex >= slideCount - 3) {
        // Case 3: Active index is in the last 3 pages
        return Array.from({ length: 6 }, (_, i) => slideCount - 6 + i)
      } else {
        // Case 4: Active index is in the middle, show 5 surrounding pages
        return Array.from({ length: 5 }, (_, i) => activeIndex - 2 + i)
      }
    }, [slideCount, activeIndex])

    const paginationRange = getPaginationRange()

    return (
      <div className={`flex items-center ${gap ? gap : 'xs:gap-3 md:gap-4'}`}>
        {paginationRange[0] > 0 && <p className='text-[18px]/[18px] font-semibold text-black/[.64]'>...</p>}

        {paginationRange.map((index) => (
          <div
            key={index}
            onClick={() => slideToGo(index)}
            className={classNames(`flex items-center xs:gap-3 md:gap-4`, className)}
          >
            <p
              className={classNames(
                activeIndex === index ? 'text-black' : 'text-black/[.64]',
                'font-semibold xs:text-[16px]/[16px] md:text-[18px]/[18px]'
              )}
            >
              {index < 9 ? '0' : ''}
              {index + 1}
            </p>
            <div
              className={classNames(
                activeIndex === index ? 'xs:w-[78px] md:w-[118px]' : 'w-[0px]',
                'h-[2px] bg-[#F200F2] transition-all duration-150 ease-in-out'
              )}
            />
          </div>
        ))}

        {paginationRange[paginationRange.length - 1] < slideCount - 1 && (
          <p className='text-[18px]/[18px] font-semibold text-black/[.64]'>...</p>
        )}
      </div>
    )
  }
)

export default SliderPaginationNumber
