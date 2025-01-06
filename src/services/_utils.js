import { getLocalStorage } from "@/utils";

export const baseUrl = "https://localhost:44310"
export const projectBaseUrl = "http://localhost:5204"

export const prepareHeaders = (headers) => {
  const token = getLocalStorage("token");
  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }
  return headers
}

