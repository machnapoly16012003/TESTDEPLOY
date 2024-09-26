import classNames from 'classnames'
import { FC, memo } from 'react'

interface IBoxContentComponent {
  duration?: string
  viewing?: boolean
  className?: string
  title: string
  content: string
  icon: string
  size?: 'small' | 'medium' | 'large'
}

const BoxContentComponent: FC<IBoxContentComponent> = memo(({ duration, className, title, content, icon }) => {
  return (
    <div
      data-aos={'fade-left'}
      data-aos-duration={duration}
      className={classNames(
        className,
        'shadow-s-21 flex h-[110px] items-center gap-6 rounded-full border-[2px] border-solid border-white/[.40] bg-white/[.40] px-4 py-[18.5px] backdrop-blur-sm'
      )}
    >
      <div className='bg-ln-text-getting flex size-16 shrink-0 items-center justify-center rounded-full'>
        <img src={icon} alt='icon' className='size-11' />
      </div>

      <div className={classNames()}>
        <h6 className='bg-ln-text-getting w-fit bg-clip-text text-[18px]/[25.2px] font-semibold tracking-[0.2px] text-transparent'>
          {title}
        </h6>
        <p className='text-[16px]/[20px] tracking-[-0.020em] text-black/[.64]'>{content}</p>
      </div>
    </div>
  )
})

export default BoxContentComponent
