import React from "react";
import LinkTo from "../../LinkTo/LinkTo";

const BoxImages = ({ slide }) => {
  return (
    <LinkTo link={'/products/' + slide.id}>
      <div className="swiper-slide-grid__wrapper">
        <img src={slide.thumbnail} alt={slide.id} />
      </div>
      <p className="has-text-weight-semibold">{slide.title}</p>
    </LinkTo>
  );
};

export default BoxImages;
