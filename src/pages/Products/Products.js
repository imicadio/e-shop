import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../../layout/Container/Container";
import FilterList from "../../components/Filters/Filter-list/Fitler-list";
import { useScreen } from "../../hooks/useScreen";
import { fetchProducts } from "../../redux/slice/listProductSlice";
import ProductsListing from "../../containers/ProductsListing/ProductsListing";
import FilterAside from "../../components/Filter-aside/Filter-aside";
import { Stack, Pagination } from "@mui/material";

import {
  FILTER_BY_SEARCH,
  selectFilteredProducts,
} from "../../redux/slice/filterSlice";

import { floorDown } from "../../hooks/numbers";

import "./Products.scss";

export const Products = () => {
  const refFilter = useRef();
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
  const hadleSearch = (value) => {
    setCurrentPage(1);
    setSearch(value);
  };
  const handleSetItemsPerPage = (value) => {
    setItemsPerPage(value);
    const tmpTotalPages = floorDown(filteredProducts.length / value);
    tmpTotalPages > 1
      ? setTotalPages(floorDown(filteredProducts.length / value))
      : setTotalPages(1);
  };
  const handleCurrentPage = (value) => setCurrentPage(value);
  const handlePagination = (event, value) => setCurrentPage(value);
  const handleShowFilter = () => {
    const showElement = "show-filter";

    const menuFilter = refFilter.current;
    const isActive = menuFilter.classList.contains(showElement);

    const html = document.querySelector("html");

    if (isActive) {
      html.classList.remove("no-scroll");
      menuFilter.classList.remove(showElement);
    } else {
      html.classList.add("no-scroll");
      menuFilter.classList.add(showElement);
    }
  };

  useEffect(() => {
    dispatch(FILTER_BY_SEARCH({ products, search }));
  }, [dispatch, products, search]);

  useEffect(() => {
    const tmpTotalPages = floorDown(filteredProducts.length / itemsPerPage);
    tmpTotalPages > 1
      ? setTotalPages(floorDown(filteredProducts.length / itemsPerPage))
      : setTotalPages(1);
  }, [filteredProducts]);

  return (
    <Container customClass="p-5 products__wrapper position-inherit">
      <div className="main-content columns position-inherit">
        <div
          ref={refFilter}
          className="column is-3 is-hidden-touch is-hidden-desktop-only position-inherit products__filter-aside"
        >
          <FilterAside
            products={filteredProducts}
            closeFilter={handleShowFilter}
          />
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
            showFilter={handleShowFilter}
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

      {floorDown(filteredProducts.length / itemsPerPage) > 1 ? (
        <Stack spacing={2} className="mt-5">
          <Pagination
            count={floorDown(filteredProducts.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePagination}
            className="is-flex is-justify-content-end"
          />
        </Stack>
      ) : null}
    </Container>
  );
};

export default Products;
