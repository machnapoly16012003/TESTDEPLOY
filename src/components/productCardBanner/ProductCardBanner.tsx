import { memo, useMemo } from 'react'
import { ProductInfo } from '~/@types/models'
import useDialog from '~/hooks/useDialog'
import useProductCart from '~/hooks/useProductCart'
import { useAppSelector } from '~/redux/configStore'
import { VipDialog } from '~/sections/productDetail'
import { hexToUtf8 } from '~/utils/convert'
import { FavoriteIcon } from '../icons'
import useLocales from '~/hooks/useLocales'

type ProductCardBannerProps = {
  product: ProductInfo
}

const ProductCardBanner = memo(({ product }: ProductCardBannerProps) => {
  const { product: productInfo, variants } = product || {}

  const prices = useMemo(() => variants?.[0].priceOptions, [variants])

  const { favorites } = useAppSelector((s) => s.favorite)

  const { trans } = useLocales()
  const { isOpen, setIsOpen, handleOpen } = useDialog()

  const { handleAddToFavorite } = useProductCart(product)

  return (
    <>
      <div className='relative flex items-center justify-start bg-white/[.44] shadow-4xl backdrop-blur-2xl 2xs:h-[76.8px] 2xs:w-[256px] 2xs:gap-3 2xs:rounded-xl 2xs:px-[7px] xs:h-[76.8px] xs:w-[256px] xs:gap-3 xs:rounded-xl xs:px-[7px] sm:h-[140px] sm:w-[450px] sm:gap-5 sm:rounded-3xl sm:px-[18px]'>
        <div className='2xs:size-[62.17px] 2xs:min-w-[62.17px] xs:size-[62.17px] xs:min-w-[62.17px] sm:size-[106px] sm:min-w-[106px]'>
          <img
            src={hexToUtf8(productInfo.params.images?.[0])}
            alt={productInfo.params.name}
            className='h-full w-full rounded-lg bg-white/[.50] object-cover object-center'
          />
        </div>
        <div className='flex flex-col 2xs:gap-0 xs:gap-0 sm:gap-3'>
          <p className='font-customBold leading-[21px] 2xs:text-[11.7px] xs:text-[11.7px] sm:text-[20px]'>
            {productInfo.params.name}
          </p>
          <p
            className={`text-nowrap text-blackMain/[.64] 2xs:text-[12px]/[22px] xs:text-[12px]/[22px] sm:text-[16px]/[16.8px]`}
          >
            {trans('product.member-price')}:{' '}
            <span
              className={`font-customSemiBold text-blackMain 2xs:text-[17px]/[22px] xs:text-[17px]/[22px] sm:text-[24px]/[25.2px]`}
            >
              {+prices.memberPrice / 1000000}$
            </span>{' '}
            <span
              className={`text-blackMain/[.64] line-through 2xs:text-[13px]/[22px] xs:text-[13px]/[22px] sm:text-[16px]/[16.8px]`}
            >
              {+prices.retailPrice / 1000000}$
            </span>
          </p>
          <div className='flex items-end gap-1'>
            <p
              onClick={handleOpen}
              className={`cursor-pointer text-blackMain/[.64] underline hover:text-greenMain 2xs:text-[10px]/[22px] xs:text-[10px]/[22px] sm:text-[16px]/[16.8px]`}
            >
              {trans('product.vip-price')}:{' '}
            </p>
            <span className={`font-customBold xs:text-[17px]/[22px] sm:text-[24px]/[25.2px]`}>
              {+prices.vipPrice / 1000000}$
            </span>
          </div>
        </div>
        <button onClick={handleAddToFavorite}>
          <FavoriteIcon
            color={favorites.some((fav: string) => fav === product.product.id) ? 'linear' : 'black'}
            className='absolute 2xs:right-2 2xs:top-2 2xs:size-[14.63px] xs:right-2 xs:top-2 xs:size-[14.63px] sm:right-4 sm:top-4 sm:size-6'
          />
        </button>
      </div>

      <VipDialog open={isOpen} setOpen={setIsOpen} />
    </>
  )
})

export default ProductCardBanner
