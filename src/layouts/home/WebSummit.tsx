import { memo } from 'react'
import images from '~/assets'

const WebSummit = memo(() => {
  return (
    <section className='relative mb-[120px] w-full'>
      <img src={images.bg.bg_web_summit} alt='web-summit' className='h-full w-full' />

      <div className='absolute bottom-[13%] left-1/2 -translate-x-1/2 transform space-y-2 text-center'>
        <h3 className='text-blackDark text-[64px]/[76px] font-semibold'>
          Fi.Ai will be participating <br />
          in the programme with
        </h3>
        <h2 className='text-gradien-web-summit text-[96px]/[106px] font-semibold'>+70.000 attendees</h2>
        <p className='!mt-4 text-[18px]/[28px] text-black/[.64]'>
          at #WebSummit in Lisbon this year, from November 11-14. If you’d like to learn more about our company, be sure
          to visit our booth during the event
        </p>
      </div>
    </section>
  )
})

export default WebSummit
