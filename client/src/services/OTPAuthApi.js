import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const OTPAuthApi = createApi({
  reducerPath: 'OTPAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/user/' }),
  endpoints: (builder) => ({
    userSignin: builder.mutation({
      query: (user) => {
        return {
          url: 'signin',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    verifyOTP: builder.mutation({
      query: (user) => {
        return {
          url: 'verify',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),

  }),
})

export const { useUserSigninMutation, useVerifyOTPMutation } = OTPAuthApi