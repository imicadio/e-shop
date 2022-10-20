import React, { useState, createContext } from "react";
import { CardBig, CardNormal, CardResponsive } from "../index";

export const AmountContext = createContext(null);

const ProductsList = ({ product, isMobile, bigList }) => {
  const [amount, setAmount] = useState(1);   
  const stock = product.stock;

  const returnProductsView = (product) => {
    return bigList ? (
      <CardBig {...product}  />
    ) : (
      <CardNormal {...product}  />
    );
  };

  const returnProduct = isMobile ? (
    <CardResponsive {...product} />
  ) : (
    returnProductsView(product)
  );

  return <AmountContext.Provider value={{amount, setAmount, stock}}>{returnProduct}</AmountContext.Provider>;
};

export default ProductsList;
