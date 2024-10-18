import { useState } from 'react'
import { motion } from 'framer-motion'
import images from '~/assets'
import { FeatureCard, FeatureIndicators } from '~/components/feature/productsApplications'
import useResponsive from '~/hooks/useResponsive'

const {
  featureCustomerService,
  featureElectronics,
  featureFashion,
  featureFood,
  featureHomeAppliances,
  featureRetail
} = images.productApplication

const features = [
  {
    id: 1,
    title: 'Retail',
    image: featureRetail
  },
  {
    id: 2,
    title: 'Food & Beverage',
    image: featureFood
  },
  {
    id: 3,
    title: 'Fashion',
    image: featureFashion
  },
  {
    id: 4,
    title: 'Electronics',
    image: featureElectronics
  },
  {
    id: 5,
    title: 'Home Appliances',
    image: featureHomeAppliances
  },
  {
    id: 6,
    title: 'Customer Service',
    image: featureCustomerService
  }
]

function Feature() {
  const mdDown = useResponsive('down', 'md')

  const screenWidth = window.innerWidth
  const cardWidth = mdDown ? 280 : 420
  const [fileterdFeatures, setFilteredFeatures] = useState(features)
  const centerIndex = Math.round(features.length / 2) - 1
  const centerPosition = screenWidth / 2 - cardWidth / 2

  const goToPreviousCard = () => {
    const newFeatures = [...fileterdFeatures]
    const firstFeature = newFeatures.shift()
    if (!firstFeature) return
    setFilteredFeatures([...newFeatures, firstFeature])
  }

  const goToNextCard = () => {
    const newFeatures = [...fileterdFeatures]
    const lastFeature = newFeatures.pop()
    if (!lastFeature) return
    setFilteredFeatures([lastFeature, ...newFeatures])
  }

  const handleDragEnd = (_, info) => {
    if (info.offset.x < 0) {
      goToPreviousCard()
    } else {
      goToNextCard()
    }
  }

  const currentIndex = fileterdFeatures.findIndex((feature) => feature.id === 1)

  return (
    <div className='from-white to-[#F4F7F9] xs:bg-[#F4F7F9] xs:pt-0 sm:pt-0 md:bg-gradient-to-b md:pt-16 lg:pt-16 xl:pt-16'>
      <div className='bg-top bg-no-repeat xs:bg-none sm:bg-none md:bg-[url("/src/assets/images/application-feature-bg.png")]'>
        <div className='flex justify-center xs:mb-16 xs:pt-10 sm:mb-16 sm:pt-10 md:mb-8 md:pt-24'>
          <h2 className='max-w-md text-center text-4xl font-semibold leading-tight lg:max-w-4xl lg:text-[52px] lg:leading-[62px]'>
            Key Features of Smart Store Management{' '}
            <span className='xs:hidden sm:hidden md:block'>and Their Applications</span>
          </h2>
        </div>
        <motion.div
          className='relative xs:h-[360px] sm:h-[360px] md:mb-16 md:h-[420px]'
          style={{
            perspective: '2000px'
          }}
        >
          {fileterdFeatures.map((feature, index) => {
            const distanceToCenter = Math.abs(index - centerIndex)

            return (
              <motion.div
                key={feature.id}
                drag={index === centerIndex ? 'x' : false}
                layoutId={`feature-card-${feature.id}`}
                onDragEnd={handleDragEnd}
                dragConstraints={{ left: 0, right: 0 }}
                style={{
                  left: `${centerPosition + (index - centerIndex) * 170}px`,
                  zIndex: index === centerIndex ? 20 : 20 - distanceToCenter,
                  filter: index === centerIndex ? 'none' : 'blur(4px)',
                  scale: index === centerIndex ? 1 : 1 - distanceToCenter * 0.2,
                  rotateY:
                    index === centerIndex
                      ? 0
                      : distanceToCenter === 1
                        ? (centerIndex - index) * 40
                        : (centerIndex - index) * 15
                }}
                whileHover={{ scale: index === centerIndex ? 1.05 : 1 - distanceToCenter * 0.18 }}
                transition={{ type: 'spring', stiffness: 120, damping: 30, duration: 0.3 }}
                className='absolute top-0 skew-y-6 cursor-pointer'
              >
                <FeatureCard title={feature.title} image={feature.image} />
              </motion.div>
            )
          })}

          <div className="absolute -bottom-12 left-0 right-0 h-[370px] bg-[url('/src/assets/images/application-feature-bg-2.png')] bg-center bg-no-repeat xs:hidden sm:hidden md:block" />
          <div className="absolute -bottom-2 left-0 right-0 h-[200px] bg-[url('/src/assets/images/application-feature-bg-3.png')] bg-center bg-no-repeat xs:block sm:block md:hidden" />
        </motion.div>
        <FeatureIndicators
          total={features.length}
          currentIndex={currentIndex}
          goPrevious={goToPreviousCard}
          goNext={goToNextCard}
        />
      </div>
    </div>
  )
}

export default Feature
