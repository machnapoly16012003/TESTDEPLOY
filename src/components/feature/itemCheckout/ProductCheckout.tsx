import { FC, memo } from 'react'
import { IProduct } from '~/@types/models'
import { formatLocaleString } from '~/utils/format'

interface IProductCheckoutProps {
  product: IProduct
}

const ProductCheckout: FC<IProductCheckoutProps> = memo(({ product }) => {
  return (
    <div className='flex items-center gap-6'>
      <div className='border-[#DBDDE3] rp-img-item-checkout'>
        <img
          src={product.product.params.images?.[0]}
          alt={product.product.params.name}
          className='size-full object-contain object-center'
        />
      </div>

      <div className='rp-box-content-item-checkout'>
        <div className='space-y-1'>
          <p className='rp-title-item-checkout'>{product.product.params.name}</p>
          <p className='text-[14px]/[14.7px] font-medium text-blackDark/[.64]'>Quantity: {product.quantityInCart}</p>
        </div>
        <p className='rp-price-item-checkout'>
          ${formatLocaleString(Number(product.variants[0].priceOptions.price) / 10 ** 6)}.00
        </p>
      </div>
    </div>
  )
})

export default ProductCheckout
