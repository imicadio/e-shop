import React from "react";
import { useSelector } from "react-redux";
import TableComponent from "../../components/TableComponent/TableComponent";
import Container from "../../layout/Container/Container";
import { selectCartItems } from "../../redux/slice/cartSlice";
import LayoutAside from '../../layout/LayoutAside/LayoutAside';
import AsideCart from "./AsideCart/AsideCart";

const Cart = () => {
    const cartItems = useSelector(selectCartItems)    

  return (
    <Container customClass="px-3 py-5">      
      <LayoutAside aside={<AsideCart />} content={<TableComponent cartItems={cartItems} />} />      
    </Container>
  );
};

export default Cart;
