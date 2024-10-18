import classNames from 'classnames'
import Lottie from 'lottie-react'
import { memo, useState } from 'react'

import images from '~/assets'
import astronaut from '~/assets/animation/astronaut-benefit.json'
import { listBenefitContents } from '~/assets/mock/career'
import useResponsive from '~/hooks/useResponsive'

const Benefits = memo(() => {
  const xlDown = useResponsive('down', 'lg')

  const [inxActiveBox, setInxActiveBox] = useState<number>(1)

  const listBenefits = [
    {
      id: 1,
      icon: (isActive: boolean) => (isActive ? images.benefit.black_salary : images.benefit.ln_salary),
      title: 'Competitive <br /> Salary'
    },
    {
      id: 2,
      icon: (isActive: boolean) => (isActive ? images.benefit.black_health : images.benefit.ln_health),
      title: 'Health <br /> Insurance'
    },
    {
      id: 3,
      icon: (isActive: boolean) => (isActive ? images.benefit.black_dynamic : images.benefit.ln_dynamic),
      title: 'Dynamic <br /> Environment'
    },
    {
      id: 4,
      icon: (isActive: boolean) => (isActive ? images.benefit.black_activities : images.benefit.ln_activities),
      title: 'Team Building <br /> Activities'
    },
    {
      id: 5,
      icon: (isActive: boolean) => (isActive ? images.benefit.black_paid_time : images.benefit.ln_paid_time),
      title: xlDown ? 'Paid <br /> Time Off' : 'Paid Time Off'
    }
  ]

  return (
    <section className='xs:mt-[120px] xs:px-4 sm:mt-[120px] sm:px-4 md:mt-[200px] md:px-5 lg:px-0 xl:max-w-[1440px] 3xl:max-w-full'>
      <div className='relative ml-auto w-fit'>
        <div className='z-0 xs:w-[140%] sm:w-[140%] md:w-[110%] lg:w-auto 3xl:w-[1400px]'>
          <img data-aos='fade-left' src={images.benefit.text_benefits} alt='text-benifits' className='w-full' />
        </div>

        <h4
          data-aos='fade-left'
          className='absolute bottom-0 z-10 font-semibold xs:right-10 xs:text-[36px]/[72px] sm:right-10 sm:text-[36px]/[72px] md:right-28 md:text-[56px]/[72px] 3xl:text-[60px]/[76px]'
        >
          Benefits
        </h4>
      </div>

      <div
        data-aos='fade-down'
        className='relative mt-10 flex scale-100 xs:h-fit xs:flex-col sm:h-fit sm:flex-col md:h-fit md:flex-col lg:h-[550px] lg:flex-row lg:px-10 xl:px-0 3xl:scale-110'
      >
        <div className='z-10 flex-shrink-0 bg-ln-benefit shadow-s-35 xs:order-2 xs:h-[345px] xs:rounded-[40px] xs:pb-[20px] xs:pt-[20px] sm:order-2 sm:h-[345px] sm:rounded-[40px] sm:pb-[31px] sm:pt-[70px] md:order-2 md:h-[511px] md:rounded-[40px] md:pb-[31px] md:pt-[70px] lg:order-1 lg:w-full lg:rounded-[120px] lg:pb-[31px] lg:pt-[70px] xl:ml-[60px] xl:mt-[43px] xl:w-[1097px] 3xl:ml-[200px] 3xl:mt-[120px]'>
          <div className='xs:space-y-[10px] xs:px-3 sm:space-y-[10px] sm:px-4 md:space-y-5 md:px-5 lg:mx-auto lg:max-w-[750px] lg:px-0 xl:ml-[136px] xl:max-w-[869px]'>
            {listBenefitContents.map((row) => (
              <p key={row.id} className='font-bold xs:text-[16px]/[18px] sm:text-[16px]/[18px] md:text-[18px]/[32px]'>
                {row.title} <span className='font-normal'>{row.content}</span>
              </p>
            ))}
          </div>

          <div className='flex xs:ml-4 xs:mt-[20px] sm:ml-4 sm:mt-[20px] md:ml-4 md:mt-[66px] lg:ml-10 xl:ml-[102px]'>
            {listBenefits.map((benefit, index) => (
              <div
                key={benefit.id}
                onMouseEnter={() => setInxActiveBox(index)}
                onMouseLeave={() => setInxActiveBox(1)}
                className={classNames(
                  inxActiveBox === index
                    ? 'bg-white/[.64] shadow-s-34 backdrop-blur-[125px] xs:h-fit xs:gap-[6px] xs:p-3 sm:h-fit sm:gap-[6px] sm:p-3 md:h-[160px] md:gap-[18px] md:p-6 lg:h-[180px] lg:p-7 lg:pb-5 xl:h-[180px] xl:p-8 xl:pb-5'
                    : 'gap-[14px] bg-transparent xs:px-4 sm:px-4 md:pl-8 lg:pl-7 xl:pl-8',
                  'flex flex-col items-start transition-all duration-500 ease-in-out xs:w-fit xs:rounded-[16px] sm:w-fit sm:rounded-[16px] md:w-[160px] md:rounded-[32px] lg:w-[180px] xl:w-[180px]'
                )}
              >
                <img
                  src={benefit.icon(inxActiveBox === index)}
                  alt={inxActiveBox === index ? 'black' : 'lỉnear'}
                  className={classNames(
                    inxActiveBox !== index
                      ? 'xs:w-[24px] sm:w-[24px] md:w-[42px]'
                      : 'xs:w-[32px] sm:w-[32px] md:w-[56px]'
                  )}
                />
                <p
                  dangerouslySetInnerHTML={{ __html: benefit?.title as string }}
                  className={classNames(
                    inxActiveBox === index
                      ? 'text-gradien-benefit xs:block sm:block md:block'
                      : 'text-black xs:hidden sm:hidden md:block',
                    'text-nowrap font-semibold transition-colors duration-500 ease-in-out xs:text-[12px]/[18px] sm:text-[12px]/[18px] md:text-[16px]/[24px] lg:text-[20px]/[28px]'
                  )}
                />
              </div>
            ))}
          </div>
        </div>
        <Lottie
          data-aos='zoom-in-up'
          animationData={astronaut}
          className='top-0 z-20 xs:relative xs:order-1 xs:w-[100%] sm:relative sm:order-1 sm:w-[100%] md:relative md:order-1 md:w-full lg:absolute lg:-top-80 lg:left-0 lg:order-2 lg:w-[400px] lg:rotate-[30deg] xl:-right-10 xl:left-auto xl:top-0 xl:w-[520px] xl:rotate-0 3xl:-top-10 3xl:right-20 3xl:w-[700px]'
        />

        <img
          src={images.bg.bg_career_left}
          className='absolute left-1/2 top-0 z-0 w-full -translate-x-1/2 xs:block sm:block md:block lg:hidden'
        />
      </div>
    </section>
  )
})

export default Benefits
