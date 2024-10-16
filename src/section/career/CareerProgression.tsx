import classNames from 'classnames'
import { memo, useEffect, useRef, useState } from 'react'
import images from '~/assets'
import './styles.scss'
import ApplyCVDialog from './ApplyCVDialog'
import useDialog from '~/hooks/useDialog'
import astronaut from '~/assets/animation/astronaut-progression.json'
import Lottie from 'lottie-react'

const listProgressions = [
  { id: 1, title: 'Entry-Level Position', position: '' },
  {
    id: 2,
    title: 'Mid-Level Position',
    position: 'xs:ml-[135px] sm:ml-[135px] md:ml-[135px] lg:ml-[120px] xl:ml-[135px]'
  },
  {
    id: 3,
    title: 'Senior-Level Position',
    position: 'xs:ml-[175px] sm:ml-[175px] md:ml-[175px] lg:ml-[150px] xl:ml-[175px]'
  },
  {
    id: 4,
    title: 'Managerial Position',
    position: 'xs:ml-[130px] sm:ml-[130px] md:ml-[130px] lg:ml-[115px] xl:ml-[130px]'
  },
  {
    id: 5,
    title: 'Executive Position',
    position: 'xs:-ml-[20px] sm:-ml-[20px] md:-ml-[20px] lg:-ml-[10px] xl:-ml-[20px]'
  }
]

const CareerProgression = memo(() => {
  const reportRef = useRef<HTMLDivElement>(null)

  const { isOpen, setIsOpen, handleOpen } = useDialog()

  const [viewing, setViewing] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setViewing(true), 500)
        } else {
          setViewing(false)
        }
      },
      { root: null, threshold: 0.1 }
    )

    if (reportRef.current) observer.observe(reportRef.current)

    return () => {
      if (reportRef.current) observer.unobserve(reportRef.current)
    }
  }, [])

  return (
    <>
      <section ref={reportRef} className='bg-getting px-[60px] pt-[140px] xl:max-w-[1440px] 3xl:max-w-full'>
        <h1
          data-aos='fade-right'
          className='font-semibold xs:text-[52px]/[72px] sm:text-[52px]/[72px] md:text-[52px]/[72px] lg:text-[48px]/[68px] xl:text-[52px]/[72px] 3xl:mt-20'
        >
          Career Progression Path
        </h1>

        <div className='relative flex w-fit -translate-x-10 items-center xs:-translate-y-[160px] sm:-translate-y-[160px] md:-translate-y-[160px] lg:-translate-x-[220px] lg:-translate-y-[80px] xl:-translate-x-[270px] xl:-translate-y-[140px] 3xl:ml-10'>
          <div
            // data-aos='fade-right'
            className='xs:min-w-[814px] sm:min-w-[814px] md:min-w-[814px] lg:min-w-[900px] xl:min-w-[1200px] 3xl:min-w-[1300px]'
          >
            {/* <img
              src={images.benefit.astronaut_progression}
              alt='astronaut-progression'
              className='translateY-5s w-full'
            /> */}
            <Lottie animationData={astronaut} className='' />
          </div>

          <img
            src={images.benefit.circle_line}
            alt='circle-line'
            className={classNames(
              viewing ? 'opacity-100' : 'opacity-0',
              'w-auto -translate-x-10 transition duration-500 ease-in-out lg:mt-10 lg:w-[190px] lg:-translate-x-[185px] xl:mt-0 xl:w-auto xl:-translate-x-[185px] 3xl:mt-[40px] 3xl:-translate-x-[70px]'
            )}
          />

          <div className='flex -translate-x-[270px] flex-col xs:gap-[72px] sm:gap-[72px] md:gap-[72px] lg:ml-8 lg:mt-10 lg:-translate-x-[420px] lg:gap-[50px] xl:ml-0 xl:mt-0 xl:-translate-x-[420px] xl:gap-[72px] 3xl:mt-[40px] 3xl:-translate-x-[300px]'>
            {listProgressions.map((item) => (
              <div
                key={item.id}
                // data-aos='fade-up'
                className={classNames(
                  item.position,
                  'flex items-center rounded-[80px] bg-white/[.64] p-[15px] shadow-s-37 backdrop-blur-[105px] xs:h-[100px] xs:w-[380px] xs:gap-5 sm:h-[100px] sm:w-[380px] sm:gap-5 md:h-[100px] md:w-[380px] md:gap-5 lg:h-[90px] lg:w-[330px] lg:gap-4 xl:h-[100px] xl:w-[380px] xl:gap-5'
                )}
              >
                <div
                  className='flex flex-shrink-0 items-center justify-center rounded-full bg-ln-black font-extrabold text-white xs:size-[70px] xs:text-[32px]/[36px] sm:size-[70px] sm:text-[32px]/[36px] md:size-[70px] md:text-[32px]/[36px] lg:size-[60px] lg:text-[28px]/[32px] xl:size-[70px] xl:text-[32px]/[36px]'
                  style={{ boxShadow: '0px 16.77px 25.16px 0px #4064E44D' }}
                >
                  {item.id}
                </div>
                <p className='text-[20px]/[18.87px] font-semibold'>{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleOpen}
          className={classNames(
            viewing ? 'opacity-100' : 'opacity-0',
            'btn-explorer-now z-50 flex w-[203px] items-center justify-center rounded-[10px] text-[22px]/[32px] font-bold text-white shadow-s-36 transition duration-200 ease-in-out hover:scale-[101%] xs:mt-11 xs:h-[52px] xs:-translate-y-[320px] sm:mt-11 sm:h-[52px] sm:-translate-y-[320px] md:mt-11 md:h-[52px] md:-translate-y-[320px] lg:mt-8 lg:h-[64px] lg:-translate-y-[200px] xl:mt-11 xl:h-[64px] xl:-translate-y-[320px] 3xl:mt-12 3xl:-translate-y-[300px] 3xl:text-[18px]/[32px]'
          )}
        >
          Apply Now
        </button>
      </section>

      <ApplyCVDialog open={isOpen} setOpen={setIsOpen} />
    </>
  )
})

export default CareerProgression
