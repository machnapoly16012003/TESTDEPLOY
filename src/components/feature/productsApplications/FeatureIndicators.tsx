import { MoveLeft, MoveRight } from 'lucide-react'
import { GoDotFill } from 'react-icons/go'
import { cn } from '~/utils/utils'

interface IProps {
  total: number
  currentIndex: number
  goPrevious: () => void
  goNext
}

function FeatureIndicators({ total, goPrevious, currentIndex, goNext }: IProps) {
  return (
    <div className='flex w-full items-center justify-center gap-2'>
      <MoveLeft className='cursor-pointer' onClick={goPrevious} />
      <div className='flex gap-0'>
        {[...Array(total)].map((_, index) => (
          <GoDotFill
            key={index}
            size={12}
            className={cn(index === currentIndex ? 'text-slate-800' : 'text-slate-400')}
          />
        ))}
      </div>
      <MoveRight className='cursor-pointer' onClick={goNext} />
    </div>
  )
}

export default FeatureIndicators
