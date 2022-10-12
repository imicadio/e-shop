import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header, Footer } from "./containers/index";
import { Home, Contact, Products } from "./pages/index";

import "./style/index.scss";
import "./App.scss";
import Container from "./layout/Container/Container";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container customClass="px-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
