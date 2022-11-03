import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "../../layout/Container/Container";
import LinkTo from "../LinkTo/LinkTo";
import Search from "../Search/Search";
import ShowOnLogout from "../../components/ShowOnLogout/ShowOnLogout";
import ShowOnLogin from "../../components/ShowOnLogin/ShowOnLogin";

import "./HeaderContent.scss";

import {
  CALCULATE_TOTAL_QUANTITY,
  selectCartItems,
  selectCartTotalQuantity,
} from "../../redux/slice/cartSlice";
const HeaderContent = () => {
  const dispatch = useDispatch();
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);
  const cartItems = useSelector(selectCartItems);

  const openMobileMenu = () => {
    const isActive = "is-active";

    const burgerBtn = document.querySelector(
      '[data-target="navbarBurgerMenu"]'
    );
    burgerBtn.classList.toggle(isActive);

    const burgerMenu = document.querySelector("#navbarMainMenu");
    burgerMenu.classList.toggle(isActive);
  };

  useEffect(() => {
    dispatch(CALCULATE_TOTAL_QUANTITY());
  }, [cartItems]);

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
          <ShowOnLogout>
            <div className="mr-2">
              <p className="is-size-7 has-text-weight-medium">
                Don't have an account?
              </p>
              <p className="has-text-weight-semibold">
                Join us!
                <LinkTo customClass="has-text-weight-bold ml-1" link="/register">
                  Register
                </LinkTo>
              </p>
            </div>

            <LinkTo customClass="button is-primary" link="/login">
              Login
            </LinkTo>
          </ShowOnLogout>
          <ShowOnLogin>
            <LinkTo link="/cart" customClass="is-relative">
              <div className="cart-badge badge">{cartTotalQuantity}</div>
              <p>
                Cart <i className="fa-solid fa-bag-shopping ml-2"></i>
              </p>
            </LinkTo>
          </ShowOnLogin>
        </div>

        {/* RESPONSIVE BUTTON */}
        <div className="header__btn-actions-wrapper is-hidden-desktop column is-flex is-justify-content-end p-0">
          <ShowOnLogin>
            <LinkTo
              link="/cart"
              customClass="box-square is-flex is-justify-content-center is-align-items-center"
            >
              <div className="is-relative">
                <div className="cart-badge badge">{cartTotalQuantity}</div>
                <i className="fa-solid fa-bag-shopping header__action-bag"></i>
              </div>
            </LinkTo>
          </ShowOnLogin>
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
};

export default HeaderContent;
