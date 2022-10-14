import React from "react";

import Container from "../../layout/Container/Container";
import LinkTo from "../LinkTo/LinkTo";
import Search from "../Search/Search";

import "./HeaderContent.scss";

export default function headerContent() {
  const openMobileMenu = () => {
    const isActive = "is-active";

    const burgerBtn = document.querySelector(
      '[data-target="navbarBurgerMenu"]'
    );
    burgerBtn.classList.toggle(isActive);

    const burgerMenu = document.querySelector("#navbarMainMenu");
    burgerMenu.classList.toggle(isActive);
  };

  return (
    <Container customClass="header__content">
      <div className="navbar-brand columns m-0 is-flex-wrap-wrap full-height">
        {/* LOGO */}
        <a href="/" className="column navbar-item is-3 is-flex">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="logo"
            className="navbar__logo"
          />
        </a>

        {/* SEARCH */}
        <Search customClass="column field has-addons mb-0 header__search-wrapper is-align-items-center" />

        {/* BTN LOGIN */}
        <div className="column is-3 is-hidden-touch is-flex is-align-items-center is-justify-content-flex-end">
          <div className="mr-2">
            <p className="is-size-7 has-text-weight-medium">
              Don't have an account?
            </p>
            <p className="has-text-weight-semibold">
              Join us <LinkTo customClass="has-text-weight-bold" link="/register" text="Register" />!
            </p>
          </div>

          <LinkTo customClass="button is-primary" link="/login" text="Login" />
        </div>

        {/* RESPONSIVE BUTTON */}
        <div className="header__btn-actions-wrapper is-hidden-desktop column is-flex is-justify-content-end p-0">
          <i className="fa-solid fa-bag-shopping is-flex is-justify-content-center is-align-items-center header__action-bag"></i>
          <span
            role="button"
            className="navbar-burger burger ml-0 full-height"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBurgerMenu"
            onClick={openMobileMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
      </div>
    </Container>
  );
}
