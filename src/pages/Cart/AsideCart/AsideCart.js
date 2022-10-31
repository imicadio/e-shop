import React, { useEffect } from "react";
import { Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTITY,
  CLEAR_CART,
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from "../../../redux/slice/cartSlice";

const AsideCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectCartTotalQuantity);
  const totalAmount = useSelector(selectCartTotalAmount);

  const clearCart = () => dispatch(CLEAR_CART());

  useEffect(() => {
    dispatch(CALCULATE_SUBTOTAL());
    dispatch(CALCULATE_TOTAL_QUANTITY());
  }, [cartItems, dispatch]);

  return (
    <Paper sx={{ width: "100%", mb: 2, p: 3 }}>

      <p className="title is-5">Toal amount: {totalAmount.toFixed(2)}</p>
      <p className="title is-5">Toal quantity: {totalQuantity}</p>
      <button type="button" className="button" onClick={clearCart}>
        Clear cart
      </button>
    </Paper>
  );
};

export default AsideCart;
