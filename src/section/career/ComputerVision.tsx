import { memo, useState } from 'react'
import images from '~/assets'
import { listVisions } from '~/assets/mock/career'
import { BoxVision } from '~/components/feature/boxVision'

const ComputerVision = memo(() => {
  const [inxActiveBox, setInxActiveBox] = useState<number>(1)

  return (
    <section className='relative mt-[50px] flex items-start pt-[70px] xl:max-w-[1440px] 3xl:max-w-full'>
      <div className='absolute top-[70px] font-semibold text-black xs:left-1/2 xs:-translate-x-1/2 sm:left-1/2 sm:-translate-x-1/2 md:left-1/2 md:-translate-x-1/2 lg:left-[100px] lg:translate-x-0 xl:w-[650px] 3xl:left-[200px]'>
        <h1
          data-aos='fade-right'
          className='min-w-[250px] text-nowrap xs:text-[36px]/[40px] sm:text-[36px]/[40px] md:text-[70px]/[52px] lg:text-[70px]/[52px] xl:text-[80px]/[66px]'
        >
          AI Developer
        </h1>
        <h3
          data-aos='fade-right'
          className='min-w-[230px] translate-x-20 text-nowrap xs:mt-3 xs:text-center xs:text-[24px]/[28px] sm:mt-3 sm:text-center sm:text-[24px]/[28px] md:mt-6 md:text-center md:text-[36px]/[52px] lg:mt-6 lg:text-right lg:text-[36px]/[52px] xl:mt-6 xl:text-[42px]/[66px]'
        >
          (computer vision)
        </h3>
      </div>

      <div className='absolute top-40 xs:-left-[80px] xs:w-[480px] sm:-left-[80px] sm:w-[480px] md:-left-[40px] md:w-[800px] lg:-left-[200px] lg:w-[800px] xl:-left-[80px] xl:w-[880px] 3xl:left-10 3xl:top-40'>
        <img data-aos='zoom-in-down' src={images.vision.vision_ball_big} alt='vision-ball-big' className='w-full' />
      </div>

      <img
        src={images.vision.vision_ball_1}
        alt='vision-ball-1'
        className='translateY-5s absolute xs:bottom-[550px] xs:left-4 xs:size-[22px] sm:bottom-[550px] sm:left-4 sm:size-[22px] md:bottom-[750px] md:left-[60px] md:size-auto lg:bottom-10 3xl:left-[200px]'
      />
      <img
        src={images.vision.vision_ball_2}
        alt='vision-ball-2'
        className='translateY-4s absolute xs:right-[0] xs:top-[180px] xs:w-11 sm:right-[0] sm:top-[180px] sm:w-11 md:right-[0%] md:top-[200px] md:w-auto lg:right-[16%] lg:top-[160px] xl:right-[42%] xl:top-[290px]'
      />
      <img
        src={images.vision.vision_ball_3}
        alt='vision-ball-3'
        className='translateY-8s absolute xs:bottom-[160px] xs:right-[40.5%] sm:bottom-[160px] sm:right-[40.5%] md:bottom-[80px] md:right-[75%] lg:bottom-[120px] lg:right-[52%] xl:bottom-[160px] xl:right-[40.5%]'
      />

      <div className='flex flex-1 flex-col items-end xs:mt-[540px] xs:gap-6 xs:px-4 sm:mt-[540px] sm:gap-6 sm:px-4 md:mt-[800px] md:gap-6 md:pr-5 lg:mt-[184px] lg:gap-5 lg:pr-0 3xl:pr-[100px]'>
        {listVisions.map((vision, index) => (
          <div
            data-aos='fade-left'
            key={vision.id}
            onMouseEnter={() => setInxActiveBox(index)}
            onMouseLeave={() => setInxActiveBox(1)}
          >
            <BoxVision vision={vision} isActive={inxActiveBox === index} />
          </div>
        ))}
      </div>
    </section>
  )
})

export default ComputerVision
