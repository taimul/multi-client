import { apiSlice } from "../../rootApi/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/user/login-user",
        method: "POST",
        body: { email, password },
      }),
      invalidatesTags: ["User"],
    }),
    register: builder.mutation({
      query: ({ name, email, password, token }) => ({
        url: "/user/create-user",
        method: "POST",
        body: { name, email, password, token },
      }),
      invalidatesTags: ["User"],
    }),

    forgotPassword: builder.mutation({
      query: ({ phone, countryCode }) => ({
        url: "/user/forget-password-request",
        method: "POST",
        body: { phone, countryCode },
      }),
    }),

    newPasswordSet: builder.mutation({
      query: ({ token, newPassword, confirmPassword }) => ({
        url: "/user/forget-password",
        method: "POST",
        body: { token, newPassword, confirmPassword },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/user/logout-user",
        method: "POST",
      }),
    }),
    //get user info by id
    getUserInfo: builder.query({
      query: () => ({
        url: `/user/get-profile`,
        method: "GET",
      }),
    }),
    //send otp for the first time registration phone, countryCode
    sendOtp: builder.mutation({
      query: ({ phone, countryCode }) => ({
        url: "/user/generate-otp",
        method: "POST",
        body: { phone, countryCode },
      }),
    }),
    verifyUserOtp: builder.mutation({
      query: ({ otp, token }) => ({
        url: "/user/verify-otp",
        method: "POST",
        body: { otp, token },
      }),
      invalidatesTags: ["User"],
    }),
    changePassword: builder.mutation({
      query: ({ oldPassword, newPassword, confirmPassword }) => ({
        url: "/user/change-password",
        method: "POST",
        body: { oldPassword, newPassword, confirmPassword },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyUserOtpMutation,
  useForgotPasswordMutation,
  useLogoutMutation,
  useGetUserInfoQuery,
  useSendOtpMutation,
  useNewPasswordSetMutation,
  useChangePasswordMutation,
} = authApi;
export default authApi;
