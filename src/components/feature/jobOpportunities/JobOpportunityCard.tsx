import { forwardRef } from 'react'
import { Button } from '~/components/shared/button'
import { cn } from '~/utils/utils'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number
  job: {
    position: string
    descriptions: string[]
    requirements: string[]
  }
}

const JobOpportunityCard = forwardRef<HTMLDivElement, IProps>(({ index, job, className, ...props }, ref) => {
  const { position, descriptions, requirements } = job
  const isSelected = index === 2
  const oddCard = index % 2 === 1

  return (
    <div
      ref={ref}
      className={cn(
        'flex items-center justify-center rounded-[20px]',
        isSelected
          ? 'bg-gradient-to-t from-[#6976A0] via-[#2C3972] to-[#141D3E] text-white xs:max-w-[269px] xs:p-6 sm:p-6 md:max-w-lg md:p-8 lg:p-12'
          : 'aspect-square from-[#D4E4FB] to-white text-foreground xs:max-w-[140px] xs:px-6 sm:px-6 md:max-w-72 md:px-8 lg:px-12',
        oddCard ? '' : '',
        index < 3 ? 'bg-gradient-to-br' : 'bg-gradient-to-bl',
        className
      )}
      {...(props as any)}
    >
      <div className={cn(oddCard ? 'max-w-40' : 'max-w-32', isSelected && 'max-w-fit')}>
        {!isSelected ? (
          <span
            className={cn(
              'block text-center text-lg font-medium text-black/50',
              oddCard ? 'xs:text-[14px] md:text-2xl' : 'xs:text-[12px] md:text-lg'
            )}
          >
            Position
          </span>
        ) : null}
        <h4
          className={cn(
            'text-center',
            isSelected ? 'font-bold uppercase' : 'font-medium xs:text-[14px]/[18px] sm:text-[14px]/[18px] md:text-lg',
            oddCard ? 'text-2xl' : 'xs:text-[12px]/[18px] sm:text-[12px]/[18px] md:text-lg'
          )}
        >
          {position}
        </h4>

        {isSelected ? (
          <>
            <h5 className='font-semibold xs:mb-1 xs:mt-4 xs:text-[10px] sm:text-[10px] md:mb-2 md:mt-6 md:text-lg lg:text-xl'>
              Job Description:
            </h5>
            <ul className='list list-disc pl-6 xs:text-[9px] sm:text-[9px] md:text-[16px] lg:text-lg'>
              {descriptions.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>

            <h5 className='font-semibold xs:mb-1 xs:mt-2 xs:text-[10px] sm:text-[10px] md:my-2 md:text-lg lg:text-xl'>
              Requirement:
            </h5>
            <ul className='list list-disc pl-6 xs:text-[9px] sm:text-[9px] md:text-[16px] lg:text-lg'>
              {requirements.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>

            <div className='flex justify-center xs:mt-4 md:mt-8'>
              <Button
                variant=''
                classNameText='xs:text-[9px] xs:mt-[2px] md:mt-0 sm:text-[9px] md:text-[18px]'
                className='normal-case text-black xs:h-[26px] xs:w-[80px] sm:h-[26px] sm:w-[80px] md:h-[52px] md:w-[160px]'
              >
                Details
              </Button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
})

export default JobOpportunityCard
