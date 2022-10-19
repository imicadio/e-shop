import React from 'react'
import CartMinimal from './Cart-minimal/Cart-minimal';
import CartNormal from './Cart-normal/Cart-normal';

const AddToCart = ({ type, customClass, amount }) => {

  const renderComponent = (type) => {
    switch(type) {
      case 'cart-minimal':
        return <CartMinimal amount={amount} />;
      case 'cart-normal':
        return <CartNormal />;
      default: 
        break;
    }
  } 

  return (
    <div className={customClass}>
      { renderComponent(type) }
    </div>
  )
}

export default AddToCart;