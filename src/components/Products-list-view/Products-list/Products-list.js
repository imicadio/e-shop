import React, { useState, createContext } from "react";
import { CardBig, CardNormal, CardResponsive } from "../index";

export const AmountContext = createContext(null);

const ProductsList = ({ product, isMobile, bigList }) => {
  const [amount, setAmount] = useState(1); 
  
  const stock = product.stock;

  const returnProductsView = (product) => {
    return bigList ? (
      <CardBig {...product} amount={amount} />
    ) : (
      <CardNormal {...product} amount={amount} />
    );
  };

  const returnProduct = isMobile ? (
    <CardResponsive {...product} amount={amount} />
  ) : (
    returnProductsView(product)
  );

  return <AmountContext.Provider value={{amount, setAmount, stock}}>{returnProduct}</AmountContext.Provider>;
};

export default ProductsList;
