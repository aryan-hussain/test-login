import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignupForm from "./components/SignUp";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import productsReducer, { productsFetch } from "./slices/productsSlice";
import cartReducer, { getTotals } from "./slices/cartSlice";
import { productsApi } from "./slices/productsApi";
import Cart from "./components/cart";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard"

// const [userId, setuserId] = useState("");

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <BrowserRouter>
    < ToastContainer />
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/home" element={<App />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/login" element={<AdminLogin  />} />
        <Route path="/login" element={<Login  />} />
        <Route path="/home/cart" element={<><Header /> <Cart /></>} />

      </Routes>
      
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
