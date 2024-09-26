export interface IProduct {
  product: IProductParam
  variants: IProductVariant[]
  attributes: IProductAttrs[][]
}

export interface IProductParam {
  id: string
  params: {
    name: string
    categoryID: string
    description: string
    shippingFee: string
    retailer: string
    brandName: string
    warranty: string
    isFlashSale: boolean
    images: string[]
    videoUrl: string
    isApprove: boolean
    sold: string
    boostTime: string
    expiryTime: string
    flashSaleExpiryTime: string
    activateTime: string
    isMultipleDiscount: boolean
  }
  createdAt: string
  updatedAt: string
}

export interface IProductVariant {
  variantID: string
  priceOptions: IProductPriceOption
}

export interface IProductPriceOption {
  price: string
  subscriptionFee: string
  quantity: string
}

export interface IProductAttrs {
  key: string
  value: string
}
