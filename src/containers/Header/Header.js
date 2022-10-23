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
    

    const brands = [];
    const categories = [];

    slides.map((product) => brands.includes(product.brand.toUpperCase()) ? false : brands.push(product.brand.toUpperCase()));
    slides.map((product) => categories.includes(product.category.toUpperCase()) ? false : categories.push(product.category.toUpperCase()));   
    dispatch(STORE_PRODUCTS({
      products: slides,
      categories: categories,
      brands: brands,
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
