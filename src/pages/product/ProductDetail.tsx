import { memo } from 'react'

const ProductDetail = memo(() => {
  return (
    <section className='flex'>
      <div className='w-[37.5%]'></div>
      <div className='w-[62.5%]'></div>
    </section>
  )
})

export default ProductDetail
