import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./containers/index";
import { Home, Contact, Products, Login, Register, Cart, CheckoutDetails, ProductDetails } from "./pages/index";


import "./App.scss";
import "./style/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout-details" element={<CheckoutDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
