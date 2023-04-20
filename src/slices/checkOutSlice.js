import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const postCartData = createAsyncThunk(
  "cart/postCartData",
  async (cartItems, { history }) => {
    const cartData = cartItems.map((item) => {
      return {
        product_id: item._id,
        cartQuantity: item.cartQuantity,
      };
    });

    const token = localStorage.getItem("token");
    console.log("token when checkout", token);
    const response = await fetch("http://10.8.10.40:5000/addcart/buynow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(cartData),
    });
    console.log(response);

    if (!response.ok) {
      const error = await response.json();
      toast.error("Transaction Abort", {
        position: "bottom-left",
        autoClose: 1500,
      });
      throw new Error(error.message);
    }

    toast.success("Payment done Successfully", {
      position: "bottom-left",
      autoClose: 1500,
    });

    return response;
  }
);
