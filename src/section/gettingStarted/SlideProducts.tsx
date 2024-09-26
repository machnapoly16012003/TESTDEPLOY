import { memo } from 'react'

const SlideProducts = memo(() => {
  return (
    <section className='mt-32 w-full'>
      <div className='flex w-full items-center justify-between'>
        <h2 className='rp-title-section'>Finding Camera</h2>
        <div>pagination</div>
      </div>
    </section>
  )
})

export default SlideProducts
