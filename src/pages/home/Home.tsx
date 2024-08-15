import React, { memo } from 'react'
import { AutoplayVideo } from '~/components/autoplayVideo'
import Banner3D from '~/components/banner/banner3D'
import Unleash from '~/components/unleash'
import { InStore, ListenToOurCustomer } from '~/sections/home'
import CustomerReaction from '~/sections/home/CustomerReaction'
import InStoreExperienceToday from '~/sections/home/InStoreExperienceToday'

interface IHomePageProps {}

const Home: React.FunctionComponent<IHomePageProps> = memo(() => {
  return (
    <div className='h-auto bg-[#F4F7F9]'>
      <Banner3D />
      <div className='accurate-count' data-aos='fade-up'>
        <div className='container-wrapper accurate-container flex flex-col gap-10'>
          <h1 className='title-wrap mt-[100px] hidden text-center font-semibold md:block md:text-[64px] md:leading-[90px]'>
            Segment customers by the value of items they carry
          </h1>
          <h1 className='title-wrap mt-[100px] text-center font-semibold md:hidden md:text-[64px] md:leading-[90px]'>
            Demographic Analysis with <br /> Every Scan
          </h1>
          <AutoplayVideo
            source='https://img.m.pro/fiai-home.mp4'
            defaultImage='https://via.placeholder.com/1920x1080'
          />
        </div>
      </div>
      <div data-aos='fade-up' className='md:mt-0'>
        <div className='container-wrapper flex flex-col gap-10'>
          <h1 className='title-wrap mt-[100px] text-center font-semibold md:text-[64px] md:leading-[90px]'>
            Interaction in nature language
          </h1>
          <AutoplayVideo source='https://img.m.pro/siteC1.mp4' defaultImage='https://via.placeholder.com/1920x1080' />
        </div>
      </div>
      <Unleash />
      <div data-aos='fade-up' className='mt-[220px] md:mt-[40px]'>
        <div className='container-wrapper flex flex-col gap-10'>
          <AutoplayVideo
            source='https://img.m.pro/fiai-banner-3d.mp4'
            defaultImage='https://via.placeholder.com/1920x1080'
          />
        </div>
      </div>
      <div className='mx-auto min-h-screen w-full max-w-[1440px] overflow-hidden bg-instore xs:bg-[length:640px_100%] sm:bg-cover'>
        <InStore />
      </div>
      <CustomerReaction />
      <ListenToOurCustomer />
      <InStoreExperienceToday />
    </div>
  )
})

export default Home
