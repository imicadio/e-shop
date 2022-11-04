import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

import { FreeMode, Navigation, Thumbs } from "swiper";

const Gallery = ({ thumbs }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const renderSwiperSlide =
    thumbs.length > 0
      ? thumbs.map((img, index) => (
          <SwiperSlide>
            <img src={img} key={index} />
          </SwiperSlide>
        ))
      : null;

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {renderSwiperSlide}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {renderSwiperSlide}
      </Swiper>
    </>
  );
};

export default Gallery;
