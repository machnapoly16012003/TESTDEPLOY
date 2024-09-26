import { memo } from 'react'
import images from '~/assets'
import { BoxContentComponent } from '~/components/feature/boxContentComponent'

const Components = memo(() => {
  return (
    <section className='relative mt-[80px] min-h-[1150px] bg-[#F2F5FF] pb-[300px]'>
      <h1 className='overflow-hidden text-nowrap text-right text-[240px]/[252px] font-bold uppercase tracking-[2%] text-[#7878780A] xl:translate-x-32 3xl:translate-x-72'>
        Components
      </h1>
      <h3 className='-translate-y-40 text-right text-[50px]/[55px] font-bold text-black xl:mr-5 3xl:mr-10'>
        AI Service Components
      </h3>

      <div className='absolute top-[20%] z-50 space-y-10 xl:left-[25%] 3xl:left-[35%]'>
        <BoxContentComponent
          icon={images.icon.ai_data}
          title='AI Data Processors'
          content='Process large volumes of data quickly and efficiently, enabling real-time decision-making for your business'
          className='ml-[109px] w-[579px]'
        />
        <BoxContentComponent
          icon={images.icon.ai_camera}
          title='Real-Time Communication (RTC)'
          content='AI analysis based on video streaming Real-Time Communications (RTC) technology, processed on-site on Edge AI devices, do not storage any data'
          className='ml-[243px] w-[635px]'
        />
        <BoxContentComponent
          icon={images.icon.software}
          title='Custom Software Solutions'
          content='Highly customizable software for automation, monitoring, and predictive analytics, seamlessly integrating with your AI hardware'
          className='ml-[386px] w-[663px]'
        />
        <BoxContentComponent
          icon={images.icon.ai_base}
          title='AI Knowledge Base'
          content='An evolving AI system that learns from both internet data and your input, ensuring accurate and relevant solutions over time'
          className='ml-[172px] w-[666px]'
        />
        <BoxContentComponent
          icon={images.icon.rtc}
          title='Real-time Analytics and Reports'
          content='Continuously monitors data to generate detailed, real-time reports, helping you make informed, data-driven decisions quickly'
          className='w-[751px]'
        />
      </div>

      <img
        src={images.componets.earth_line_big}
        alt='earth-line-big'
        className='xl:-translate-x-[45%] xl:-translate-y-[18%] 3xl:-translate-x-[25%] 3xl:-translate-y-[18%]'
      />

      <img
        src={images.gettingStarted.gt_earth_2}
        alt='gt_earth_2'
        className='absolute bottom-[-250px] right-[-300px]'
      />

      <img
        src={images.gettingStarted.gt_earth_4}
        alt='gt_earth_4'
        className='translateY-5s absolute left-[43%] top-[220px] z-10'
      />

      <img
        src={images.gettingStarted.gt_earth_5}
        alt='gt_earth_5'
        className='translateY-5s absolute right-[28%] top-[43.5%] z-10 w-[166px]'
      />

      <img
        src={images.gettingStarted.gt_earth_3}
        alt='gt_earth_3'
        className='translateY-5s absolute bottom-[16%] right-[12%]'
      />

      <img src={images.gettingStarted.gt_earth_6} alt='gt_earth_6' className='absolute -left-5 bottom-10' />

      <img src={images.bg.gradient_box} alt='gradiant-box' className='absolute bottom-0 left-36 w-[400px]' />

      <img
        src={images.gettingStarted.earth_line}
        alt='gradiant-box'
        className='translateY-5s absolute right-20 top-[280px] w-[190px]'
      />

      <img
        src={images.gettingStarted.earth_line}
        alt='gradiant-box'
        className='translateY-5s absolute bottom-[9%] right-80 w-[190px]'
      />
    </section>
  )
})

export default Components
