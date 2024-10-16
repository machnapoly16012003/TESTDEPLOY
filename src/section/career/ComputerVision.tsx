import { memo, useState } from 'react'
import images from '~/assets'
import { listVisions } from '~/assets/mock/career'
import { BoxVision } from '~/components/feature/boxVision'

const ComputerVision = memo(() => {
  const [inxActiveBox, setInxActiveBox] = useState<number>(1)

  return (
    <section className='relative mt-[50px] flex items-start pt-[70px] xl:max-w-[1440px] 3xl:max-w-full'>
      <div className='absolute left-[100px] top-[70px] font-semibold text-black xl:w-[650px] 3xl:left-[200px]'>
        <h1
          data-aos='fade-right'
          className='xs:text-[70px]/[52px] sm:text-[70px]/[52px] md:text-[70px]/[52px] lg:text-[70px]/[52px] xl:text-[80px]/[66px]'
        >
          AI Developer
        </h1>
        <h3
          data-aos='fade-right'
          className='mt-6 translate-x-20 text-right xs:text-[36px]/[52px] sm:text-[36px]/[52px] md:text-[36px]/[52px] lg:text-[36px]/[52px] xl:text-[42px]/[66px]'
        >
          (computer vision)
        </h3>
      </div>

      <img
        data-aos='zoom-in-down'
        src={images.vision.vision_ball_big}
        alt='vision-ball-big'
        className='absolute top-40 xs:-left-[130px] sm:-left-[130px] md:-left-[130px] lg:-left-[200px] lg:w-[800px] xl:-left-[80px] xl:w-[880px] 3xl:left-10 3xl:top-40'
      />
      <img
        src={images.vision.vision_ball_1}
        alt='vision-ball-1'
        className='translateY-5s absolute bottom-10 left-[60px] 3xl:left-[200px]'
      />
      <img
        src={images.vision.vision_ball_2}
        alt='vision-ball-2'
        className='translateY-4s absolute xs:right-[42%] xs:top-[290px] sm:right-[42%] sm:top-[290px] md:right-[42%] md:top-[290px] lg:right-[16%] lg:top-[160px] xl:right-[42%] xl:top-[290px]'
      />
      <img
        src={images.vision.vision_ball_3}
        alt='vision-ball-3'
        className='translateY-8s absolute xs:bottom-[160px] xs:right-[40.5%] sm:bottom-[160px] sm:right-[40.5%] md:bottom-[160px] md:right-[40.5%] lg:bottom-[120px] lg:right-[52%] xl:bottom-[160px] xl:right-[40.5%]'
      />

      <div className='mt-[184px] flex flex-1 flex-col items-end gap-5 3xl:pr-[100px]'>
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
