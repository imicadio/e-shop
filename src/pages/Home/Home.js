import React from "react";
import Slider from "../../containers/Slider/Slider";
import Container from "../../layout/Container/Container";
import { useProducts } from "../../hooks/realtime-db/useProducts/useProducts";

import "./Home.scss";
import { useScreen } from "../../hooks/useScreen";
import { Typography } from '@mui/material';

const Home = () => {
  const { isMobile } = useScreen();

  const [mainSliderLoading, mainLoadingError, mainSlides] = useProducts(3);

  const [loadingSlider1, loadingErrorSlider1, slides1] = useProducts(18);

  const [loadingSlider2, loadingErrorSlider2, slides2] = useProducts(18);

  if (!mainSliderLoading || !loadingSlider1 || !loadingSlider2) {
    return (
      <div className="loader-wrapper">
        <div className="loader is-loading"></div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Container fluid customClass="is-relative mb-5" key="test">
        <Slider
          slides={mainSlides}
          pagination
          navigation
          customNav
          customClass="home-hero-slider"
          type="box-full-width"
          isMobile
        />
      </Container>
      <Container customClass="is-relative px-3">
        <Typography variant="h4" my={8}>
          Slider 2 - grid slider
        </Typography>
        <Slider
          slides={slides1}
          pagination
          customClass="my-5"
          type="box-images"
          grid
          loop
          autoplay
          paginationBottom
        />
      </Container>

      <Container customClass="is-relative py-5 my-5 px-3">
        <Typography variant="h4" my={8}>
          Slider 3 - with button buy if user is logged in
        </Typography>
        
        <Slider
          slides={slides2}
          navigation
          customClass="my-5"
          type="box-standard"
          CSScustomSwiper
          customOptions={{
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerGroup: 2,
            grid: {
              rows: 1,
            },
            spaceBetween: 20,

            breakpoints: {
              700: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 30,
              },

              900: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 30,
              },
            },
          }}
        />
      </Container>
    </React.Fragment>
  );

  // return <h1>Home</h1>
};

export default Home;
