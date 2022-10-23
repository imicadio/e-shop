import React, { useContext } from "react";
import { inputBetweenNumber } from "../../../hooks/numbers";
import { AmountContext } from "../../Products-list-view/Products-list/Products-list";

const CartNormal = () => {
  const { amount, setAmount, stock } = useContext(AmountContext);

  const handleAmount = (e) => {
    setAmount(inputBetweenNumber(e.target.value, stock))
  };

  return (
    <div className="card-normal__input-wrapper full-width is-flex">
      <p className="title is-size-7 mr-2 my-auto">szt.</p>
      <input
        className="input is-hovered border-wrapper"
        type="text"
        placeholder="Hovered input"
        value={amount}
        onChange={handleAmount}
        min="0"
        max={stock}
      />
      <div className="buttons-counter__wrapper is-flex is-justify-content-space-between">
        <button
          type="button"
          className="card-normal__button btn-counter"
          onClick={() => amount < stock && setAmount(amount + 1)}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
        <button
          type="button"
          className="card-normal__button btn-counter"
          onClick={() => amount > 1 && setAmount(amount - 1)}
        >
          <i className="fa-solid fa-minus"></i>
        </button>
      </div>
      <button
        type="button"
        className="button is-primary px-3 is-flex-grow-1 ml-2"
      >
        <p>
          <i className="fa-solid fa-cart-arrow-down"></i>
          <span className="has-text-weight-semibold is-hidden-touch ml-2">
            Add to cart
          </span>
        </p>
      </button>
    </div>
  );
};

export default CartNormal;
