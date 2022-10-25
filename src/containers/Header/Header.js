import React, { useEffect } from "react";

import HeaderTopBar from "../../components/Header-top-bar/HeaderTopBar";
import HeaderContent from "../../components/Header-content/HeaderContent";
import Navigation from "../../components/Navigation/Navigation";
import { useProducts } from "../../hooks/realtime-db/useProducts/useProducts";
import { useDispatch } from "react-redux";
import { STORE_PRODUCTS } from "../../redux/slice/listProductSlice";
import { FILTERS_STORE } from "../../redux/slice/filterSlice";

const Header = () => {
  const [isLoading, loadingError, slides] = useProducts();
  const dispatch = useDispatch();

  useEffect(() => {
    const brands = [];
    const categories = [];

    slides.map((product) =>
      brands.includes(product.brand.toUpperCase())
        ? false
        : brands.push(product.brand.toUpperCase())
    );

    slides.map((product) =>
      categories.includes(product.category.toUpperCase())
        ? false
        : categories.push(product.category.toUpperCase())
    );

    const prices = [];
    slides.map((item) => prices.push(parseInt(item.price)));

    const minPrice = prices.length > 0 ? Math.min(...prices) : null;
    const maxPrice = prices.length > 0 ? Math.max(...prices) : null;

    dispatch(
      STORE_PRODUCTS({
        products: slides,
      })
    );

    dispatch(
      FILTERS_STORE({
        categories: categories,
        brands: brands,
        minPrice: minPrice,
        maxPrice: maxPrice,
      })
    );
  }, [slides]);

  return (
    <header>
      <HeaderTopBar />
      <HeaderContent />
      <Navigation />
    </header>
  );
};

export default Header;
