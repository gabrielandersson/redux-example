import { configureStore } from '@reduxjs/toolkit'
import nameSliceReducer from './nameSlice'

export const store = configureStore({
  reducer: {
      namer: nameSliceReducer
  },
})