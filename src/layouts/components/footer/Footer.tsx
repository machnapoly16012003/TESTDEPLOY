import classNames from 'classnames'
import { FC, memo } from 'react'
import { FaMapLocationDot, FaPhoneVolume } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import images from '~/assets'
import { TimeCountdown } from '~/components/feature/timeCountdown'
import './styles.scss'

interface IFooterProps {}

const Footer: FC<IFooterProps> = memo(() => {
  return (
    <div
      className={classNames(
        'bg-footer bg-footer relative z-50 gap-[24px] overflow-hidden rounded-b-none rounded-t-3xl bg-black px-5 xs:py-5 md:py-10'
      )}
    >
      <div className='grid gap-10 xs:grid-cols-1 xs:px-0 md:grid-cols-1 md:px-5 lg:px-5 xl:grid-cols-2 xl:px-10'>
        <div className='col-span-1'>
          <div className='flex items-center gap-2 border-b border-white/[.44] pb-10 xs:w-full xl:w-[70%] 3xl:w-full'>
            <div className='size-10 flex-shrink-0'>
              <img src={images.logo.logo_fi} alt='logo' className='h-full w-full' />
            </div>
            <p className='text-[20px]/[30px] font-semibold text-white'>Fi Ai</p>
          </div>
          <div className='mt-10 flex flex-1 flex-col gap-4'>
            <p className='text-[16px]/[24px] font-semibold text-white'>Contact Us</p>
            <div className='flex items-center gap-3'>
              <FaPhoneVolume className='size-5' color='white' />
              <p className='text-[16px]/[24px] text-white'>Phone number: +1-714-548-6789</p>
            </div>
            <div className='flex items-center gap-3'>
              <MdEmail className='size-5' color='white' />
              <p className='text-[16px]/[24px] text-white'>Mail: in@fi.ai</p>
            </div>
            <div className='flex items-center gap-3'>
              <FaMapLocationDot className='size-5' color='white' />
              <p className='text-[16px]/[24px] text-white'>Address: 10300 Westoffice Dr #100 Houston, TX 77042</p>
            </div>
          </div>

          <div className='mt-10 flex flex-1 flex-col gap-5'>
            <p className='text-[16px]/[24px] font-semibold text-white'>Our Sponsor:</p>
            <div className='flex items-center gap-3'>
              <Link to=''>
                <img src={images.logo.amazon} alt='amazon' />
              </Link>
              <Link to=''>
                <img src={images.logo.amplitude} alt='amplitude' />
              </Link>
              <Link to=''>
                <img src={images.logo.confluent} alt='confluent' />
              </Link>
            </div>
          </div>

          <div className='mt-10 flex w-fit items-center gap-4 xs:flex-col sm:flex-col md:flex-row lg:flex-col xl:flex-row 3xl:gap-10'>
            <h1 className='w-full font-bold text-white xs:text-left xs:text-[28px]/[36px] md:text-[36px]/[54px]'>
              Unlock <br className='xs:hidden sm:hidden md:flex lg:hidden xl:flex' /> Your{' '}
              <br className='xs:hidden sm:hidden md:flex lg:hidden xl:flex' /> AI Savings!
            </h1>

            <div className='flex flex-col items-center justify-center gap-4'>
              <p className='text-[14px]/[21px] text-white xl:text-nowrap'>
                Enter your email to unlock this exclusive discount and <br className='xs:hidden sm:hidden md:flex' />{' '}
                power your business with cutting-edge AI technology.
              </p>
              <TimeCountdown duration={46440000} />
            </div>
          </div>

          <div className='bg-ln-input shadow-s-27 max-w-[595px] rounded-[12px] p-1 backdrop-blur-[4px] xs:mt-5 md:mt-8'>
            <div className='flex items-center bg-[#919191]/[.8] p-2 backdrop-blur-[40px] xs:bottom-7 xs:w-full xs:rounded-[10px] xs:pl-2 md:bottom-0 md:min-w-[536px] md:rounded-[10px] md:pl-4'>
              <input
                type='text'
                placeholder='Email, Phone number or Telegram ID'
                className='w-full text-white xs:h-[32px] xs:text-[10px] md:h-12 md:text-[16px]'
              />
              <button className='bg-ln-button-footer flex-shrink-0 font-semibold uppercase text-white xs:h-[32px] xs:w-[74px] xs:rounded-[5.23px] xs:text-[10px] md:h-12 md:w-[135px] md:rounded-[8px] md:text-[16px]'>
                Claim Offer
              </button>
            </div>
          </div>
        </div>

        <div className='relative col-span-1 w-full'>
          <div className='xs:h-[400px] xs:w-[115%] xs:-translate-x-10 sm:h-[700px] md:h-[660px] md:w-[115%] md:-translate-x-20 lg:h-0'>
            <img
              src={images.image.model_footer}
              alt='bg-footer'
              className='w-full xs:flex sm:flex md:flex lg:hidden xl:hidden'
            />
          </div>
        </div>
      </div>

      <img
        src={images.image.model_footer}
        alt='bg-footer'
        className='absolute xs:hidden sm:hidden md:hidden md:w-[700px] lg:right-0 lg:top-7 lg:flex lg:w-[650px] xl:-right-3 xl:top-1 xl:flex xl:w-[860px] 3xl:right-[2%] 3xl:w-[900px]'
      />

      <div className='w-full'>
        <div className='xs:w-[300%] md:mt-[50px] md:w-full'>
          <img src={images.bg.bg_text_footer} alt='bg-text-footer' className='mx-auto h-auto md:w-full' />
        </div>

        <div className='mb-10 mt-10 h-[2px] w-full bg-ln-line-footer' />

        <div className='mx-auto flex items-center justify-between gap-4 text-white xs:w-fit xs:flex-col md:w-full md:flex-row'>
          <p className='text-[14px]/[19.6px] xs:hidden md:flex'>Terms of Service</p>
          <p className='text-[14px]/[19.6px]'>© 2024 AI Chatbot, Inc. All rights reserved</p>
          <p className='w-[113px] text-[14px]/[19.6px] xs:hidden md:flex'>Privacy Policy</p>

          <div className='w-full items-center justify-center xs:flex md:hidden'>
            <p className='text-[14px]/[19.6px]'>Terms of Service</p>
            <p className='text-[14px]/[19.6px]'>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Footer
