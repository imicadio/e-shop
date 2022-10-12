import React from "react";

import HeaderTopBar from "../../components/Header-top-bar/HeaderTopBar";
import HeaderContent from "../../components/Header-content/HeaderContent";
import Navigation from "../../components/Navigation/Navigation";

const Header = () => {
  return (
    <header>
      <HeaderTopBar />
      <HeaderContent />
      <Navigation />
    </header>
  );
};

export default Header;
