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
    position: 'xs:ml-[75px] sm:ml-[75px] md:ml-[135px] lg:ml-[120px] xl:ml-[135px]'
  },
  {
    id: 3,
    title: 'Senior-Level Position',
    position: 'xs:ml-[94px] sm:ml-[94px] md:ml-[175px] lg:ml-[150px] xl:ml-[175px]'
  },
  {
    id: 4,
    title: 'Managerial Position',
    position: 'xs:ml-[75px] sm:ml-[75px] md:ml-[130px] lg:ml-[115px] xl:ml-[130px]'
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
          setTimeout(() => setViewing(true), 1000)
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
      <section
        ref={reportRef}
        className='bg-getting pt-[140px] xs:px-4 sm:px-4 md:px-[60px] md:pb-[140px] lg:pb-0 xl:max-w-[1440px] 3xl:max-w-full'
      >
        <h1
          data-aos='fade-right'
          className='font-semibold xs:text-[48px]/[50px] sm:text-[48px]/[50px] md:translate-y-20 md:text-[52px]/[72px] lg:text-[48px]/[68px] xl:text-[52px]/[72px] 3xl:mt-20'
        >
          Career{' '}
          <span className='xs:text-[36px]/[50px] sm:text-[36px]/[50px] md:text-[52px]/[72px] lg:text-[48px]/[68px] xl:text-[52px]/[72px]'>
            Progression Path
          </span>
        </h1>

        <div className='relative flex w-fit items-center xs:-translate-x-40 xs:-translate-y-[100px] xs:flex-col xs:justify-center sm:-translate-x-10 sm:-translate-y-[160px] sm:flex-col md:-translate-x-72 md:-translate-y-[0px] md:flex-col md:items-center md:justify-center lg:-translate-x-[220px] lg:-translate-y-[80px] lg:flex-row xl:-translate-x-[270px] xl:-translate-y-[140px] 3xl:ml-10'>
          <div
            data-aos='fade-right'
            className='xs:min-w-[700px] sm:min-w-[700px] md:min-w-[1200px] lg:min-w-[900px] xl:min-w-[1200px] 3xl:min-w-[1300px]'
          >
            <Lottie animationData={astronaut} />
          </div>

          <div className='flex w-full items-center justify-end xs:-translate-y-20 sm:-translate-y-20 md:translate-y-0'>
            <img
              src={images.benefit.circle_line}
              alt='circle-line'
              className={classNames(
                viewing ? 'opacity-100' : 'opacity-0',
                'w-auto transition duration-500 ease-in-out xs:w-[130px] xs:-translate-x-20 sm:w-[130px] sm:-translate-x-10 md:w-[240px] md:-translate-x-10 lg:mt-10 lg:w-[190px] lg:-translate-x-[40px] xl:mt-0 xl:w-auto xl:translate-x-[50px] 3xl:mt-[40px] 3xl:translate-x-[30px]'
              )}
            />

            <div className='flex flex-col xs:-translate-x-[200px] xs:gap-[37px] sm:-translate-x-[120px] sm:gap-[37px] md:-translate-x-[270px] md:gap-[72px] lg:ml-8 lg:mt-10 lg:-translate-x-[260px] lg:gap-[50px] xl:ml-0 xl:mt-0 xl:-translate-x-[180px] xl:gap-[72px] 3xl:mt-[40px] 3xl:-translate-x-[200px]'>
              {listProgressions.map((item) => (
                <div
                  key={item.id}
                  // data-aos='fade-up'
                  className={classNames(
                    item.position,
                    viewing ? 'opacity-100' : 'opacity-0',
                    'flex items-center rounded-[80px] bg-white/[.64] shadow-s-37 backdrop-blur-[105px] xs:h-[50px] xs:w-[215px] xs:gap-[10px] xs:px-[8px] sm:h-[50px] sm:w-[215px] sm:gap-[10px] sm:px-[8px] md:h-[100px] md:w-[380px] md:gap-5 md:p-[15px] lg:h-[90px] lg:w-[330px] lg:gap-4 xl:h-[100px] xl:w-[380px] xl:gap-5'
                  )}
                >
                  <div
                    className='flex flex-shrink-0 items-center justify-center rounded-full bg-ln-black font-extrabold text-white xs:size-[35px] xs:text-[16px]/[18px] sm:size-[35px] sm:text-[16px]/[18px] md:size-[70px] md:text-[32px]/[36px] lg:size-[60px] lg:text-[28px]/[32px] xl:size-[70px] xl:text-[32px]/[36px]'
                    style={{ boxShadow: '0px 16.77px 25.16px 0px #4064E44D' }}
                  >
                    {item.id}
                  </div>
                  <p className='font-semibold xs:text-[14px]/[16.8px] sm:text-[14px]/[16.8px] md:text-[20px]/[18.87px]'>
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleOpen}
          className={classNames(
            viewing ? 'opacity-100' : 'opacity-0',
            'btn-explorer-now z-50 flex items-center justify-center rounded-[10px] text-white shadow-s-36 transition duration-200 ease-in-out hover:scale-[101%] xs:mx-auto xs:mt-11 xs:h-[52px] xs:w-[161px] xs:-translate-y-[180px] xs:text-[16px]/[32px] xs:font-medium sm:mx-auto sm:mt-11 sm:h-[52px] sm:w-[161px] sm:-translate-y-[180px] sm:text-[16px]/[32px] sm:font-medium md:mx-auto md:mt-20 md:h-[64px] md:w-[203px] md:translate-y-0 md:text-[22px]/[32px] md:font-bold lg:mx-0 lg:mt-8 lg:h-[64px] lg:-translate-y-[140px] xl:mt-11 xl:h-[64px] xl:-translate-y-[320px] 3xl:mt-12 3xl:-translate-y-[300px] 3xl:text-[18px]/[32px]'
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
