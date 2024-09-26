import classNames from 'classnames'
import { FC, memo, ReactNode } from 'react'
import images from '~/assets'

interface IBoxGettingStarted {
  icon: ReactNode
  title: string
  content: string
  className?: string
}

const BoxGettingStarted: FC<IBoxGettingStarted> = memo(({ icon, title, content, className }) => {
  return (
    <div
      data-aos={'fade-up'}
      className={classNames(
        className,
        'border-box-getting shadow-s-21 relative flex max-w-[272px] flex-col items-center justify-between rounded-2xl border-[2px] border-solid bg-white/[.40] px-4 pb-5 pt-6 backdrop-blur-sm'
      )}
    >
      {icon}
      <h6 className='bg-ln-text-getting bg-clip-text text-center text-[18px]/[25.2px] font-semibold tracking-[0.2px] text-transparent'>
        {title}
      </h6>
      <p className='text-[16px]/[20px] tracking-[-0.020em] text-black/[.64]'>{content}</p>

      <img
        src={images.bg.gradient_box}
        alt='gradiant-box'
        className='absolute -left-2 bottom-[-100px] h-[200px] w-[400px]'
      />
    </div>
  )
})

export default BoxGettingStarted
