import React, { useContext } from "react";
import { AmountContext } from "../Products-list-view/Products-list/Products-list";
import CartMinimal from "./Cart-minimal/Cart-minimal";
import CartNormal from "./Cart-normal/Cart-normal";

const AddToCart = ({ type, customClass }) => {
  const { amount, setAmount, stock, product } = useContext(AmountContext);
  const params = { amount, setAmount, stock, product };

  const renderComponent = (type) => {
    switch (type) {
      case "cart-minimal":
        return <CartMinimal {...params} />;
      case "cart-normal":
        return <CartNormal {...params} />;
      default:
        break;
    }
  };

  return <div className={customClass}>{renderComponent(type)}</div>;
};

export default AddToCart;
