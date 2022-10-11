import React from "react";

import HeaderTopBar from "../../components/Header-top-bar/HeaderTopBar";
import HeaderContent from "../../components/Header-content/HeaderContent";


const Header = () => {
  // const openMobileMenu = () => {
  //   const isActive = "is-active";

  //   const burgerBtn = document.querySelector(
  //     '[data-target="navbarBurgerMenu"]'
  //   );
  //   burgerBtn.classList.toggle(isActive);

  //   const burgerMenu = document.querySelector("#navbarBurgerMenu");
  //   burgerMenu.classList.toggle(isActive);
  // };

  return (
    <header>
      <HeaderTopBar />
      <HeaderContent />
    </header>
  );
};

export default Header;
