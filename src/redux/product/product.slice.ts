import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { isEmpty } from 'lodash'
import { IProduct } from '~/@types/models'
import { LOCAL_STORAGE } from '~/constants/localStorage'
import { getLocalStorage, setLocalStorage } from '~/utils/localStorage'

interface IinitialState {
  loading: boolean
  listProducts: IProduct[]
}

const initialState: IinitialState = {
  loading: false,
  listProducts: getLocalStorage(LOCAL_STORAGE.LIST_PRODUCT) || []
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getListProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(getListProducts.fulfilled, (state, action) => {
        state.loading = false
        state.listProducts = action.payload === false ? [] : action.payload
      })
      .addCase(getListProducts.rejected, (state) => {
        state.loading = false
        state.listProducts = []
      })
  }
})

// export const {} = productSlice.actions
const productReducer = productSlice.reducer

export default productReducer

export const getListProducts = createAsyncThunk('product/getListProducts', async () => {
  try {
    const listProducts: IProduct[] = []
    if (listProducts && !isEmpty(listProducts)) setLocalStorage(LOCAL_STORAGE.LIST_PRODUCT, listProducts)
    const storageData = getLocalStorage(LOCAL_STORAGE.LIST_PRODUCT)
    return listProducts || storageData || []
  } catch (error) {
    console.log('Error get list products:', error)
    return false
  }
})
