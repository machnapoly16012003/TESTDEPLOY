import Lottie from 'lottie-react'
import { memo } from 'react'
import toast from 'react-hot-toast'
import { RiInformation2Fill } from 'react-icons/ri'
import images from '~/assets'
import astronaut from '~/assets/animation/astronaut-vision.json'
import { Benefits, CareerProgression, ComputerVision, JobOpportunities } from '~/section/career'

const Career = memo(() => {
  return (
    <div className='bg-[#f4f7f9] pt-20'>
      <section className='grid w-full grid-cols-2 xl:max-w-[1440px] 3xl:max-w-full'>
        <div className='relative col-span-1 flex h-full w-full flex-col justify-center lg:pl-10 xl:pl-[100px] 3xl:pl-[200px]'>
          <h1
            data-aos='fade-right'
            className='z-10 text-nowrap font-semibold text-black xs:text-[56px]/[66px] sm:text-[56px]/[66px] md:text-[56px]/[66px] lg:text-[46px]/[56px] xl:text-[56px]/[66px] 3xl:text-[60px]/[70px]'
          >
            Empower Your <br />
            <span className='font-normal'>
              Career at FI.AI: <br />
              Innovating Finance!
            </span>
          </h1>

          <p
            data-aos='fade-right'
            className='z-10 mt-6 font-normal tracking-[2%] text-black xs:text-[16px]/[26px] sm:text-[16px]/[26px] md:text-[16px]/[26px] lg:mt-5 lg:text-[15px]/[25px] xl:text-[16px]/[26px] 3xl:mt-8 3xl:text-[18px]/[28px]'
          >
            FI.AI is a start-up in the iBe ecosystem, specializing in AI solutions{' '}
            <br className='xs:hidden md:hidden lg:hidden xl:block' /> for financial platforms. We partner with Fintech
            companies to <br className='xs:hidden md:hidden lg:hidden xl:block' /> innovate and enhance user
            experiences, driven by a team of <br className='xs:hidden md:hidden lg:hidden xl:block' /> experts from top
            institutions and firms.{' '}
            <span className='cursor-pointer text-[14px]/[26px] text-[#000CE8] underline 3xl:text-[16px]/[26px]'>
              See More
            </span>
          </p>

          <button
            onClick={() =>
              toast('SignIn feature is currently unavailable. Please try again later.', {
                icon: <RiInformation2Fill color='#5495FC' className='size-10' />
              })
            }
            className='btn-explorer-now z-10 flex w-[145px] items-center justify-center rounded-[10px] text-[16px]/[32px] text-white transition duration-200 ease-in-out hover:scale-[101%] xs:mt-11 xs:h-[52px] sm:mt-11 sm:h-[52px] md:mt-11 md:h-[52px] lg:mt-8 lg:h-12 xl:mt-11 xl:h-[52px] 3xl:mt-12 3xl:text-[18px]/[32px]'
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
