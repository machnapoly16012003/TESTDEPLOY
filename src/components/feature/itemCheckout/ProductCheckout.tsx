import { FC, memo } from 'react'
import { IProduct } from '~/@types/models'
import { formatPrice } from '~/utils/format'

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
        <p className='rp-title-item-checkout'>{product.product.params.name}</p>
        <p className='rp-price-item-checkout'>${formatPrice(Number(product.variants[0].priceOptions.price), 2)}</p>
      </div>
    </div>
  )
})

export default ProductCheckout
