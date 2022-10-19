import React, { useContext } from "react";
import { AmountContext } from "../../Products-list-view/Products-list/Products-list";

const CartMinimal = () => {
  const { amount, setAmount, stock } = useContext(AmountContext);

  const handleAmount = (e) => {
    const inputValue = parseInt(e.target.value.toString().replace(/[^0-9]/g, ""));

    const min = parseInt(e.target.min);
    const max = parseInt(e.target.max);

    if (inputValue > min && inputValue < max)
      return setAmount(inputValue);
    else if (inputValue <= 0) return setAmount(1);
    else if (inputValue > stock) return setAmount(stock);
    else return setAmount('');
  };

  return (
    <div className="card-normal__input-wrapper is-flex">
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
      <p className="title is-size-7 mx-1 my-auto">szt.</p>
      <button type="button" className="button is-primary px-3">
        <i className="fa-solid fa-cart-arrow-down"></i>
      </button>
    </div>
  );
};

export default CartMinimal;
