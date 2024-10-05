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
}

export interface PaymentForm {
  paymentMethod: string
  cardNumber: string
  nameOnCard: string
  expirationDate: string
  cvv: string
  walletAddress: string
}
