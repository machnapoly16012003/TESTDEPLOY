import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '~/utils/utils'
import { Indicator, JobOpportunityCard } from '~/components/feature/jobOpportunities'

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

  const jobCardClassNames = [
    'top-20 left-36',
    'bottom-8 left-20',
    'top-1/2 left-1/2',
    'top-20 right-32',
    'bottom-8 right-36',
    'bottom-1/4 -right-60',
    'top-1/4 -left-56'
  ]

  const jobLength = jobs.length

  useEffect(() => {
    setJobs(initJobs)
  }, [])

  useEffect(() => {
    if (selectedCardRef?.current) {
      const rect = selectedCardRef.current?.getBoundingClientRect()
      setWidth(rect.width)
      setHeight(rect.height)
    }
  }, [selectedCardRef])

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
      <div className="absolute inset-0 bg-[url('~/assets/bg/bg-opportunities-1.png')] bg-contain bg-top bg-no-repeat" />
      <div className="absolute inset-0 translate-y-40 bg-[url('~/assets/bg/bg-opportunities-2.png')] bg-contain bg-bottom bg-no-repeat" />

      {/* content */}
      <div className='relative z-10 mx-auto'>
        <h3 className='mb-12 text-center text-[56px] font-semibold'>Job Opportunities</h3>

        <div className='relative mx-auto h-[650px] w-full max-w-[1440px]'>
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
                  className={cn('absolute', index < jobCardClassNames.length ? jobCardClassNames[index] : 'hidden')}
                  transition={{ type: 'spring', stiffness: 120, duration: 0.3 }}
                >
                  <JobOpportunityCard index={index} job={job} />
                </motion.div>
              )
            })}
          </>
          <div className='absolute bottom-0 left-0 right-0'>
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
