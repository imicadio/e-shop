import React, { useContext } from "react";
import LinkTo from "../../LinkTo/LinkTo";
import AddToCart from "../../Add-to-cart/Add-to-cart";
import { Rating } from "@mui/material";
import { useBrutto } from "../../../hooks/useBrutto";
import { AmountContext } from "../Products-list/Products-list";

import "./CardResponsive.scss";
import ShowOnLogin from "../../ShowOnLogin/ShowOnLogin";

const CardResponsive = ({
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

  const link = "/products/" + id;
  const brutto = useBrutto(price);

  const amountBrutto = (amount * brutto).toFixed(2);
  const amountNetto = (amount * price).toFixed(2);

  return (
    <div className="columns p-3 card-responsive__wrapper mt-3">
      <div className="block is-flex is-flex-direction-column is-justify-content-center border-bottom pb-3">
        <LinkTo link={link}>
          <h2 className="title is-5 is-uppercase has-text-weight-semibold">
            {title}
          </h2>
          <p className="subtitle is-6">{description}</p>
        </LinkTo>
      </div>
      <div className="columns is-mobile">
        <div className="column is-half">
          <LinkTo link={link} customClass="column is-2 box-square">
            <img src={thumbnail} alt={title} className="image-cover" />
          </LinkTo>
        </div>
        <div className="column is-half">
          <h3 className="title is-5 mb-2">{category}</h3>
          <Rating
            name="half-rating-read"
            defaultValue={rating | ""}
            precision={0.5}
            readOnly
            size="small"
            className="subtitle"
          />

          <div className="block">
            <p className="title is-3">
              {amountNetto}
              <span className="title is-5">$</span>
            </p>
            <p className="subtitle is-7">netto</p>
          </div>

          <div className="block">
            <p className="title is-6">
              {amountBrutto}
              <span className="title is-7">$</span>
            </p>
            <p className="subtitle is-7">brutto</p>
          </div>
        </div>
      </div>
      
      <ShowOnLogin>
        <div className="border-top pt-3">
          <AddToCart
            customClass="control is-flex is-flex-direction-row is-justify-content-center is-align-items-center"
            type="cart-normal"
          />
        </div>
      </ShowOnLogin>
    </div>
  );
};

export default CardResponsive;
