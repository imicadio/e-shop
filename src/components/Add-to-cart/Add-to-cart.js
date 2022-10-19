import React from 'react'
import CartMinimal from './Cart-minimal/Cart-minimal';

const AddToCart = ({ type, customClass }) => {

  const renderComponent = type && <CartMinimal />

  return (
    <div className={customClass}>
      { renderComponent }
    </div>
  )
}

export default AddToCart;