import React from "react";

// TODO: remove unused imports
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import { Header, Footer } from "./containers/index";

// TODO: remove unused imports
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

// TODO: use es6 arrow function (performance) https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/
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
