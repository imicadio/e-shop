import React, { useContext } from "react";
import LinkTo from "../../LinkTo/LinkTo";
import AddToCart from "../../Add-to-cart/Add-to-cart";
import { Rating } from "@mui/material";
import { useBrutto } from "../../../hooks/useBrutto";
import { AmountContext } from "../Products-list/Products-list";

import './CardBig.scss';

const CardBig = ({
  id,
  title,
  description,
  price,
  stock,
  discountPercentage,
  rating,
  category,
  thumbnail,
  images,
}) => {
  const { amount } = useContext(AmountContext);

  const link = '/products/' + id;
  const brutto = useBrutto(price);

  const amountBrutto = (amount * brutto).toFixed(2);
  const amountNetto = (amount * price).toFixed(2);

  return (
    <div className="columns border-wrapper card-big__wrapper mt-1">
      <LinkTo link={link} customClass="column is-2 box-square">
        <img src={thumbnail} alt={title} className="image-cover" />
      </LinkTo>
      <div className="column is-flex is-flex-direction-column is-justify-content-center is-gap">
        <LinkTo link={link}>
          <h2 className="title is-5 is-uppercase has-text-weight-semibold">
            {title}
          </h2>
          <h3 className="subtitle is-7">{category}</h3>
        </LinkTo>
        <LinkTo link={link}>
          <p className="subtitle is-6 mb-1">{description}</p>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
            size="small"
          />
        </LinkTo>
      </div>
      <div className="column is-4 big-card__info-wrapper bg--gray-light border-left">

        <div className="block columns">
          <div className="column is-8">
            <p className="title is-3">
              {amountNetto}
              <span className="title is-5">$</span>
            </p>
            <p className="subtitle is-7">netto</p>
          </div>
          <div className="column is-4 is-flex is-flex-direction-column is-align-items-end is-justify-content-end">
            <p className="title is-5">
              {price}
              <span className="title is-7">$</span>
            </p>
            <p className="subtitle is-7">netto szt.</p>
          </div>
        </div>

        <div className="block">
          <div className="block columns">
            <div className="column is-4">
              <p className="title is-6">
                {amountBrutto}
                <span className="title is-7">$</span>
              </p>
              <p className="subtitle is-7">brutto</p>
            </div>

            <div className="column is-4 is-flex is-align-items-center is-justify-content-center is-flex-direction-column">
              <p className="title is-6">
                {stock} <i className="fa-solid fa-arrow-up-short-wide"></i>
              </p>
              <p className="subtitle is-7">quantity</p>
            </div>

            <div className="column is-4 is-flex is-flex-direction-column is-align-items-end is-justify-content-end">
              <p className="title is-6">
                {brutto}
                <span className="title is-7">$</span>
              </p>
              <p className="subtitle is-7">brutto szt.</p>
            </div>
          </div>
        </div>

        <div className="block columns">
          <div className="column">
            <AddToCart
              customClass="control is-flex is-flex-direction-row is-justify-content-center is-align-items-center"
              type="cart-normal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBig;
