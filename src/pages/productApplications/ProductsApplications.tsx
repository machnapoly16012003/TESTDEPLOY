import { Overview, Feature, Retail, Insight } from '~/section/productApplications'

function ProductsApplications() {
  return (
    <div className='mt-20'>
      <Overview />
      <Feature />
      <Retail />
      <Insight />
    </div>
  )
}

export { ProductsApplications }
