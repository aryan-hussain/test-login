import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://10.8.10.40:5000" }),
  endpoints: (builder) => ({
    signinUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "/user/login",
          method: "post",
          body,
        };
      },
    }),
    signupUser: builder.mutation({
      query: (body: { name: string; email: string; password: string ; address: string; phoneNumber: any }) => {
        return {
          url: "/user/signup",
          method: "post",
          body,
        };
      },
    }),
    
    verifyUser: builder.mutation({
      query: (body: { token: string }) => {
        console.log(body.token);

        return {
          url: "/user/verfiy-user-mail",
          method: "post",
          body,
        };
      },
    }),
    sendMailForgotPassword: builder.mutation({
      query: (body: { email: string }) => {
        return {
          url: "/user/forgot-password",
          method: "post",
          body,
        };
      },
    }),
    resetPassword: builder.mutation({
      query: (body: { token: string; password: string }) => {
        return {
          url: "/user/verify-forgot-mail",
          method: "post",
          body,
        };
      },
    }),
  }),
});


export const {
  useSigninUserMutation,
  useSignupUserMutation,
  useVerifyUserMutation,
  useSendMailForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
