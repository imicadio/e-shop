import React from "react";
import Slider from "../../containers/Slider/Slider";
import { useSlider } from "../../hooks/realtime-db/useSlider/useSlider";


import "./Home.scss";

const Home = () => {

  const [isLoading, loadingError, slides] = useSlider(3);

  if (!isLoading) {
    return (
      <div className="loader-wrapper">
        <div className="loader is-loading"></div>
      </div>
    );
  }

  return <Slider slides={slides} pagination customClass="home-slider__wrapper"/>;

  // return <h1>Home</h1>
};

export default Home;
