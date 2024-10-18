import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '~/utils/utils'
import { Indicator, JobOpportunityCard } from '~/components/feature/jobOpportunities'
import useResponsive from '~/hooks/useResponsive'

const initJobs = [
  {
    id: 1,
    position: 'Front-End Developer',
    descriptions: [
      'Design, develop, and optimize computer vision algorithms and applications.',
      'Work with large-scale datasets to train and evaluate machine learning models.'
    ],
    requirements: [
      'Proven experience in developing computer vision applications.',
      'Strong programming skills in languages such as Python, C++, or Java.'
    ]
  },
  {
    id: 2,
    position: 'Business Developer',
    descriptions: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    ],
    requirements: [
      'When an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      'It has survived not only five centuries, but also the leap into electronic typesetting.'
    ]
  },
  {
    id: 3,
    position: 'AI Developer (Computer Vision)',
    descriptions: [
      'Design, develop, and optimize computer vision algorithms and applications.',
      'Work with large-scale datasets to train and evaluate machine learning models.'
    ],
    requirements: [
      'Proven experience in developing computer vision applications.',
      'Strong programming skills in languages such as Python, C++, or Java.'
    ]
  },
  {
    id: 4,
    position: 'Back-End Developer',
    descriptions: [
      'Design, develop, and optimize computer vision algorithms and applications.',
      'Work with large-scale datasets to train and evaluate machine learning models.'
    ],
    requirements: [
      'Proven experience in developing computer vision applications.',
      'Strong programming skills in languages such as Python, C++, or Java.'
    ]
  },
  {
    id: 5,
    position: 'Business Analyst',
    descriptions: [
      'Design, develop, and optimize computer vision algorithms and applications.',
      'Work with large-scale datasets to train and evaluate machine learning models.'
    ],
    requirements: [
      'Proven experience in developing computer vision applications.',
      'Strong programming skills in languages such as Python, C++, or Java.'
    ]
  },
  {
    id: 6,
    position: 'Quanlity Control',
    descriptions: [
      'Design, develop, and optimize computer vision algorithms and applications.',
      'Work with large-scale datasets to train and evaluate machine learning models.'
    ],
    requirements: [
      'Proven experience in developing computer vision applications.',
      'Strong programming skills in languages such as Python, C++, or Java.'
    ]
  },
  {
    id: 7,
    position: 'Quanlity Assurance',
    descriptions: [
      'Design, develop, and optimize computer vision algorithms and applications.',
      'Work with large-scale datasets to train and evaluate machine learning models.'
    ],
    requirements: [
      'Proven experience in developing computer vision applications.',
      'Strong programming skills in languages such as Python, C++, or Java.'
    ]
  }
]

const JobOpportunities = memo(() => {
  const selectedCardRef = useRef<HTMLDivElement>(null)

  const [jobs, setJobs] = useState(initJobs) // use state to store the jobs from API
  const [filteredJobs, setFilteredJobs] = useState(jobs) // use state to render the slide
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  const lgDown = useResponsive('down', 'lg')

  const jobCardClassNames = [
    'xs:-top-2 xs:left-3 md:top-5 md:left-10 lg:top-20 lg:-left-10 xl:top-20 xl:left-36',
    'xs:bottom-2 xs:-left-8 md:bottom-0 md:-left-10 lg:bottom-8 lg:left-4 xl:bottom-8 xl:left-20',
    'top-1/2 left-1/2',
    'xs:top-2 xs:-right-5 md:top-0 md:-right-10 lg:top-20 lg:-right-10 xl:top-20 xl:right-32',
    'xs:bottom-5 xs:-right-8 md:bottom-10 md:-right-5 lg:bottom-8 lg:right-4 xl:bottom-8 xl:right-36',
    'bottom-1/4 -right-60',
    'top-1/4 -left-56'
  ]

  const jobLength = jobs.length

  useEffect(() => {
    setJobs(initJobs)
  }, [])

  useEffect(() => {
    if (selectedCardRef?.current) {
      const clientWidth = selectedCardRef.current?.clientWidth
      const clientHeight = selectedCardRef.current?.clientHeight
      setWidth(clientWidth)
      setHeight(clientHeight)
    }
  }, [selectedCardRef, lgDown])

  const goToNextCard = useCallback(() => {
    const newJobs = [...filteredJobs]
    const firstJobs = newJobs.shift()
    if (!firstJobs) return
    setFilteredJobs([...newJobs, firstJobs])
  }, [filteredJobs])

  const goToPreviousCard = useCallback(() => {
    const newJobs = [...filteredJobs]
    const lastJobs = newJobs.pop()
    if (!lastJobs) return
    setFilteredJobs([lastJobs, ...newJobs])
  }, [filteredJobs])

  const handleDragEnd = useCallback(
    (_, info) => {
      if (info.offset.x < 0) {
        goToNextCard()
      } else {
        goToPreviousCard()
      }
    },
    [goToNextCard, goToPreviousCard]
  )

  const currentIndex = useMemo(() => {
    return jobs.findIndex((job) => job.id === filteredJobs[2]?.id)
  }, [jobs, filteredJobs])

  return (
    <section className='relative overflow-hidden py-12'>
      {/* bg image */}
      <div className="absolute inset-0 bg-[url('~/assets/bg/bg-opportunities-1.png')] bg-contain bg-top bg-no-repeat xs:w-[180%] sm:w-[180%] md:w-[120%] lg:w-fit" />
      <div className="bg absolute inset-0 translate-y-40 bg-[url('~/assets/bg/bg-opportunities-2.png')] bg-bottom bg-no-repeat xs:bg-[length:100%_80%] sm:bg-[length:100%_80%] md:bg-[length:100%_70%] lg:bg-contain" />

      {/* content */}
      <div className='relative z-10 mx-auto'>
        <h3 className='mb-12 text-center font-semibold xs:text-[36px] sm:text-[36px] md:text-[56px]'>
          Job Opportunities
        </h3>

        <div className='relative mx-auto w-full max-w-[1440px] xs:h-[500px] sm:h-[500px] md:h-[800px] lg:h-[650px]'>
          <>
            {filteredJobs.map((job, index) => {
              const isSelected = index === 2

              return (
                <motion.div
                  key={job.id}
                  ref={isSelected ? selectedCardRef : null}
                  layoutId={`job-card-${job.id}`}
                  drag={isSelected ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  style={{
                    marginLeft: isSelected ? -(width / 2) : 0,
                    marginTop: isSelected ? -(height / 2) : 0,
                    scale: index > 4 ? 0.8 : 1
                  }}
                  whileTap={{ scale: 1.05 }}
                  whileHover={{ scale: 1.05 }}
                  onDragEnd={isSelected ? handleDragEnd : () => {}}
                  className={cn(
                    'absolute',
                    index < jobCardClassNames.length ? jobCardClassNames[index] : 'hidden',
                    isSelected ? 'z-20' : 'z-10'
                  )}
                  transition={{ type: 'spring', stiffness: 120, duration: 0.3 }}
                >
                  <JobOpportunityCard index={index} job={job} />
                </motion.div>
              )
            })}
          </>
          <div className='absolute xs:-bottom-8 xs:left-1/2 xs:right-auto xs:w-fit xs:-translate-x-1/2 xs:rounded-full xs:bg-white xs:p-2 md:bottom-0 md:left-0 md:right-0 md:w-full md:translate-x-0 md:rounded-none md:bg-transparent'>
            <Indicator
              total={jobLength}
              currentIndex={currentIndex}
              goPrevious={goToPreviousCard}
              goNext={goToNextCard}
            />
          </div>
        </div>
      </div>
    </section>
  )
})

export default JobOpportunities
