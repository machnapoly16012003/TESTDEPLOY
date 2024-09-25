import { memo } from 'react'
import images from '~/assets'
import { BoxGettingStarted } from '~/components/boxGettingStarted'
import './styles.scss'

const GettingStarted = memo(() => {
  return (
    <section className='relative h-auto bg-[#F2F5FF]'>
      <div className='bg-getting pb-[350px] pt-40'>
        <div className='space-y-4 text-center text-black'>
          <h1 className='text-[48px]/[52.8px] font-bold'>Getting Started with AI Services</h1>
          <p className='text-[18px]/[25.2px] font-normal tracking-[0.2px]'>
            Welcome to our AI platform! Follow these simple s to begin <br /> using AI to power your business or
            personal projects
          </p>
        </div>

        <div className='relative mx-auto mt-[126px] flex w-fit items-center justify-center gap-10'>
          <BoxGettingStarted
            icon={<img src={images.icon.your_path} alt='your-path' />}
            title='Choose Your Path'
            content="Register for services if you’ve had a consultation, sign up now if you're ready, or request expert advice if you need more info."
            className='z-20 h-[295px]'
          />
          <BoxGettingStarted
            icon={<img src={images.icon.hardware_solutions} alt='hardware-solutions' />}
            title='Select Hardware & Solutions'
            content='Pick your AI equipment and solutions. Without consultation, purchase it yourself, or enter a referral code to borrow equipment for free, with a deposit if needed.'
            className='z-20 h-[342px]'
          />
          <BoxGettingStarted
            icon={<img src={images.icon.ai_package} alt='ai-package' />}
            title='Choose an AI Package'
            content='Select from six AI packages, pay via Visa/Mastercard, and confirm your email. Once the equipment arrives, log into the app to track reports and get AI insights.'
            className='z-20 h-[295px]'
          />

          <img
            src={images.gettingStarted.gt_earth_4}
            alt='gt_earth_4'
            className='translateY-5s absolute left-[285px] top-[-25px] z-10'
          />
          <img
            src={images.gettingStarted.gt_earth_5}
            alt='gt_earth_5'
            className='translateY-8s absolute bottom-12 right-44 z-10'
          />
        </div>

        <img src={images.gettingStarted.gt_earth_1} alt='gt_earth_1' className='absolute left-0 top-40' />
        <img
          src={images.gettingStarted.gt_earth_2}
          alt='gt_earth_2'
          className='absolute bottom-[-220px] right-[-250px]'
        />
        <img
          src={images.gettingStarted.gt_earth_3}
          alt='gt_earth_3'
          className='translateY-4s absolute bottom-60 left-1/2 -translate-x-1/2 transform'
        />
        <img src={images.gettingStarted.gt_earth_6} alt='gt_earth_6' className='absolute -bottom-10 -left-5' />
      </div>
    </section>
  )
})

export default GettingStarted
