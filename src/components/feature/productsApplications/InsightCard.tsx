import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import useResponsive from '~/hooks/useResponsive'

interface Props {
  id: number
  title: string
  icon: string
  detail: string
}

function InsightCard({ id, title, icon, detail }: Props) {
  const mdDown = useResponsive('down', 'md')

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
            className={classNames(
              mdDown && id === 2 && flipped ? 'h-[238px]' : 'h-[154px]',
              'relative w-full overflow-hidden transition-transform duration-700 xs:min-h-[154px] xs:rounded-[10px] sm:min-h-[154px] sm:rounded-[10px] md:h-72 md:rounded-[20px]'
            )}
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
              className='absolute flex h-full w-full items-center justify-center bg-[#FEFEFE] text-lg transition-colors duration-1000 xs:p-[10px] sm:p-[10px] md:p-6'
            >
              <div className='flex flex-col items-center xs:gap-3 md:gap-4'>
                <img src={icon} alt={title} className='xs:size-[65px] sm:size-[65px] md:size-auto' />
                <div
                  dangerouslySetInnerHTML={{ __html: title }}
                  className='text-nowrap bg-ln-text-insight bg-clip-text text-center font-semibold text-transparent xs:text-[12px]/[18px] sm:text-[12px]/[16px] md:text-[16px]/[28px]'
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
              className='absolute flex h-full w-full items-center justify-center bg-gradient-to-b from-[#6976A0] via-[#2C3972] to-[#141D3E] text-sm leading-relaxed text-white transition-colors duration-1000 xs:px-4 xs:py-[13px] sm:px-[11px] sm:py-[13px] md:px-[20px] md:py-8'
            >
              <div
                dangerouslySetInnerHTML={{ __html: detail }}
                className='xs:text-[10px]/[14px] sm:text-[10px]/[14px] md:text-[14px]/[24px]'
              />
            </motion.div>
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  )
}

export default InsightCard
