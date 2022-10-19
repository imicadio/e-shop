import React from "react";

const CartNormal = () => {
  return (
    <div className="card-normal__input-wrapper full-width is-flex">
      <p className="title is-size-7 mr-2 my-auto">szt.</p>
      <input
        className="input is-hovered border-wrapper"
        type="text"
        placeholder="Hovered input"
        // value={amount}
        // onChange={() => setAmount(amount + 1)}
      />
      <div className="buttons-counter__wrapper is-flex is-justify-content-space-between">
        <button type="button" className="card-normal__button btn-counter">
          <i className="fa-solid fa-plus"></i>
        </button>
        <button type="button" className="card-normal__button btn-counter">
          <i className="fa-solid fa-minus"></i>
        </button>
      </div>
      <button type="button" className="button is-primary px-3 is-flex-grow-1 ml-2">
        <p><i className="fa-solid fa-cart-arrow-down"></i><span className="has-text-weight-semibold is-hidden-touch ml-2">Add to cart</span></p>
      </button>
    </div>
  );
};

export default CartNormal;
