import React, { useState } from "react";
import LinkTo from "../../LinkTo/LinkTo";
import AddToCart from '../../Add-to-cart/Add-to-cart';

import "./CardNormal.scss";

const CardNormal = ({
  title,
  description,
  price,
  stock,
  discountPercentage,
  rating,
  category,
  thumbnail,
  images,    
  amount
}) => {

  return (
    <div className="columns border-bottom card-normal__wrapper">
      <LinkTo customClass="column is-2 box-square">
        <img src={thumbnail} alt={title} className="image-cover" />
      </LinkTo>
      <div className="column is-flex is-flex-direction-column is-justify-content-center">
        <LinkTo>
          <h2 className="title is-5 is-uppercase has-text-weight-semibold">
            {title}
          </h2>
        </LinkTo>
        <LinkTo>
          <p className="subtitle is-6">{description}</p>
        </LinkTo>
      </div>
      <div className="column is-2 is-flex is-flex-direction-column is-justify-content-center">
        <h3 className="title is-5 mb-0 has-text-centered">{price}</h3>
        <p className="has-text-weight-light has-text-centered">{price}</p>
        <p className="has-text-weight-light has-text-centered">netto</p>
      </div>
      <div className="column is-1 is-flex is-flex-direction-column is-justify-content-center">
        <p className="title is-6">
          {stock} <i className="fa-solid fa-arrow-up-short-wide"></i>
        </p>
      </div>
      <AddToCart amount={amount} customClass="control is-flex is-flex-direction-row is-justify-content-center is-align-items-center pr-3" type="cart-minimal" />
    </div>
  );
};

export default CardNormal;
