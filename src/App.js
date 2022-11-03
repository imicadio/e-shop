import React from "react";

import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import { Header, Footer } from "./containers/index";
import {
  Home,
  Contact,
  Products,
  Login,
  Register,
  Cart,
  CheckoutDetails,
  ProductDetails,
} from "./pages/index";

import "./App.scss";
import "./style/index.scss";
import routes from "./routes";


function App() {
  const renderRoutes = useRoutes(routes);
  
  return (
    <>
      <Header />
      {renderRoutes}
      <Footer />
    </>
  );
}

export default App;
