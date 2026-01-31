import { configureStore } from '@reduxjs/toolkit'
import auth from './slices/auth'
import theme from "./slices/theme"
import { authApi } from '@/services/auth'


export const store = configureStore({
  reducer: {
    auth,
    theme,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),

})