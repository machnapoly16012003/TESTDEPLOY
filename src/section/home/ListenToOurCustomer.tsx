import classNames from 'classnames'
import { memo, useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ListGridListen from '~/components/feature/ListGridListen'

const ListenToOurCustomer = memo(() => {
  const [activeSlide, setActiveSlide] = useState(0)
  return (
    <div className={classNames('mx-auto min-h-screen w-full', '')}>
      <div className='flex min-h-screen w-full flex-col items-center justify-center pt-[100px] md:pt-[200px]'>
        <div className='flex w-full flex-col items-center justify-center px-[20px] text-center'>
          <h2 className='title-wrap font-semibold capitalize md:text-[64px]' data-aos='fade-up'>
            Listen to our customers
          </h2>
          <div className='w-full max-w-[600px] text-center md:mt-[20px]' data-aos='fade-up'>
            <span className='text-[16px] md:text-[20px]'>
              Just ask, your tailored AI assistant will access the CRM and POS systems to answer all of your necessary
              information.
            </span>
          </div>
        </div>
        <div className='mb-10 flex w-full flex-1' data-aos='fade-up'>
          <Swiper
            pagination={{
              clickable: true,
              el: '.custom-pagination',
              renderBullet: (className) => `<span class="${className} custom-bullet"></span>`
            }}
            autoplay={{ delay: 2000 }}
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            modules={[Pagination, Autoplay]}
            className='mySwiper'
          >
            <SwiperSlide>
              <ListGridListen active={activeSlide} />
            </SwiperSlide>
            <SwiperSlide>
              <ListGridListen active={activeSlide} />
            </SwiperSlide>
            <SwiperSlide>
              <ListGridListen active={activeSlide} />
            </SwiperSlide>
            <SwiperSlide>
              <ListGridListen active={activeSlide} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='custom-pagination mt-[-35px] flex justify-center gap-2 text-center'></div>
      </div>
    </div>
  )
})

export default ListenToOurCustomer
