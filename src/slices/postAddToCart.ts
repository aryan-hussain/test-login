import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSelector } from "react-redux";



export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://10.8.10.40:5000",
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: ({ product }) => ({
       
        url: "/addcart/addCart",
        method: "POST",
        body: {
          _id:product._id,
          image:product.image,
          name:product.name,
          brand:product.brand,
          subcategory_id:product.subcategory_id,
          price:product.price,
          desc:product.desc,
          cartQuantity:product.cartQuantity
        },
      }),
    }),
  }),
});

export const { useAddToCartMutation } = cartApi;
