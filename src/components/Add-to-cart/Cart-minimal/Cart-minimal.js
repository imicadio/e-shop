import React from "react";

const CartMinimal = ({ amount }) => {
  return (
    <div className="card-normal__input-wrapper is-flex">
      <input
        className="input is-hovered border-wrapper"
        type="text"
        placeholder="Hovered input"
        value={amount}
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
      <p className="title is-size-7 mx-1 my-auto">szt.</p>
      <button type="button" className="button is-primary px-3">
        <i className="fa-solid fa-cart-arrow-down"></i>
      </button>
    </div>
  );
};

export default CartMinimal;
