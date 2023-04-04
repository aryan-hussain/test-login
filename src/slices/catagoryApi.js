import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://10.8.10.69:3001" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `user/category/list`,
    }),
  }),
});

console.log(productsApi)
export const { useGetAllCatagoryQuery } = productsApi;
