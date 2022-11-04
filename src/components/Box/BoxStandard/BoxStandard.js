import React, { useState } from "react";
import LinkTo from "../../LinkTo/LinkTo";
import CartMinimal from "../../Add-to-cart/Cart-minimal/Cart-minimal";
import ShowOnLogin from '../../ShowOnLogin/ShowOnLogin';

import "./BoxStandard.scss";

const BoxStandard = ({ slide }) => {
  const [amount, setAmount] = useState(1);

  return (
    <>
      <LinkTo link={"/products/" + slide.id}>
        <div className="swiper-slide-grid__wrapper">
          <img src={slide.thumbnail} alt={slide.id} />
        </div>
        <p className="has-text-weight-semibold title is-4">{slide.title}</p>
        <p className="has-text-weight-semibold subtitle is-5">
          {slide.category}
        </p>
        <p className="has-text-weight-semibold title is-5 is-italic my-3">
          {slide.price}$
        </p>
      </LinkTo>
      <ShowOnLogin>
        <CartMinimal
          amount={amount}
          setAmount={setAmount}
          stock={slide.stock}
          product={slide}
        />
      </ShowOnLogin>
    </>
  );
};

export default BoxStandard;
