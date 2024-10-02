import { memo } from 'react'
import { AutoplayVideo } from '~/components/shared/autoplayVideo'
import {
  Banner3D,
  CustomerReaction,
  InStore,
  InStoreExperienceToday,
  ListenToOurCustomer,
  Unleash,
  WebSummit
} from '~/section/home'

const Home = memo(() => {
  return (
    <div className='h-auto bg-[#F4F7F9]'>
      <Banner3D />
      <div className='accurate-count' data-aos='fade-up'>
        <div className='container-wrapper accurate-container flex flex-col gap-10'>
          <h1 className='title-wrap mt-[100px] hidden text-center font-semibold capitalize md:block md:text-[64px] md:leading-[90px]'>
            Segment customers by the value of items they carry
          </h1>
          <h1 className='title-wrap mt-[100px] text-center font-semibold capitalize md:hidden md:text-[64px] md:leading-[90px]'>
            Segment customers by the value of items they carry
          </h1>
          <AutoplayVideo
            source='https://img.m.pro/fiai-home.mp4'
            defaultImage='https://via.placeholder.com/1920x1080'
          />
        </div>
      </div>
      <div data-aos='fade-up' className='md:mt-0'>
        <div className='container-wrapper flex flex-col gap-10'>
          <h1 className='title-wrap mt-[100px] text-center font-semibold capitalize md:text-[64px] md:leading-[90px]'>
            Interaction in nature language
          </h1>
          <div className='container-wrapper hidden md:block'>
            <AutoplayVideo source='https://img.m.pro/siteC1.mp4' defaultImage='https://via.placeholder.com/1920x1080' />
          </div>
          <div className='block md:hidden'>
            <AutoplayVideo
              source='https://img.m.pro/siteC4-mobile.mp4'
              defaultImage='https://via.placeholder.com/1920x1080'
            />
          </div>
        </div>
      </div>
      <Unleash />
      <div data-aos='fade-up' className='mt-[300px] md:mt-[40px]'>
        <div className='container-wrapper hidden md:block'>
          <AutoplayVideo
            source='https://img.m.pro/fiai-banner-3d.mp4'
            defaultImage='https://via.placeholder.com/1920x1080'
          />
        </div>
        <div className='block md:hidden'>
          <AutoplayVideo
            source='https://img.m.pro/fiai-banner-3d-mobile.mp4'
            defaultImage='https://via.placeholder.com/1920x1080'
          />
        </div>
      </div>
      <div
        id='ai-work'
        className='mx-auto w-full max-w-[1440px] overflow-hidden bg-instore bg-no-repeat xs:bg-[length:640px_100%] sm:bg-cover md:min-h-[90vh] md:bg-cover xl:bg-cover'
      >
        <InStore />
      </div>
      <WebSummit />
      <CustomerReaction />
      <ListenToOurCustomer />
      <InStoreExperienceToday />
    </div>
  )
})

export default Home
