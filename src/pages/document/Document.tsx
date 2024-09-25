import React from 'react'
import video from '~/assets/video/document_2409.mp4'
export default function Document() {
  return (
    <React.Fragment>
      <div className='relative h-screen w-full translate-y-5'>
        <video
          preload='true'
          autoPlay
          muted={true}
          loop={true}
          playsInline={true}
          poster='/under-construction-placeholder.png'
          className='h-full w-full object-cover'
          style={{
            objectPosition: '52% center'
          }}
        >
          <source src={video} type='video/mp4' />
        </video>
        <div className='container absolute inset-0 z-50 flex w-full flex-col items-center justify-center gap-5 text-center text-white'>
          <h2 className='text-[30px] font-semibold capitalize md:text-[64px]'>Getting Started with AI Services</h2>
          <p className='text-sm font-medium md:text-base'>
            Welcome to our AI platform! Follow these simple steps to begin using AI to power your business or personal
            projects. <br />
            To start, choose your path: if you’ve already received a consultation, proceed to register for our services;
            if you're ready to sign up directly, explore our packages and sign up now; or if you need more information,
            our team of experts is available to provide tailored advice on how AI can support your goals. <br />
            Next, you’ll be directed to select your AI hardware and solutions. If you haven’t received consultation yet,
            you’ll need to purchase the equipment yourself. We offer a range of pre-configured AI solutions, including
            data processors, 4K AI cameras, and custom software designs. If you have a referral code from a consultant,
            enter it to borrow the equipment for free, or if not, you will need to place a deposit for the equipment.{' '}
            <br />
            Then, choose the right AI package from six different options, each tailored to different levels of
            complexity and service quality. After selecting your package, simply complete the payment via Visa or
            Mastercard to secure your order, and we’ll ship the equipment directly to you. Don’t forget to confirm your
            email to receive updates on your AI setup process. Once your equipment arrives, you can log into the app to
            start tracking reports, analyzing data, and getting real-time AI insights. Start your AI journey today and
            let us handle the technical complexities so you can focus on making data-driven decisions more effectively!
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}
