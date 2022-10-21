import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../../layout/Container/Container";
import FilterList from "../../components/Filters/Filter-list/Fitler-list";
import { useScreen } from "../../hooks/useScreen";
import { fetchProducts } from '../../redux/slice/listProductSlice';
import ProductsListing from "../../containers/ProductsListing/ProductsListing";

import { FILTER_BY_SEARCH, selectFilteredProducts } from "../../redux/slice/filterSlice";

import "./Products.scss";


export const Products = () => {
  const [bigList, setBigList] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);  
  const { isMobile } = useScreen();  
  const [search, setSearch] = useState('');
  const filteredProducts = useSelector(selectFilteredProducts);

  const products = useSelector(fetchProducts);

  const dispatch = useDispatch(); 

  const handleGrid = (value) => setBigList(value);  

  const hadleSearch = (value) => setSearch(value)

  useEffect(() => {
    dispatch(FILTER_BY_SEARCH({products, search}));
  }, [dispatch, products, search])

  return (
    <Container customClass="p-5">
      <div className="main-content columns">
        <div className="column is-3 is-hidden-touch is-hidden-desktop-only">
          Filters
        </div>
        <div className="column is-9 products__content-wrapper">
          <FilterList onClickGrid={handleGrid} hadleSearch={hadleSearch} />
          <ProductsListing products={filteredProducts} isMobile={isMobile} bigList={bigList} currentPage={currentPage} itemsPerPage={itemsPerPage} />

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
