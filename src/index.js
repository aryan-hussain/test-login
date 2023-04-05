import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignupForm from "./components/SignUp";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// import productsReducer, { productsFetch } from "./slices/productsSlice";
import cartReducer, { getTotals } from "./slices/cartSlice";
import { productsApi } from "./slices/productsApi";
import { catagoryApi } from "./slices/catagoryApi";
import Cart from "./components/cart";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import Product from "./components/Product";
import productsReducer from './slices/itemsApi';

import PageLayout from "./components/PageLayout"

const store = configureStore({
  reducer: {
    // products: productsReducer,
    cart: cartReducer,
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [catagoryApi.reducerPath]: catagoryApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware,catagoryApi.middleware)
});

// store.dispatch(productsFetch());
store.dispatch(getTotals());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
            <Header />
            <Sidebar />
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/" element={<Login />} />
          <Route path="home" element={<App />} />
            <Route path="/home/cart" element={<><Cart /></>} />
            <Route path="/home/products" element={<><Product /> </>} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          
          <Route element={<PageLayout />}>
          
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
