import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import SignupForm from "./components/SignUp";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer, { getTotals } from "./slices/cartSlice";

import { productsApi } from "./slices/productsApi";
import { catagoryApi } from "./slices/catagoryApi";

import Cart from "./components/cart";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import Product from "./components/Product";
import productsReducer from "./slices/itemsApi";
import ProtectedRoute from "./components/ProtectedRoute";
import authReducer from "./slices/authStoreSlice.ts";
import PageLayout from "./components/PageLayout";
import idReducer from "./slices/idSlide";
import SubCatagories from "./components/SubCatagories";
import Home from "./components/Home";
import SubSub from "./components/SubSub";
import SignUp2 from "./components/SignUp2";
import { authApi } from "./slices/authApi.ts";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    id: idReducer,
    products: productsReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [catagoryApi.reducerPath]: catagoryApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      catagoryApi.middleware,
      authApi.middleware
    ),
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

        <div className="Divider d-f">
          <Sidebar />

          <div style={{ width: "100%" }}>
            <Routes>
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/signup2" element={<SignUp2 />} />
              <Route path="/login" element={<Login />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<div>not found</div>} />
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route
                  path="/home/products/SubCategory"
                  element={<SubCatagories />}
                />
                <Route
                  path="/home/products/subCategory/products"
                  element={<SubSub />}
                />
                <Route path="/home/cart" element={<Cart />} />
                <Route path="/home/products" element={<Product />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
              </Route>

              <Route element={<PageLayout />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
