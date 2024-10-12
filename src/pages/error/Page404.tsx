import classNames from 'classnames'
import Lottie from 'lottie-react'
import { MoveLeft, MoveRight } from 'lucide-react'
import { memo } from 'react'
import { GoDotFill } from 'react-icons/go'
import error404 from '~/assets/animation/error-404.json'

const Page404 = memo(() => {
  return (
    <section className='relative flex h-screen w-screen flex-col items-center justify-center bg-[#f4f7f9]'>
      <h1 className='mb-20 text-[56px]/[66px] font-semibold'>Job Opportunities</h1>{' '}
      <Lottie animationData={error404} className='relative z-10 w-[900px]' />
      <div className='mt-12 space-y-6 text-center'>
        <p className='text-[32px]/[32px] font-semibold text-blackDark'>
          Sorry, we couldn’t find any matches for ‘Data’ right now
        </p>
        <p className='text-[24px]/[32px] text-blackDark/[.44]'>
          Would you like to explore other opportunities or sign up for job alerts?
        </p>
        <div className='flex w-full items-center justify-center gap-2'>
          <MoveLeft className='cursor-pointer' />
          <div className='flex gap-0'>
            {[...Array(5)].map((_, index) => (
              <GoDotFill
                key={index}
                size={12}
                className={classNames(index === 0 ? 'text-slate-800' : 'text-slate-400')}
              />
            ))}
          </div>
          <MoveRight className='cursor-pointer' />
        </div>
      </div>
      <div className="absolute inset-0 translate-y-0 bg-[url('~/assets/bg/bg-opportunities-2.png')] bg-contain bg-bottom bg-no-repeat" />
    </section>
  )
})

export default Page404
