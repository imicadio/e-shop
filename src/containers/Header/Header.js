import React, { useEffect } from "react";

import HeaderTopBar from "../../components/Header-top-bar/HeaderTopBar";
import HeaderContent from "../../components/Header-content/HeaderContent";
import Navigation from "../../components/Navigation/Navigation";
import { useProducts } from "../../hooks/realtime-db/useProducts/useProducts";
import { useDispatch } from "react-redux";
import { STORE_PRODUCTS } from "../../redux/slice/listProductSlice";

const Header = () => {
  const [isLoading, loadingError, slides] = useProducts();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(STORE_PRODUCTS({
      products: slides,
    }))
  }, [slides])

  return (
    <header>
      <HeaderTopBar />
      <HeaderContent />
      <Navigation />
    </header>
  );
};

export default Header;
