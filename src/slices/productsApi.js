
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products/categories/filter?category=Smartphone`,
    }),
  }),
});

console.log(productsApi)
export const { useGetAllProductsQuery } = productsApi;
