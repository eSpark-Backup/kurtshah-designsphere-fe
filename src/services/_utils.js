
export const baseUrl = "https://localhost:44310"

export const prepareHeaders = (headers) => {
  const token = typeof window !== "undefined" && localStorage.getItem('token')
  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }
  return headers
}

