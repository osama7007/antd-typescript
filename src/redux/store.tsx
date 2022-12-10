import { configureStore } from '@reduxjs/toolkit'
import drugs from "./drugSlice";
export const store = configureStore({
  reducer: {
   drugs
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
