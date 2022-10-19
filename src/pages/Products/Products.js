import React, { useEffect, useState } from "react";
import Container from "../../layout/Container/Container";
import FilterList from "../../components/Filters/Filter-list/Fitler-list";
import { useProducts } from "../../hooks/realtime-db/useProducts/useProducts";
import { useScreen } from "../../hooks/useScreen";
import {
  CardBig,
  CardNormal,
  CardResponsive,
} from "../../components/Products-list-view";

import './Products.scss'

export const Products = () => {
  const [bigList, setBigList] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [isLoading, loadingError, slides] = useProducts();
  const { isMobile } = useScreen();

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const products = slides.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleGrid = (value) => setBigList(value);
  

  const returnProductsView = (product, id) => {
    return bigList ? <CardBig {...product} key={`product-${id}`} /> : <CardNormal {...product} key={`product-${id}`} />;
  };

  const returnProduct = (product, id) => {
    return isMobile ? (
      <CardResponsive {...product} key={`product-${id}`} />
    ) : (
      returnProductsView(product, id)
    );
  };

  const renderProductsList =
    slides.length > 0 ? (
      products.map((product, id) => returnProduct(product, id))
    ) : (
      <h2>No results products</h2>
    );

  return (
    <Container customClass="p-5">
      <div className="main-content columns">
        <div className="column is-3 is-hidden-touch is-hidden-desktop-only">Filters</div>
        <div className="column is-9 products__content-wrapper">
          <FilterList onClickGrid={handleGrid} />
          <div className="products-list-wrapper">{renderProductsList}</div>
        </div>
      </div>
    </Container>
  );
};

export default Products;
