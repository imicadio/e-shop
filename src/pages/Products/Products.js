import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../../layout/Container/Container";
import FilterList from "../../components/Filters/Filter-list/Fitler-list";
import { useScreen } from "../../hooks/useScreen";
import { fetchProducts } from "../../redux/slice/listProductSlice";
import ProductsListing from "../../containers/ProductsListing/ProductsListing";
import FilterAside from "../../components/Filter-aside/Filter-aside";

import {
  FILTER_BY_SEARCH,
  selectFilteredProducts,
} from "../../redux/slice/filterSlice";

import "./Products.scss";
import { floorDown } from "../../hooks/numbers";

export const Products = () => {
  const { isMobile } = useScreen();
  const dispatch = useDispatch();

  const [bigList, setBigList] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(null);
  const products = useSelector(fetchProducts);
  const filteredProducts = useSelector(selectFilteredProducts);  

  const handleGrid = (value) => setBigList(value);
  const hadleSearch = (value) => setSearch(value);
  const handleSetItemsPerPage = (value) => {
    setItemsPerPage(value);
    setTotalPages(floorDown(filteredProducts.length / value));
  };
  const handleCurrentPage = (value) => setCurrentPage(value);

  useEffect(() => {
    dispatch(FILTER_BY_SEARCH({ products, search }));
  }, [dispatch, products, search]);

  useEffect(() => {
    setTotalPages(floorDown(filteredProducts.length / itemsPerPage));
  }, [filteredProducts]);

  return (
    <Container customClass="p-5">
      <div className="main-content columns">
        <div className="column is-3 is-hidden-touch is-hidden-desktop-only">
          <FilterAside />
        </div>
        <div className="column is-9 products__content-wrapper">
          <FilterList
            onClickGrid={handleGrid}
            hadleSearch={hadleSearch}
            itemsPerPage={itemsPerPage}
            handleItemsPerPage={handleSetItemsPerPage}
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
            totalPages={totalPages}
          />
          <ProductsListing
            products={filteredProducts}
            isMobile={isMobile}
            bigList={bigList}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />

          {/* <ProductsList
            customClass="products-list-wrapper"
            products={fetchProducts}
            isMobile={isMobile}
            bigList={bigList}
          /> */}
        </div>
      </div>
    </Container>
  );
};

export default Products;
