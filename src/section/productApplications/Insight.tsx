import images from '~/assets'
import { InsightCard } from '~/components/feature/productsApplications'

const insights = [
  {
    id: 1,
    title: '<h4>Seamless and Fast </br> Shopping Experience</h4>',
    icon: images.productApplication.insight_cart,
    detail:
      '<p><b>Reduced Waiting Time:</b> AI optimizes checkout and service processes, minimizing wait times, especially during peak hours.</br><b>Faster Service:</b> AI detects service delays and alerts staff to improve speed.</p>'
  },
  {
    id: 2,
    title: 'Improved Customer <br className="xs:block sm:block md:hidden lg:hidden 3xl:hidden xl:hidden" /> Service',
    icon: images.productApplication.insight_customer,
    detail:
      '<p><b>Detects Dissatisfaction:</b> AI identifies signs of dissatisfaction (e.g., facial expressions, leaving without buying) and alerts staff to intervene promptly.</br><b>Easy Product Search:</b> Guides customers to the exact location of products, saving time in large or complex stores.</br><b>Quick and Convenient Checkout:</b> Automated payment processes reduce waiting time at checkout.</p>'
  },
  {
    id: 3,
    title: '<h4>Transparent and </br> Detailed Information</h4>',
    icon: images.productApplication.insight_information,
    detail:
      '<p><b>Transparent Pricing:</b> Provides immediate price information, ensuring customers know the total cost before completing a purchase.</br><b>Comprehensive Product Information:</b> Offers details on </p>'
  },
  {
    id: 4,
    title:
      '<h4>Automatic Points </br className="xs:block sm:block md:hidden lg:hidden 3xl:hidden xl:hidden"> Accumulation and </br className="xs:block sm:block md:hidden lg:hidden 3xl:hidden xl:hidden"> Synchronization</h4>',
    icon: images.productApplication.insight_list,
    detail:
      '<p><b>Effortless Loyalty Program:</b> Automatically accumulates points for both online and offline transactions without needing personal information or membership cards.</p>'
  }
]

function Insight() {
  return (
    <div className="relative z-10 bg-[#F4F7F9] bg-[url('/src/assets/images/insight-bg.png')] bg-left-top bg-no-repeat py-28">
      <div className='z-20 mx-auto flex max-w-[1440px] flex-col items-stretch px-4 xs:gap-8 sm:gap-8 md:gap-8 lg:flex-row lg:items-center lg:gap-6'>
        <div className='w-full xs:w-full xs:text-center sm:w-full sm:text-center md:w-full md:px-16 md:text-center lg:w-[35%] lg:px-0 lg:text-left xl:w-[45%] xl:pr-24'>
          <h3 className='font-bold xs:mb-7 xs:text-[36px]/[48px] sm:mb-7 sm:text-[36px]/[48px] md:mb-8 md:px-10 md:text-[52px]/[70px] lg:px-0 lg:text-[48px]/[65px] xl:text-[52px]/[65px]'>
            Smart Retail Insights with AI Assistance
          </h3>
          <p className='text-[16px] leading-[26px] md:px-5 md:text-[18px] lg:px-0'>
            This showcases AI's transformative impact on retail, improving store management and insights through
            advanced reporting. Our AI assistant helps businesses optimize operations, make data-driven decisions, and
            enhance the shopping experience.
          </p>
        </div>
        <div className='xs:w-full sm:w-full md:w-full lg:w-[65%] xl:w-[55%]'>
          <div className='w-full grid-cols-2 xs:hidden xs:gap-3 sm:hidden sm:gap-3 md:grid md:gap-5'>
            {insights.map((insight) => (
              <InsightCard
                key={insight.id}
                id={insight.id}
                title={insight.title}
                icon={insight.icon}
                detail={insight.detail}
              />
            ))}
          </div>
          <div className='w-full flex-row items-start xs:flex xs:gap-3 sm:flex sm:gap-3 md:hidden md:gap-5'>
            <div className='flex w-full flex-col gap-3'>
              {insights
                .filter((inS) => inS.id === 1 || inS.id === 3)
                .map((insight) => (
                  <InsightCard
                    key={insight.id}
                    id={insight.id}
                    title={insight.title}
                    icon={insight.icon}
                    detail={insight.detail}
                  />
                ))}
            </div>
            <div className='flex w-full flex-col gap-3'>
              {insights
                .filter((inS) => inS.id === 2 || inS.id === 4)
                .map((insight) => (
                  <InsightCard
                    key={insight.id}
                    id={insight.id}
                    title={insight.title}
                    icon={insight.icon}
                    detail={insight.detail}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className='absolute z-0 h-52 w-52 rounded-full bg-gradient-to-br from-[#11B0F2]/40 to-[#F200F2]/40 blur-3xl xs:-left-10 xs:top-5 sm:-left-10 sm:top-5 md:-left-32 md:top-12' />
    </div>
  )
}

export default Insight
