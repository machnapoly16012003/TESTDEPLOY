import { IProduct } from '~/@types/models'

export const listProducts: IProduct[] = [
  {
    id: 'p1',
    params: {
      name: 'Product 1',
      categoryID: 'c1',
      description: 'Description 1',
      shippingFee: '10',
      retailer: 'Retailer 1',
      brandName: 'Brand Name 1',
      warranty: 'Warranty 1',
      isFlashSale: true,
      images: ['image1.jpg', 'image2.jpg'],
      videoUrl: 'video.mp4',
      isApprove: true,
      sold: '10',
      boostTime: '10',
      expiryTime: '2022-12-31',
      flashSaleExpiryTime: '2023-01-01',
      activateTime: '2022-11-30',
      isMultipleDiscount: false
    },
    createdAt: '2022-11-01',
    updatedAt: '2022-11-01'
  }
]
