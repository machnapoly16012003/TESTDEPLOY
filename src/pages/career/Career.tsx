import Lottie from 'lottie-react'
import { memo } from 'react'
import toast from 'react-hot-toast'
import { RiInformation2Fill } from 'react-icons/ri'
import images from '~/assets'
import astronaut from '~/assets/animation/astronaut-vision.json'
import useResponsive from '~/hooks/useResponsive'
import { Benefits, CareerProgression, ComputerVision, JobOpportunities } from '~/section/career'

const Career = memo(() => {
  const xlDown = useResponsive('down', 'xl')
  const smDown = useResponsive('down', 'sm')

  return (
    <div className='overflow-hidden bg-[#f4f7f9] pt-20'>
      <section className='grid w-full xs:grid-cols-1 xs:gap-7 xs:px-4 sm:grid-cols-1 sm:gap-7 sm:px-4 md:grid-cols-1 md:gap-7 md:px-5 lg:grid-cols-2 lg:gap-0 lg:px-0 xl:max-w-[1440px] 3xl:max-w-full'>
        <div className='relative col-span-1 flex h-full w-full flex-col justify-center lg:pl-10 xl:pl-[100px] 3xl:pl-[200px]'>
          <h1
            data-aos={smDown ? 'fade-down' : xlDown ? 'fade-down' : 'fade-right'}
            className='z-10 text-nowrap font-semibold text-black xs:mt-5 xs:text-center xs:text-[36px]/[48px] xs:tracking-[-2px] sm:mt-5 sm:text-center sm:text-[36px]/[48px] sm:tracking-[-2px] md:mt-20 md:text-center md:text-[56px]/[66px] md:tracking-[-2px] lg:mt-0 lg:text-left lg:text-[46px]/[56px] lg:tracking-normal xl:text-[56px]/[66px] 3xl:text-[60px]/[70px]'
          >
            Empower Your <br />
            <span className='text-nowrap font-normal'>
              Career at FI.AI: <br />
              innovating AI platform!
            </span>
          </h1>

          <p
            data-aos={smDown ? 'fade-down' : xlDown ? 'fade-down' : 'fade-right'}
            className='z-10 mt-6 font-normal tracking-[2%] text-black xs:text-center xs:text-[14px]/[26px] sm:text-center sm:text-[14px]/[26px] md:px-16 md:text-center md:text-[16px]/[26px] lg:mt-5 lg:px-0 lg:text-left lg:text-[15px]/[25px] xl:text-[16px]/[26px] 3xl:mt-8 3xl:text-[18px]/[28px]'
          >
            FIAI is an AI and machine learning platform that can help millions{' '}
            <br className='xs:hidden md:hidden lg:block xl:block' /> of traditional customers have a seamless end-to-end
            experience.{' '}
            <span className='cursor-pointer text-[14px]/[26px] text-[#000CE8] underline 3xl:text-[16px]/[26px]'>
              See More
            </span>
          </p>

          <button
            data-aos={smDown ? 'fade-down' : xlDown ? 'fade-down' : ''}
            onClick={() =>
              toast('SignIn feature is currently unavailable. Please try again later.', {
                icon: <RiInformation2Fill color='#5495FC' className='size-10' />
              })
            }
            className='btn-explorer-now z-10 flex items-center justify-center rounded-[10px] text-[16px]/[32px] text-white transition duration-200 ease-in-out hover:scale-[101%] xs:mx-auto xs:mt-7 xs:h-[52px] xs:w-[172px] sm:mx-auto sm:mt-7 sm:h-[52px] sm:w-[172px] md:mx-auto md:mt-8 md:h-[52px] md:w-[172px] lg:mx-0 lg:mt-8 lg:h-12 lg:w-[145px] xl:mt-11 xl:h-[52px] 3xl:mt-12 3xl:text-[18px]/[32px]'
          >
            Explore Now
          </button>

          <img src={images.bg.bg_career_left} className='absolute -left-14 -top-20 z-0 3xl:-left-5 3xl:-top-5' />
        </div>
        <div data-aos='zoom-in-up' className='relative col-span-1'>
          <Lottie animationData={astronaut} className='relative z-10 3xl:w-[95%]' />
          <img
            src={images.bg.bg_career_left}
            className='absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 3xl:h-full 3xl:-translate-x-1/3'
          />
        </div>
      </section>

      <div className='mt-20'>
        <JobOpportunities />
      </div>

      <ComputerVision />

      <Benefits />

      <CareerProgression />
    </div>
  )
})

export default Career
