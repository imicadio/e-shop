import React from "react";
import { useScreen } from "../../hooks/useScreen";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation, Grid } from "swiper";

import classnames from "classnames";
import "swiper/swiper-bundle.css";
import "./Slider.scss";
import Box from "../../components/Box/Box";


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
  customNav,
  type,
  loop,
  autoplay,
  customOptions,
  CSScustomSwiper,
  paginationBottom
}) => {
  const { isMobile } = useScreen();

  const CSSclassName = classnames(customClass, {
    [`slider-grid`]: isMobile && grid,
    [`slider-pagination-boottom`]: paginationBottom
  });

  const CSScustomSwiperSlide = CSScustomSwiper ? "swiper-slide__custom" : null;

  const swiperRef = React.useRef(null);

  const gridView = grid && {
    slidesPerView: 2,
    slidesPerGroup: 6,
    grid: {
      rows: 2,
    },
    modules: [Grid, Pagination],
    spaceBetween: 20,

    breakpoints: {
      600: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
        grid: {
          rows: 1,
        },
        modules: [Grid, Pagination],
      },
    },
  };

  const swiperParams = {
    pagination: pagination ? true : false,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    navigation: navigation ? (isMobile ? false : true) : false,
    loop: loop ? true : false,
    autoplay: autoplay
      ? {
          delay: 5000,
        }
      : false,
    ...gridView,
    ...customOptions
  };

  const renderSlides = slides.map((slide, index) => (
    <SwiperSlide key={index} className={CSScustomSwiperSlide}>
      <Box type={type} slide={slide} />
    </SwiperSlide>
  ));

  const cssButtonPrev = customNav
    ? classnames("swiper-button-prev", {
        [`custom-navigation`]: customNav,
      })
    : null;

  const cssButtonNext = customNav
    ? classnames("swiper-button-next", {
        [`custom-navigation`]: customNav,
      })
    : null;

  const renderNavigation = !isMobile && navigation && (
    <React.Fragment>
      <div
        className={cssButtonPrev}
        onClick={() => swiperRef.current.swiper.slidePrev()}
      ></div>
      <div
        className={cssButtonNext}
        onClick={() => swiperRef.current.swiper.slideNext()}
      ></div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Swiper className={CSSclassName} {...swiperParams} ref={swiperRef}>
        {renderSlides}
      </Swiper>
      {renderNavigation}
    </React.Fragment>
  );
};

export default Slider;
