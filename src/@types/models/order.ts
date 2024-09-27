export interface ShippingForm {
  firstName: string
  lastName: string
  email: string
  country: string
  stateOrProvince: string
  city?: string
  phone: string
  addressDetail: string
  postalCode?: string
  paymentMethod: string
  storeId: string
  cardNumber: string
  expirationDate: string
  cvv: string
  nameOnCard: string
  walletId: string
}

export interface PaymentForm {
  paymentMethod: string
  storeId: string
  cardNumber: string
  expirationDate: string
  cvv: string
  nameOnCard: string
  walletId: string
}
