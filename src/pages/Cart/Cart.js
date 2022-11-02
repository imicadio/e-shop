import React from "react";
import { useSelector } from "react-redux";
import TableComponent from "../../components/TableComponent/TableComponent";
import Container from "../../layout/Container/Container";
import { selectCartItems } from "../../redux/slice/cartSlice";
import LayoutAside from "../../layout/LayoutAside/LayoutAside";
import AsideCart from "./AsideCart/AsideCart";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);

  const renderContent =
    cartItems.length > 0 ? (
      <LayoutAside
        aside={<AsideCart />}
        content={<TableComponent cartItems={cartItems} />}
      />
    ) : <p className="title is-2">Cart is empty</p>;

  return <Container customClass="px-3 py-5">
    {renderContent}
  </Container>;
};

export default Cart;
