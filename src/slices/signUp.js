import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const API_URL = 'http://10.8.10.81:3000';


const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        url: '/user/register',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useSignUpMutation } = usersApi;