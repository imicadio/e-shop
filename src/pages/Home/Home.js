import React from "react";
import Slider from "../../containers/Slider/Slider";
import Container from "../../layout/Container/Container";
import { useProducts } from "../../hooks/realtime-db/useProducts/useProducts";

import "./Home.scss";
import { useScreen } from "../../hooks/useScreen";

const Home = () => {
  const { isMobile } = useScreen();

  const [mainSliderLoading, mainLoadingError, mainSlides] = useProducts(3);

  const [loadingSlider1, loadingErrorSlider1, slides1] = useProducts(18);

  if (!mainSliderLoading || !loadingSlider1) {
    return (
      <div className="loader-wrapper">
        <div className="loader is-loading"></div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Container fluid customClass="is-relative" key="test">
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
      <Container customClass="is-relative">
        <Slider
          slides={slides1}
          pagination          
          customClass="home-slider my-5"
          type="box-images"
          grid
          loop
          autoplay
        />
      </Container>
    </React.Fragment>
  );

  // return <h1>Home</h1>
};

export default Home;
