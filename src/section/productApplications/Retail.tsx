import { RetailItem } from '~/components/feature/productsApplications'

function Retail() {
  return (
    <section className='bg-[#F4F7F9] pb-16'>
      <div className='mx-auto max-w-[1440px] px-4 xs:py-12 sm:py-12 md:py-12 lg:py-12 xl:py-12'>
        <h3 className='w-fit bg-gradient-to-br from-[#11B0F2] to-[#F200F2] bg-clip-text font-semibold text-black/0 xs:mb-6 xs:text-[24px] sm:mb-6 sm:text-[24px] md:mb-6 md:text-[32px] lg:mb-6 lg:text-[32px] xl:mb-8 xl:text-[32px]'>
          Retail
        </h3>

        <div className='rounded-3xl bg-gradient-to-b from-[#EBF7FF] to-white shadow-s-15 xs:px-4 xs:py-9 sm:px-2 sm:py-9 md:px-8 md:py-12'>
          <h4 className='mb-4 font-medium xs:text-[24px]/[36px] sm:text-[24px]/[36px] md:text-4xl lg:text-[32px]/[36px] xl:text-4xl'>
            Applied Features
          </h4>
          <ul className='mb-6 space-y-2 pl-0'>
            <RetailItem>Facial Recognition: Identify loyal customers and provide personalized offers.</RetailItem>
            <RetailItem>
              Demographic Analysis: Adjust product display and store layout based on customer groups.
            </RetailItem>
            <RetailItem>Customer Traffic Monitoring: Determine peak hours and optimize staff allocation.</RetailItem>
            <RetailItem>Emotion Analysis: Detect dissatisfaction and improve service instantly.</RetailItem>
            <RetailItem>Custom Flow Analysis: Optimize product placement based on high-traffic areas.</RetailItem>
          </ul>

          <h4 className='mb-4 font-medium xs:text-[24px]/[36px] sm:text-[24px]/[36px] md:text-4xl lg:text-[32px]/[36px] xl:text-4xl'>
            Value
          </h4>
          <ul className='space-y-2 pl-0'>
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
