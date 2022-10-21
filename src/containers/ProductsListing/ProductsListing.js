import React from "react";
import { ProductsList } from "../../components/Products-list-view";

const ProductsListing = ({ products, isMobile, bigList, currentPage, itemsPerPage }) => {

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const returnProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const renderProductsList =
    products.length > 0 ? (
        returnProducts.map((product, id) => (
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

  return <div className="products-list-wrapper">{renderProductsList}</div>;
};

export default ProductsListing;
