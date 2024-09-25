import classNames from 'classnames'
import { FC, memo } from 'react'
import { FaMapLocationDot, FaPhoneVolume } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import images from '~/assets'

interface IFooterProps {}

const Footer: FC<IFooterProps> = memo(() => {
  return (
    <div
      className={classNames('relative z-50 gap-[24px] rounded-b-none rounded-t-3xl bg-[#0D0D0D] px-5 xs:py-5 md:py-10')}
    >
      <div className='grid gap-10 xs:grid-cols-1 xs:px-0 md:grid-cols-1 md:px-10 xl:grid-cols-2'>
        <div className='col-span-1'>
          <div className='flex items-center gap-2 border-b border-white/[.44] pb-10 xs:w-full xl:w-[70%]'>
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
        </div>

        <div className='relative col-span-1 w-full'>
          <div className='mx-auto w-fit overflow-hidden xs:h-[350px] md:h-[500px]'>
            <img src={images.bg.bg_footer} alt='bg-footer' className='w-full' />
          </div>

          <div className='absolute left-1/2 flex max-w-[536px] -translate-x-1/2 transform items-center bg-box-input bg-cover bg-no-repeat object-cover object-center p-2 backdrop-blur-[80px] xs:bottom-7 xs:w-full xs:rounded-[10px] xs:pl-2 md:bottom-0 md:min-w-[536px] md:rounded-2xl md:pl-4'>
            <input
              type='text'
              placeholder='Email, Phone number or Telegram ID'
              className='w-full text-white xs:h-[32px] xs:text-[10px] md:h-12 md:text-[16px]'
            />
            <button className='flex-shrink-0 bg-[#B84EFF] font-semibold uppercase text-white xs:h-[32px] xs:w-[74px] xs:rounded-[5.23px] xs:text-[10px] md:h-12 md:w-[112px] md:rounded-[8px] md:text-[16px]'>
              Register
            </button>
          </div>
        </div>
      </div>

      <div className='w-full'>
        <div className='xs:w-[300%] md:mt-[50px] md:w-full'>
          <img src={images.bg.bg_text_footer} alt='bg-text-footer' className='mx-auto h-auto md:w-full' />
        </div>

        <div className='mb-10 mt-10 h-[2px] w-full bg-ln-line-footer' />

        <div className='mx-auto flex items-center justify-between gap-4 text-white xs:w-fit xs:flex-col md:w-full md:flex-row'>
          <p className='text-[14px]/[19.6px] xs:hidden md:flex'>Terms of Service</p>
          <p className='text-[14px]/[19.6px]'>© 2024 AI Chatbot, Inc. All rights reserved</p>
          <p className='text-[14px]/[19.6px] xs:hidden md:flex'>Privacy Policy</p>

          <div className='w-full items-center justify-between xs:flex md:hidden'>
            <p className='text-[14px]/[19.6px]'>Terms of Service</p>
            <p className='text-[14px]/[19.6px]'>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Footer
