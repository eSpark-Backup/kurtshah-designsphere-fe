import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl, prepareHeaders, projectBaseUrl } from './_utils'

export const authApiFunc = createApi({
  reducerPath: "auth-api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders
  }),
  tagTypes: ['auth'],
  endpoints: (builder) => ({}),
})

export const projectApiFunc = createApi({
  reducerPath: "project-api",
  baseQuery: fetchBaseQuery({
    baseUrl: projectBaseUrl,
    prepareHeaders
  }),
  tagTypes: ['projects'],
  endpoints: (builder) => ({}),
})