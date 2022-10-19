import React, { useState } from "react";
import Container from "../../layout/Container/Container";
import FilterList from "../../components/Filters/Filter-list/Fitler-list";
import { useProducts } from "../../hooks/realtime-db/useProducts/useProducts";
import { useScreen } from "../../hooks/useScreen";
import { ProductsList } from "../../components/Products-list-view";

import "./Products.scss";

export const Products = () => {
  const [bigList, setBigList] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isLoading, loadingError, slides] = useProducts();
  const { isMobile } = useScreen();

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const arrayProducts = slides.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleGrid = (value) => setBigList(value);

  const renderProductsList =
    slides.length > 0 ? (
      arrayProducts.map((product, id) => (      
          <ProductsList
            product={product}
            isMobile={isMobile}
            bigList={bigList}     
            key={`product-${id}`}       
          />
      ))
    ) : (
      <h2>No results products</h2>
    );

  return (
    <Container customClass="p-5">
      <div className="main-content columns">
        <div className="column is-3 is-hidden-touch is-hidden-desktop-only">
          Filters
        </div>
        <div className="column is-9 products__content-wrapper">
          <FilterList onClickGrid={handleGrid} />
          <div className="products-list-wrapper">{renderProductsList}</div>

          {/* <ProductsList
            customClass="products-list-wrapper"
            products={slides}
            isMobile={isMobile}
            bigList={bigList}
          /> */}
        </div>
      </div>
    </Container>
  );
};

export default Products;
