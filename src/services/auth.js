import { authApiFunc } from "./rtk";

export const authApi = authApiFunc.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (credentials) => ({
        url: "/connect/token",
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
    reSend: builder.mutation({
      query: (credentials) => ({
        url: "/connect/token",
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
    signIn: builder.mutation({
      query: (credentials) => ({
        url: "/connect/token",
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
    verifyEmail: builder.mutation({
      query: (credentials) => ({
        url: "/connect/token",
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
    getCountriesInfo: builder.mutation({
      query: (token) => ({
        url: "/UserInfo/GetCountriesAndJobRoles",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
    updateUser: builder.mutation({
      query: ({ credentials, token }) => ({
        url: "/UserInfo/UpdateUserProfile",
        method: "PATCH",
        body: credentials,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    logout: builder.mutation({
      query: (token) => ({
        url: "/UserInfo/LogOut",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getUserInfo: builder.mutation({
      query: (token) => ({
        url: "/UserInfo/GetUserDetails",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    forgotPassReq: builder.mutation({
      query: (credentials) => ({
        url: "/connect/token",
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
    emailMfaOtp: builder.mutation({
      query: (credentials) => ({
        url: "/connect/token",
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
    verifyMfaOtp: builder.mutation({
      query: (credentials) => ({
        url: "/connect/token",
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
    reSync: builder.mutation({
      query: ({ credentials, token }) => ({
        url: "/UserInfo/ReSync",
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ credentials, token }) => ({
        url: "/UserInfo/ResetPassword",
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    deleteAccount: builder.mutation({
      query: ({ credentials, token }) => ({
        url: "/UserInfo/DeleteAccount",
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getAllUser: builder.mutation({
      query: () => ({
        url: "/UserInfo/GetAllUsers",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useVerifyEmailMutation,
  useGetCountriesInfoMutation,
  useUpdateUserMutation,
  useReSendMutation,
  useLogoutMutation,
  useGetUserInfoMutation,
  useForgotPassReqMutation,
  useEmailMfaOtpMutation,
  useVerifyMfaOtpMutation,
  useResetPasswordMutation,
  useDeleteAccountMutation,
  useReSyncMutation,
  useGetAllUserMutation,
} = authApi;
