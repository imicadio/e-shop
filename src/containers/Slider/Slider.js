import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Container from "../../layout/Container/Container";

import classnames from "classnames";
import "swiper/swiper-bundle.css";
import "./Slider.scss";

SwiperCore.use([Autoplay, Pagination]);

const Slider = ({ options, slides, customClass, pagination, grid, hero }) => {
  const CSSclassName = classnames(customClass, {
    [`slider-grid`]: grid,
  });

  const gridView = grid && {
    slidesPerView: 2,
    slidesPerGroup: 2,
  };

  const swiperParams = {
    pagination: pagination ? true : false,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    ...gridView,
  };

  const slidesNodes = slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <img
        src={slide.productImage}
        alt={slide.productName}
        className="full-width"
      />
    </SwiperSlide>
  ));

  return (
    <Container fluid customClass="is-relative">
      <Swiper className={CSSclassName} {...swiperParams}>
        {slidesNodes}
      </Swiper>
    </Container>
  );
};

export default Slider;
