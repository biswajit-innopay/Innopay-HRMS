import { configureStore } from '@reduxjs/toolkit'
import navSlice from './slices/NavSlice'

const store = configureStore({
  reducer: {
    navdata: navSlice,
  },
})

export default store
