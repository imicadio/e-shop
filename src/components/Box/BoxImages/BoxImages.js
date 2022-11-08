import React from "react";
import { ROUTE } from "../../../shared/routing";
import LinkTo from "../../LinkTo/LinkTo";

const BoxImages = ({ slide }) => {
  return (
    <LinkTo link={ROUTE.PRODUCTS_DETAIL + slide.id}>
      <div className="swiper-slide-grid__wrapper">
        <img src={slide.thumbnail} alt={slide.id} />
      </div>
      <p className="has-text-weight-semibold">{slide.title}</p>
    </LinkTo>
  );
};

export default BoxImages;
