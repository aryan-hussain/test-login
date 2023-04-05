import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const catagoryApi = createApi({
  reducerPath: "catagoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ``,
    }),
  }),
});

console.log(catagoryApi)
export const { useGetAllCatagoryQuery } = catagoryApi;
