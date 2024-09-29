import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { isEmpty } from 'lodash'
import { IProduct } from '~/@types/models'
import { LOCAL_STORAGE } from '~/constants/localStorage'
import { getLocalStorage, setLocalStorage } from '~/utils/localStorage'

interface IinitialState {
  isLoading: boolean
  listOrders: any[]
  orderSuccess: any | null
}

const initialState: IinitialState = {
  isLoading: false,
  listOrders: [],
  orderSuccess: null
}

const productSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getListOrders.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getListOrders.fulfilled, (state, action) => {
        state.isLoading = false
        state.listOrders = action.payload === false ? [] : action.payload
      })
      .addCase(getListOrders.rejected, (state) => {
        state.isLoading = false
        state.listOrders = []
      })
  }
})

// export const {} = productSlice.actions
const productReducer = productSlice.reducer

export default productReducer

export const getListOrders = createAsyncThunk('product/getListOrders', async () => {
  try {
    const listProducts: IProduct[] = []
    if (listProducts && !isEmpty(listProducts)) setLocalStorage(LOCAL_STORAGE.LIST_ORDERS, listProducts)
    const storageData = getLocalStorage(LOCAL_STORAGE.LIST_ORDERS)
    return listProducts || storageData || []
  } catch (error) {
    console.log('Error get list orders:', error)
    return false
  }
})
