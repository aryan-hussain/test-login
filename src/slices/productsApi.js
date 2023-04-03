
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://10.8.10.149:3000/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `product/getProduct`,
    }),
  }),
});

console.log(productsApi)
export const { useGetAllProductsQuery } = productsApi;
