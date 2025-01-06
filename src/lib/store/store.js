import { configureStore } from '@reduxjs/toolkit'
import auth from './slices/auth'
import theme from "./slices/theme"
import projects from "./slices/projects"
import { authApi } from '@/services/auth'
import { projectApi } from '@/services/projects'


export const store = configureStore({
  reducer: {
    auth,
    theme,
    projects,
    [authApi.reducerPath]: authApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(projectApi.middleware),

})