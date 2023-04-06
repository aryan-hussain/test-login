
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://10.8.10.40:5000" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `product/allProducts`,
    }),
  }),
});

console.log(productsApi)
export const { useGetAllProductsQuery } = productsApi;
