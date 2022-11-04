import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTITY,
  CLEAR_CART,
  SAVE_URL,
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from "../../../redux/slice/cartSlice";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../../redux/slice/authSlice";

const AsideCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectCartTotalQuantity);
  const totalAmount = useSelector(selectCartTotalAmount);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(CALCULATE_SUBTOTAL());
    dispatch(CALCULATE_TOTAL_QUANTITY());
  }, [cartItems, dispatch]);

  const url = window.location.href;

  const checkout = () => {
    if (isLoggedIn) {
      navigate("/checkout-details");
    } else {
      dispatch(SAVE_URL(url));
      navigate("/login");
    }
  };

  return (
    <React.Fragment>      
      <Paper sx={{ width: "100%", mb: 2, p: 3 }}>
        <p className="title is-5">Toal amount: {totalAmount.toFixed(2)}</p>
        <p className="title is-5">Toal quantity: {totalQuantity}</p>
        <button type=" button" className="button" onClick={checkout}>Checkout</button>
      </Paper>
    </React.Fragment>
  );
};

export default AsideCart;
