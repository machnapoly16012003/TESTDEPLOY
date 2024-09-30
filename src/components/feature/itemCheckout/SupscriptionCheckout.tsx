import { FC, memo } from 'react'
import { ISubscription } from '~/@types/models'
import images from '~/assets'
import { formatPrice } from '~/utils/format'

interface ISupscriptionCheckoutProps {
  subscription: ISubscription
}

const SupscriptionCheckout: FC<ISupscriptionCheckoutProps> = memo(({ subscription }) => {
  return (
    <div className='flex items-center xs:gap-[14px] md:gap-6'>
      <div className='border-[#D9C8FF] rp-img-item-checkout'>
        <img
          src={images.icon.subscription}
          alt={subscription.title}
          className='size-full object-contain object-center'
        />
      </div>

      <div className='rp-box-content-item-checkout'>
        <p className='rp-title-item-checkout'>{subscription.title} Subscription</p>
        <p className='rp-price-item-checkout'>${formatPrice(Number(subscription.subscription), 2)}</p>
      </div>
    </div>
  )
})

export default SupscriptionCheckout
