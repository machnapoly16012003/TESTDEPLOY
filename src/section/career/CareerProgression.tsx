import classNames from 'classnames'
import { memo, useEffect, useRef, useState } from 'react'
import images from '~/assets'
import './styles.scss'
import ApplyCVDialog from './ApplyCVDialog'
import useDialog from '~/hooks/useDialog'

const listProgressions = [
  {
    id: 1,
    title: 'Entry-Level Position',
    position: ''
  },
  {
    id: 2,
    title: 'Mid-Level Position',
    position: 'ml-[135px]'
  },
  {
    id: 3,
    title: 'Senior-Level Position',
    position: 'ml-[175px]'
  },
  {
    id: 4,
    title: 'Managerial Position',
    position: 'ml-[130px]'
  },
  {
    id: 5,
    title: 'Executive Position',
    position: '-ml-[20px]'
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
        <h1 data-aos='fade-right' className='text-[52px]/[72px] font-semibold 3xl:mt-20'>
          Career Progression Path
        </h1>

        <div className='relative flex w-fit -translate-x-10 -translate-y-[160px] items-center 3xl:ml-10'>
          <div data-aos='fade-right' className='min-w-[814px]'>
            <img
              src={images.benefit.astronaut_progression}
              alt='astronaut-progression'
              className='translateY-5s w-full'
            />
          </div>

          <img
            src={images.benefit.circle_line}
            alt='circle-line'
            className={classNames(
              viewing ? 'opacity-100' : 'opacity-0',
              '-translate-x-10 transition duration-500 ease-in-out xl:mt-10 3xl:mt-[40px] 3xl:translate-x-10'
            )}
          />

          <div className='flex -translate-x-[270px] flex-col gap-[72px] xl:mt-10 3xl:mt-[40px] 3xl:-translate-x-[190px]'>
            {listProgressions.map((item) => (
              <div
                key={item.id}
                data-aos='fade-up'
                className={classNames(
                  item.position,
                  'flex h-[100px] w-[380px] items-center gap-5 rounded-[80px] bg-white/[.64] p-[15px] shadow-s-37 backdrop-blur-[105px]'
                )}
              >
                <div
                  className='flex size-[70px] flex-shrink-0 items-center justify-center rounded-full bg-ln-black text-[32px]/[36px] font-extrabold text-white'
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
            'btn-explorer-now z-50 flex w-[203px] -translate-y-[320px] items-center justify-center rounded-[10px] text-[22px]/[32px] font-bold text-white shadow-s-36 transition duration-200 ease-in-out hover:scale-[101%] xs:mt-11 xs:h-[52px] sm:mt-11 sm:h-[52px] md:mt-11 md:h-[52px] lg:mt-8 lg:h-12 xl:mt-11 xl:h-[64px] 3xl:mt-12 3xl:-translate-y-[300px] 3xl:text-[18px]/[32px]'
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
