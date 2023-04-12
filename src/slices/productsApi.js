
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://10.8.10.81:3000" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/product/getProduct`,
    }),
  }),
});


export const { useGetAllProductsQuery } = productsApi;
