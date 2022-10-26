import React, { useRef } from "react";
import { useScreen } from "../../hooks/useScreen";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Container from "../../layout/Container/Container";

import classnames from "classnames";
import "swiper/swiper-bundle.css";
import "./Slider.scss";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Slider = ({
  options,
  slides,
  customClass,
  pagination,
  grid,
  hero,
  navigation,
  navigationName,
  customNav
}) => {
  const CSSclassName = classnames(customClass, {
    [`slider-grid`]: grid,
  });

  const { isMobile } = useScreen();

  const swiperRef = React.useRef(null);

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
    navigation: isMobile ? false : true,
    ...gridView,
  };

  const renderSlides = slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <img
        src={slide.thumbnail}
        alt={slide.id}
        className="full-width"
      />
    </SwiperSlide>
  ));

  const cssButtonPrev = customNav ? classnames('swiper-button-prev', {
    [`custom-navigation`]: customNav
  }) : 'swiper-button-prev';

  const cssButtonNext = customNav ? classnames('swiper-button-next', {
    [`custom-navigation`]: customNav
  }) : 'swiper-button-next';

  const renderNavigation = !isMobile && navigation && (
    <React.Fragment>
      <div className={cssButtonPrev}  onClick={() => swiperRef.current.swiper.slidePrev()} ></div>
      <div className={cssButtonNext} onClick={() => swiperRef.current.swiper.slideNext()}></div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Swiper className={CSSclassName} {...swiperParams} ref={swiperRef}>
        {renderSlides}
      </Swiper>
      { renderNavigation }
    </React.Fragment>
  );
};

export default Slider;
