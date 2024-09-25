import classNames from 'classnames'
import { FC, memo } from 'react'
import { FaPhoneVolume } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import images from '~/assets'

interface IFooterProps {}

const Footer: FC<IFooterProps> = memo(() => {
  return (
    <div className={classNames('relative z-50 gap-[24px] rounded-b-none rounded-t-3xl bg-[#0D0D0D] px-5 py-10')}>
      <div className='grid grid-cols-2 gap-10 px-10'>
        <div className='col-span-1'>
          <div className='flex w-[70%] items-center gap-2 border-b border-white/[.44] pb-10'>
            <div className='size-10 flex-shrink-0'>
              <img src={images.logo.logo_fi} alt='logo' className='h-full w-full' />
            </div>
            <p className='text-[20px]/[30px] font-semibold text-white'>Fi Ai</p>
          </div>
          <div className='mt-10 flex flex-1 flex-col gap-4'>
            <p className='text-[16px]/[24px] font-semibold text-white'>Contact Us</p>
            <div className='flex items-center gap-3'>
              <FaPhoneVolume className='size-5' color='white' />
              <p className='text-[16px]/[24px] text-white'>Phone number: +358 9 2316 1426 </p>
            </div>
            <div className='flex items-center gap-3'>
              <MdEmail className='size-5' color='white' />
              <p className='text-[16px]/[24px] text-white'>Mail: chatbot@gmail.com</p>
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
          <div className='mx-auto h-[500px] w-fit overflow-hidden'>
            <img src={images.bg.bg_footer} alt='bg-footer' className='w-full' />
          </div>

          <div className='bg-box-input absolute bottom-0 left-1/2 flex min-w-[536px] max-w-[536px] -translate-x-1/2 transform items-center rounded-2xl p-2 pl-4 backdrop-blur-[80px]'>
            <input
              type='text'
              placeholder='Email, Phone number or Telegram ID'
              className='h-12 w-full text-[16px] text-white'
            />
            <button className='h-12 w-[112px] flex-shrink-0 rounded-[8px] bg-[#B84EFF] font-semibold uppercase text-white'>
              Register
            </button>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='w-full md:mt-[50px]'>
          <img src={images.bg.bg_text_footer} alt='bg-text-footer' className='mx-auto h-auto w-full' />
        </div>

        <div className='bg-ln-line-footer border: 1px solid; mb-10 mt-10 h-[2px] w-full' />

        <div className='flex items-center justify-between text-white'>
          <p className='text-[14px]/[19.6px]'>Terms of Service</p>
          <p className='text-[14px]/[19.6px]'>© 2024 AI Chatbot, Inc. All rights reserved</p>
          <p className='text-[14px]/[19.6px]'>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
})

export default Footer
