import { FC, memo } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { IProduct } from '~/@types/models'
import images from '~/assets'
import { PATH_PUBLIC_APP } from '~/constants/paths'
import { formatLocaleString } from '~/utils/format'

interface IProductCard {
  product: IProduct
}

const ProductCard: FC<IProductCard> = memo(({ product }) => {
  const { product: productInfor, variants } = product || {}

  const navigate = useNavigate()

  return (
    <div className='product-card group relative flex translate-y-10 flex-col bg-transparent transition-all duration-300 ease-in-out hover:scale-100 hover:bg-ln-product-card xs:h-[360px] xs:w-[245px] xs:translate-y-10 xs:scale-100 xs:rounded-[18px] xs:px-[22px] xs:py-[24px] xs:hover:-translate-y-0 md:h-[589px] md:w-[400px] md:translate-y-10 md:scale-90 md:rounded-[32px] md:px-9 md:py-10 md:hover:-translate-y-0 xl:scale-[90%] 3xl:scale-95 4xl:scale-90'>
      <p className='font-semibold text-black group-hover:text-white xs:text-[16px]/[24px] md:text-[24px]/[36px]'>
        {productInfor.params.name}
      </p>
      <div className='relative mb-6 mt-[36px] flex-1'>
        <p className='absolute z-10 font-bold leading-none text-white/[.12] xs:-left-2 xs:-top-7 xs:text-[120px] md:-left-5 md:-top-10 md:text-[240px]'>
          {productInfor.params.type}
        </p>
        <div className='top-1/2 z-20 -translate-y-1/2 translate-x-0 transform transition duration-300 ease-in-out group-hover:mt-3 xs:absolute xs:w-[230px] xs:group-hover:translate-x-3 xs:group-hover:scale-[130%] md:relative md:w-[350px] md:group-hover:translate-x-5 md:group-hover:scale-[140%] xl:group-hover:translate-x-8 3xl:group-hover:translate-x-6 4xl:group-hover:translate-x-4'>
          <img
            src={productInfor.params.images[0]}
            alt={product.product.params.name}
            className='mx-auto h-full w-full'
          />
        </div>

        <div className='absolute scale-90 group-hover:-bottom-10 group-hover:-right-10 group-hover:scale-100 xs:-bottom-5 xs:-right-8 xs:scale-75 md:-bottom-0 md:-right-0'>
          <img src={images.image.shadow_product} alt='shadow product' />
        </div>
      </div>
      <div className='flex w-full items-end justify-between'>
        <div className='xs:space-y-1 md:space-y-2'>
          <p className='text-black/[.72] group-hover:text-white/[.72] xs:text-[12px]/[12px] md:text-[16px]/[16px]'>
            Device Price
          </p>
          <p className='font-semibold text-black group-hover:text-white xs:text-[30px]/[30px] md:text-[48px]/[48px]'>
            ${formatLocaleString(Number(variants[0].priceOptions.price) / 10 ** 6)}
          </p>
          <p className='text-black/[.72] group-hover:text-white/[.72] xs:text-[10px]/[10px] md:text-[16px]/[16px]'>
            Subscription fee:{' '}
            <span className='font-medium text-black group-hover:text-white xs:text-[12px]/[12px] md:text-[18px]/[18px]'>
              ${formatLocaleString(Number(variants[0].priceOptions.subscriptionFee) / 10 ** 6)}/month
            </span>
          </p>
        </div>

        <button
          onClick={() => navigate(`${PATH_PUBLIC_APP.product.root}/${productInfor.id}`)}
          className='flex items-center justify-center rounded-xl bg-transparent group-hover:bg-ln-text-product xs:size-[42px] md:size-[68px]'
        >
          <FaPlus className='xs:size-4 md:size-6' color='white' />
        </button>
      </div>
    </div>
  )
})

export default ProductCard
