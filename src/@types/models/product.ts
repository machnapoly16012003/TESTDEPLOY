export interface IProduct {
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
