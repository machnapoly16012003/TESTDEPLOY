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
          ? 'max-w-lg bg-gradient-to-t from-[#6976A0] via-[#2C3972] to-[#141D3E] p-12 text-white'
          : 'aspect-square max-w-72 from-[#D4E4FB] to-white px-12 text-foreground',
        oddCard ? '' : '',
        index < 3 ? 'bg-gradient-to-br' : 'bg-gradient-to-bl',
        className
      )}
      {...(props as any)}
    >
      <div className={cn(oddCard ? 'max-w-40' : 'max-w-32', isSelected && 'max-w-fit')}>
        {!isSelected ? (
          <span className={cn('block text-center text-lg font-medium text-black/50', oddCard ? 'text-2xl' : 'text-lg')}>
            Position
          </span>
        ) : null}
        <h4
          className={cn(
            'text-center',
            isSelected ? 'font-bold uppercase' : 'text-lg font-medium',
            oddCard ? 'text-2xl' : 'text-lg'
          )}
        >
          {position}
        </h4>

        {isSelected ? (
          <>
            <h5 className='mb-2 mt-6 text-xl font-semibold'>Job Description:</h5>
            <ul className='list list-disc pl-6 text-lg'>
              {descriptions.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>

            <h5 className='my-2 text-xl font-semibold'>Requirement:</h5>
            <ul className='list list-disc pl-6 text-lg'>
              {requirements.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>

            <div className='mt-8 flex justify-center'>
              <Button variant='' className='normal-case text-black'>
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
