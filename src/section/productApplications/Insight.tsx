import { InsightCard } from '~/components/feature/productsApplications'

const insights = [
  {
    id: 1,
    title: '<h4>Seamless and Fast </br> Shopping Experience</h4>',
    icon: '/src/assets/images/insight-cart.png',
    detail:
      '<p><b>Reduced Waiting Time:</b> AI optimizes checkout and service processes, minimizing wait times, especially during peak hours.</br><b>Faster Service:</b> AI detects service delays and alerts staff to improve speed.</p>'
  },
  {
    id: 2,
    title: 'Improved Customer Service',
    icon: '/src/assets/images/insight-customer.png',
    detail:
      '<p><b>Detects Dissatisfaction:</b> AI identifies signs of dissatisfaction (e.g., facial expressions, leaving without buying) and alerts staff to intervene promptly.</br><b>Easy Product Search:</b> Guides customers to the exact location of products, saving time in large or complex stores.</br><b>Quick and Convenient Checkout:</b> Automated payment processes reduce waiting time at checkout.</p>'
  },
  {
    id: 3,
    title: '<h4>Transparent and </br> Detailed Information</h4>',
    icon: '/src/assets/images/insight-information.png',
    detail:
      '<p><b>Transparent Pricing:</b> Provides immediate price information, ensuring customers know the total cost before completing a purchase.</br><b>Comprehensive Product Information:</b> Offers details on </p>'
  },
  {
    id: 4,
    title: '<h4>Automatic Points Accumulation </br> and Synchronization</h4>',
    icon: '/src/assets/images/insight-list.png',
    detail:
      '<p><b>Effortless Loyalty Program:</b> Automatically accumulates points for both online and offline transactions without needing personal information or membership cards.</p>'
  }
]

function Insight() {
  return (
    <div className="relative z-10 bg-[#F4F7F9] bg-[url('/src/assets/images/insight-bg.png')] bg-left-top bg-no-repeat py-28">
      <div className='mx-auto flex max-w-[1440px] flex-col-reverse items-stretch gap-6 px-4 lg:flex-row lg:items-center'>
        <div className='w-full lg:w-[45%] lg:pr-24'>
          <h3 className='mb-8 text-[52px] font-bold leading-[60px]'>Smart Retail Insights with AI Assistance</h3>
          <p className='leading-[26px]'>
            This showcases AI's transformative impact on retail, improving store management and insights through
            advanced reporting. Our AI assistant helps businesses optimize operations, make data-driven decisions, and
            enhance the shopping experience.
          </p>
        </div>
        <div className='lg:w-[55%]'>
          <div className='grid w-full grid-cols-2 gap-5'>
            {insights.map((insight) => (
              <InsightCard key={insight.id} title={insight.title} icon={insight.icon} detail={insight.detail} />
            ))}
          </div>
        </div>
      </div>

      <div className='absolute -left-32 top-12 z-0 h-52 w-52 rounded-full bg-gradient-to-br from-[#11B0F2]/40 to-[#F200F2]/40 blur-3xl' />
    </div>
  )
}

export default Insight
