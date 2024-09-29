import { memo, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { QueryConfig } from '~/@types/common'
import { IProduct } from '~/@types/models'
import { listSubscriptions } from '~/assets/mock/subscription'
import { ProductCheckout, SupscriptionCheckout } from '~/components/feature/itemCheckout'
import useQueryConfig from '~/hooks/useQueryConfig'
import { useAppSelector } from '~/redux/configStore'
import { formatPrice } from '~/utils/format'

const CheckoutComplete = memo(() => {
  const { id: productId } = useParams()

  const { listProducts } = useAppSelector((s) => s.product)

  const queryConfig: QueryConfig = useQueryConfig()

  const listProductCheckouts = useMemo(
    () => listProducts.filter((p) => p.product.id === productId),
    [productId, listProducts]
  )

  const listSubCheckouts = useMemo(
    () => listSubscriptions.filter((s) => s.id === Number(queryConfig.subscription)),
    [productId, listProducts]
  )

  return (
    <div className='flex items-start md:flex-col lg:flex-col xl:flex-row xl:gap-[86px]'>
      <section
        className={`flex h-full w-full flex-1 flex-col py-20 xs:px-4 sm:px-4 md:order-2 md:px-10 lg:order-2 lg:px-10 xl:order-1 xl:min-h-[100vh] xl:pl-[100px] xl:pr-0 xl:pt-[116px]`}
      ></section>
      <section className='2xs:hidden top-0 min-w-[625px] flex-col gap-5 bg-[#FCFDFF] px-10 py-10 pt-[120px] xs:hidden sm:hidden md:flex md:h-fit md:w-full lg:flex lg:h-fit lg:w-full xl:sticky xl:order-2 xl:min-h-[100vh] xl:w-fit'>
        <h6 className='text-[20px]/[30px] font-bold capitalize'>Preview</h6>
        <div className='mb-[30px] flex flex-1 flex-col gap-5'>
          {listProductCheckouts.map((product, index) => (
            <ProductCheckout key={`${product.product.id}-${index}`} product={product} />
          ))}
          {listSubCheckouts.map((sub, index) => (
            <SupscriptionCheckout key={`${sub.id}-${index}`} subscription={sub} />
          ))}
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex w-full items-center justify-between'>
            <p
              className={`text-[#818EA1] xs:text-[16px]/[24px] md:text-[16px]/[24px] xl:text-[16px]/[24px] 3xl:text-[16px]/[24px]`}
            >
              Subtotal
            </p>
            <p className='font-semibold xs:text-[16px]/[24px] md:text-[16px]/[24px]'>
              $
              {listProducts.length > 0
                ? formatPrice(
                    listProducts.reduce((total: number, currentProduct: IProduct) => {
                      return total + Number(currentProduct.variants?.[0]?.priceOptions.price)
                    }, 0),
                    2
                  )
                : formatPrice(0, 2)}
            </p>
          </div>
          <div className='flex w-full items-center justify-between'>
            <p
              className={`text-[#818EA1] xs:text-[16px]/[24px] md:text-[16px]/[24px] xl:text-[16px]/[24px] 3xl:text-[16px]/[24px]`}
            >
              Shipping
            </p>
            <p className='font-semibold xs:text-[16px]/[24px] md:text-[16px]/[24px]'>+${formatPrice(5000000, 2)}</p>
          </div>

          <div className='flex items-center justify-between'>
            <p className='text-[18px]/[27px] font-medium'>Total</p>
            <p className='text-[18px]/[27px] font-bold'>
              $
              {listProducts.length > 0
                ? formatPrice(
                    listProducts.reduce((total: number, currentProduct: IProduct) => {
                      return total + Number(currentProduct.variants?.[0]?.priceOptions.price)
                    }, 0) + 5000000,
                    2
                  )
                : formatPrice(0, 2)}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
})

export default CheckoutComplete
