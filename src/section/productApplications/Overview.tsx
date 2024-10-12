import images from '~/assets'
import { OverviewItem } from '~/components/feature/productsApplications'

const { overview, overview2, item1, item2, item3, item4, item5 } = images.productApplication

function Overview() {
  return (
    <div
      className={`bg-[#F4F7F9] bg-[url('/src/assets/images/application-overview-bg.png')] bg-right bg-no-repeat px-4 py-12`}
    >
      <div className='mx-auto flex max-w-[1440px] flex-col-reverse gap-12 lg:flex-row lg:items-center lg:gap-8'>
        <div className='lg:flex-1 lg:pr-8'>
          <h2 className='text-[52px]/[62px] font-semibold'>Overview of AI Capabilities in Smart Store Management</h2>
          <p className='my-8 text-[16px]/[26px]'>
            The Smart Store Management AI system is designed to enhance customer experience, optimize store operations,
            and provide deep analytical insights. By leveraging real-time facial recognition, demographic analysis,
            behavior tracking, and performance monitoring, the system helps retailers understand their customers, manage
            staff, and predict business trends more effectively.
          </p>
          <ul className='mt-2 space-y-4'>
            <OverviewItem title='Real-Time Customer Behavior Analysis' image={item1} />
            <OverviewItem title='Predictive Analytics & Demand Forecasting' image={item2} />
            <OverviewItem title='Security and Anomaly Detection Alerts' image={item3} />
            <OverviewItem title='Emotion & Sentiment Analysis' image={item4} />
            <OverviewItem title='Automated Performance Reports & Insights' image={item5} />
          </ul>
        </div>
        <div className='relative lg:flex-1'>
          <img src={overview} alt='overview image' />
          <img src={overview2} alt='overview image' className='absolute -bottom-8 right-44' />
        </div>
      </div>
    </div>
  )
}

export default Overview
