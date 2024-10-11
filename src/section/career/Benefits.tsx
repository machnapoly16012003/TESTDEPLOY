import classNames from 'classnames'
import Lottie from 'lottie-react'
import { memo, useState } from 'react'

import images from '~/assets'
import astronaut from '~/assets/animation/astronaut-benefit.json'
import { listBenefitContents } from '~/assets/mock/career'

const Benefits = memo(() => {
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
      title: 'Paid Time Off'
    }
  ]

  return (
    <section className='mt-[200px] xl:max-w-[1440px] 3xl:max-w-full'>
      <div className='relative ml-auto w-fit'>
        <img data-aos='fade-left' src={images.benefit.text_benefits} alt='text-benifits' className='z-0' />
        <h4 data-aos='fade-left' className='absolute bottom-0 right-28 z-10 text-[56px]/[72px] font-semibold'>
          Benefits
        </h4>
      </div>

      <div data-aos='fade-down' className='relative mt-10 h-[550px] scale-100 lg:px-10 xl:px-0 3xl:scale-110'>
        <div className='h-[511px] flex-shrink-0 rounded-[120px] bg-ln-benefit pb-[31px] pt-[70px] shadow-s-35 lg:w-full xl:ml-[60px] xl:mt-[43px] xl:w-[1097px] 3xl:ml-[200px] 3xl:mt-[120px]'>
          <div className='space-y-5 lg:mx-auto lg:max-w-[750px] xl:ml-[136px] xl:max-w-[869px]'>
            {listBenefitContents.map((row) => (
              <p key={row.id} className='text-[18px]/[32px] font-bold'>
                {row.title} <span className='font-normal'>{row.content}</span>
              </p>
            ))}
          </div>

          <div className='mt-[66px] flex lg:ml-10 xl:ml-[102px]'>
            {listBenefits.map((benefit, index) => (
              <div
                key={benefit.id}
                onMouseEnter={() => setInxActiveBox(index)}
                onMouseLeave={() => setInxActiveBox(1)}
                className={classNames(
                  inxActiveBox === index
                    ? 'gap-[18px] bg-white/[.64] shadow-s-34 backdrop-blur-[125px] xs:h-[160px] xs:p-8 xs:pb-5 sm:h-[160px] sm:p-8 sm:pb-5 md:h-[160px] md:p-8 md:pb-5 lg:h-[170px] lg:p-7 lg:pb-5 xl:h-[180px] xl:p-8 xl:pb-5'
                    : 'gap-[14px] bg-transparent xs:pl-8 sm:pl-8 md:pl-8 lg:pl-7 xl:pl-8',
                  'flex flex-col items-start rounded-[42px] transition-all duration-500 ease-in-out xs:w-[160px] sm:w-[160px] md:w-[160px] lg:w-[170px] xl:w-[180px]'
                )}
              >
                <img
                  src={benefit.icon(inxActiveBox === index)}
                  alt={inxActiveBox === index ? 'black' : 'lỉnear'}
                  className={classNames(inxActiveBox !== index ? 'w-[42px]' : 'w-[56px]')}
                />
                <p
                  dangerouslySetInnerHTML={{ __html: benefit?.title as string }}
                  className={classNames(
                    inxActiveBox === index ? 'text-gradien-benefit' : 'text-black',
                    'text-nowrap text-[16px]/[24px] font-semibold transition-colors duration-500 ease-in-out'
                  )}
                />
              </div>
            ))}
          </div>
        </div>
        <Lottie
          data-aos='zoom-in-up'
          animationData={astronaut}
          className='absolute top-0 z-10 xs:w-[520px] sm:w-[520px] md:w-[520px] lg:-top-80 lg:left-0 lg:w-[400px] lg:rotate-[30deg] xl:-right-10 xl:left-auto xl:top-0 xl:w-[520px] xl:rotate-0 3xl:-top-10 3xl:right-20 3xl:w-[700px]'
        />
      </div>
    </section>
  )
})

export default Benefits
