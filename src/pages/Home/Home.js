import React from "react";
import Slider from "../../containers/Slider/Slider";
import Container from "../../layout/Container/Container";
import { useProducts } from "../../hooks/realtime-db/useProducts/useProducts";

import "./Home.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const Home = () => {
  const [isLoading, loadingError, slides] = useProducts(3);

  if (!isLoading) {
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
          slides={slides}
          pagination
          navigation
          customNav
          customClass="home-hero-slider"
        />
      </Container>
      <Container customClass="is-relative">
        <Slider
          slides={slides}
          pagination
          navigation
          customClass="home-slider"
        />
      </Container>
    </React.Fragment>
  );

  // return <h1>Home</h1>
};

export default Home;
