import { configureStore } from '@reduxjs/toolkit'
import DemoSlice from './slices/demo/DemoSlice'
export const store = configureStore({
  reducer: {
    DemoSlice:DemoSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch