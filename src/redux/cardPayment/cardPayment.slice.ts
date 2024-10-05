import { createSlice } from '@reduxjs/toolkit'
import { CardInfo } from '~/@types/models'
import { lisCardPayment } from '~/assets/mock/card'

interface CardPaymentState {
  listWallets: CardInfo[]
}

const initialState: CardPaymentState = {
  listWallets: lisCardPayment || []
}

const cardPaymentSlice = createSlice({
  name: 'cardPayment',
  initialState,
  reducers: {}
})

const cardPaymentReducer = cardPaymentSlice.reducer

export default cardPaymentReducer
