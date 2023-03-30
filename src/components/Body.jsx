import React from "react";
import Header from "./Header";
import "../style/body.css";
import Cart from "./cart";
import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Body = () => {
  return (
    <>
      <section id="body">
        <Header />
        
          <Home />
          
          {/* <Route path="/home/cart" element={<Cart />} />
          <Route path="/" exact element={<Home />} /> */}
        
      </section>
    </>
  );
};

export default Body;
