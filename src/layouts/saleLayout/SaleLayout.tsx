import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'
import IconBxChevronUp from '~/assets/icons/chevUp'
import { Footer } from '../components/footer'
import { HeaderSale } from '../components/headerSale'

const SaleLayout = memo(() => {
  return (
    <main className='font-proxima text-light min-h-screen w-full'>
      <HeaderSale />
      <Outlet />
      <Footer />
      <ScrollToTop
        className='rounded-full xs:mb-0 md:mb-10 xl:mb-[160px]'
        style={{ zIndex: '100', borderRadius: '50%', width: '50px', height: '50px' }}
        smooth
        component={<IconBxChevronUp className='rounded-full bg-secondary text-black' />}
      />
    </main>
  )
})

export default SaleLayout
