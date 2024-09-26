import { memo } from 'react'
import images from '~/assets'

const WebSummit = memo(() => {
  return (
    <section className='relative w-full xs:mb-[100px] sm:mb-[100px] md:mb-[100px] lg:mb-[100px] xl:mb-[120px]'>
      <img
        src={images.bg.bg_web_summit}
        alt='web-summit'
        className='h-full w-full xs:hidden sm:hidden md:flex lg:flex xl:flex'
      />
      <img
        src={images.bg.bg_web_summit_sm}
        alt='web-summit'
        className='h-full w-full xs:flex sm:flex md:hidden lg:hidden xl:hidden'
      />

      <div className='absolute left-1/2 w-full -translate-x-1/2 transform space-y-2 text-center xs:bottom-[13%] xs:px-5 md:bottom-[8%] md:px-10 xl:bottom-[13%]'>
        <h3 className='font-semibold text-blackDark xs:text-[36px]/[46px] sm:text-[36px]/[46px] md:text-[32px]/[42px] lg:text-[36px]/[46px] xl:text-[64px]/[76px]'>
          Fi.Ai will be participating <br className='xs:hidden md:flex' />
          in the programme with
        </h3>
        <h2 className='text-gradien-web-summit mx-auto text-center font-semibold xs:text-[56px]/[64px] sm:text-[56px]/[64px] md:text-[70px]/[86px] lg:text-[70px]/[86px] xl:text-[96px]/[106px]'>
          +70.000 attendees
        </h2>
        <p className='!mt-4 text-black/[.64] xs:text-[18px]/[28px] sm:text-[18px]/[28px] md:text-[18px]/[28px]'>
          at #WebSummit in Lisbon this year, from November 11-14. If you’d like to learn more about our company, be sure
          to visit our booth during the event
        </p>
      </div>
    </section>
  )
})

export default WebSummit
