import { memo } from 'react'
import { IProductParam } from '~/@types/models'

type ProductCardBannerProps = {
  productParam: IProductParam
}

const ProductCardBanner = memo(({ productParam }: ProductCardBannerProps) => {
  return (
    <div className='shadow-s-22 2xs:h-[76.8px] 2xs:w-[256px] 2xs:gap-3 2xs:rounded-xl 2xs:px-[7px] relative flex flex-shrink-0 items-center justify-start bg-white/[.44] backdrop-blur-[20px] xs:h-[76.8px] xs:w-[256px] xs:gap-3 xs:rounded-xl xs:rounded-br-none xs:rounded-tr-none xs:px-[7px] sm:h-[140px] sm:w-[422px] sm:gap-5 sm:rounded-3xl sm:px-[18px] xl:rounded-[32px]'>
      <div className='2xs:size-[62.17px] flex flex-shrink-0 items-center justify-center rounded-[14px] bg-white xs:size-[62.17px] sm:size-[106px]'>
        <img src={productParam.params.images?.[0]} alt={productParam.params.name} className='w-[90%]' />
      </div>
      <div className='2xs:gap-0 flex flex-col xs:gap-0 sm:gap-3'>
        <p className='2xs:text-[11.7px]/[21px] bg-ln-text-product w-fit bg-clip-text font-semibold capitalize text-transparent xs:text-[11.7px]/[21px] sm:text-[18px]/[28px] md:text-[18px]/[28px] lg:text-[18px]/[28px] xl:text-[18px]/[28px]'>
          SecureVision, Blockchain, AI, Machine learning device
          {/* {productParam.params.name} */}
        </p>
      </div>
    </div>
  )
})

export default ProductCardBanner
