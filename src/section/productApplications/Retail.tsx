import { RetailItem } from '~/components/feature/productsApplications'

function Retail() {
  return (
    <section className='bg-[#F4F7F9] pb-16'>
      <div className='mx-auto max-w-[1440px] px-4 py-12'>
        <h3 className='mb-8 w-fit bg-gradient-to-br from-[#11B0F2] to-[#F200F2] bg-clip-text text-[32px] font-semibold text-black/0'>
          Retail
        </h3>

        <div className='rounded-3xl bg-gradient-to-b from-[#EBF7FF] to-white px-8 py-12 shadow-s-15'>
          <h4 className='mb-4 text-4xl font-medium'>Applied Features</h4>
          <ul className='mb-6 pl-2'>
            <RetailItem>Facial Recognition: Identify loyal customers and provide personalized offers.</RetailItem>
            <RetailItem>
              Demographic Analysis: Adjust product display and store layout based on customer groups.
            </RetailItem>
            <RetailItem>Customer Traffic Monitoring: Determine peak hours and optimize staff allocation.</RetailItem>
            <RetailItem>Emotion Analysis: Detect dissatisfaction and improve service instantly.</RetailItem>
            <RetailItem>Custom Flow Analysis: Optimize product placement based on high-traffic areas.</RetailItem>
          </ul>

          <h4 className='mb-4 text-4xl font-medium'>Value</h4>
          <ul className='pl-2'>
            <RetailItem>Enhance shopping experience and boost sales.</RetailItem>
            <RetailItem>Increase conversion rates from visitors to buyers.</RetailItem>
            <RetailItem>Improve operational efficiency by understanding customer behavior.</RetailItem>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Retail
