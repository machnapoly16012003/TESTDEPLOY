import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

interface Props {
  title: string
  icon: string
  detail: string
}

function InsightCard({ title, icon, detail }: Props) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      style={{
        perspective: '1000px'
      }}
      className='flex h-full w-full items-center justify-center'
    >
      <AnimatePresence>
        <div className='w-full' onMouseOver={() => setFlipped(true)} onMouseOut={() => setFlipped(false)}>
          <motion.div
            className='relative h-72 w-full overflow-hidden rounded-[20px] transition-transform duration-700'
            style={{ transform: flipped ? 'rotateY(180deg)' : '' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          >
            {/* front side */}
            <motion.div
              style={{
                backfaceVisibility: flipped ? 'hidden' : 'visible'
              }}
              animate={{
                opacity: flipped ? 0 : 1
              }}
              transition={{
                type: 'spring',
                stiffness: 120,
                duration: 0.7
              }}
              className='absolute flex h-full w-full items-center justify-center bg-[#FEFEFE] p-6 text-lg transition-colors duration-1000'
            >
              <div className='flex flex-col items-center gap-4'>
                <img src={icon} alt={title} />
                <div
                  dangerouslySetInnerHTML={{ __html: title }}
                  className='bg-ln-text-insight bg-clip-text text-center font-semibold text-transparent'
                />
              </div>
            </motion.div>

            {/* back site */}
            <motion.div
              style={{
                backfaceVisibility: flipped ? 'visible' : 'hidden',
                transform: 'rotateY(180deg)'
              }}
              animate={{
                opacity: flipped ? 1 : 0
              }}
              transition={{
                type: 'spring',
                stiffness: 120,
                duration: 0.7
              }}
              className='absolute flex h-full w-full items-center justify-center bg-gradient-to-b from-[#6976A0] via-[#2C3972] to-[#141D3E] px-4 py-8 text-sm leading-relaxed text-white transition-colors duration-1000'
            >
              <div dangerouslySetInnerHTML={{ __html: detail }} />
            </motion.div>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  )
}

export default InsightCard
