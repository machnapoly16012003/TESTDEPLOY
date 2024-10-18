import images from '~/assets'
import { OverviewItem } from '~/components/feature/productsApplications'

const { overview, overview2, item1, item2, item3, item4, item5 } = images.productApplication

function Overview() {
  return (
    <div
      className={`bg-[#F4F7F9] bg-[url('/src/assets/images/application-overview-bg.png')] bg-right bg-no-repeat px-4 xs:pt-12 sm:pt-12 md:py-12 lg:py-12 xl:py-12`}
    >
      <div className='mx-auto flex max-w-[1440px] flex-col-reverse gap-12 lg:flex-row lg:items-center lg:gap-8'>
        <div className='lg:flex-1 lg:pr-8'>
          <h2 className='relative z-20 font-semibold xs:w-full xs:text-[36px]/[48px] sm:w-full sm:text-[36px]/[48px] md:w-[80%] md:text-[52px]/[62px] lg:text-[32px]/[42px] xl:text-[52px]/[62px]'>
            Overview of AI Capabilities in Smart Store Management
          </h2>

          <div className='relative z-10 mx-auto xs:block xs:w-full xs:-translate-y-20 sm:block sm:w-full sm:-translate-y-20 md:block md:w-[80%] md:-translate-y-14 lg:hidden'>
            <img src={overview} alt='overview image' className='z-10' />
            <img
              src={overview2}
              alt='overview image'
              className='absolute -bottom-8 z-10 xs:right-5 xs:w-[96px] sm:right-5 sm:w-[96px] md:right-44 md:w-auto'
            />
          </div>

          <p className='relative z-20 xs:my-0 xs:-translate-y-24 xs:text-[16px]/[26px] sm:my-0 sm:-translate-y-24 sm:text-[16px]/[26px] md:mb-8 md:mt-0 md:translate-y-0 md:text-[18px]/[28px] lg:my-5 lg:text-[15px]/[25px] xl:my-8 xl:text-[16px]/[26px]'>
            The Smart Store Management AI system is designed to enhance customer experience, optimize store operations,
            and provide deep analytical insights. By leveraging real-time facial recognition, demographic analysis,
            behavior tracking, and performance monitoring, the system helps retailers understand their customers, manage
            staff, and predict business trends more effectively.
          </p>
          <ul className='xs:-translate-y-20 xs:space-y-4 sm:-translate-y-20 sm:space-y-4 md:mt-2 md:translate-y-0 md:space-y-4 lg:mt-2 lg:space-y-4 xl:mt-2 xl:space-y-4'>
            <OverviewItem title='Real-Time Customer Behavior Analysis' image={item1} />
            <OverviewItem title='Predictive Analytics & Demand Forecasting' image={item2} />
            <OverviewItem title='Security and Anomaly Detection Alerts' image={item3} />
            <OverviewItem title='Emotion & Sentiment Analysis' image={item4} />
            <OverviewItem title='Automated Performance Reports & Insights' image={item5} />
          </ul>
        </div>
        <div className='relative xs:hidden sm:hidden md:hidden lg:block lg:flex-1'>
          <img src={overview} alt='overview image' />
          <img src={overview2} alt='overview image' className='absolute -bottom-8 right-44' />
        </div>
      </div>
    </div>
  )
}

export default Overview
