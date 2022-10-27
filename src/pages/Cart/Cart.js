import React from "react";
import { useSelector } from "react-redux";
import TableComponent from "../../components/TableComponent/TableComponent";
import Container from "../../layout/Container/Container";
import { selectCartItems } from "../../redux/slice/cartSlice";

const Cart = () => {
    const cartItems = useSelector(selectCartItems)

    

  return (
    <Container customClass="px-3 py-5">
      <TableComponent cartItems={cartItems} />
    </Container>
  );
};

export default Cart;
