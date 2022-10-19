import React, { useState } from "react";
import { CardBig, CardNormal, CardResponsive } from "../index";

const ProductsList = ({ product, isMobile, bigList }) => {
  const [amount, setAmount] = useState(1);

  const returnProductsView = (product) => {
    return bigList ? <CardBig {...product} amount={amount} /> : <CardNormal {...product} amount={amount} />;
  };

  const returnProduct = isMobile ? (
    <CardResponsive {...product} amount={amount} />
  ) : (
    returnProductsView(product)
  );

  return returnProduct;
};

export default ProductsList;
