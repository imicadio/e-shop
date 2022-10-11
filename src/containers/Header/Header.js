import React from "react";

import HeaderTopBar from "../../components/header-top-bar/HeaderTopBar";
import Container from "../../layout/Container/Container";

const Header = () => {
  const openMobileMenu = () => {
    const isActive = "is-active";

    const burgerBtn = document.querySelector(
      '[data-target="navbarBurgerMenu"]'
    );
    burgerBtn.classList.toggle(isActive);

    const burgerMenu = document.querySelector("#navbarBurgerMenu");
    burgerMenu.classList.toggle(isActive);
  };

  return (
    <header>
      <HeaderTopBar />
      <nav className="navbar has-shadow">
        <Container>
          <div className="navbar-brand">
            <a href="/" className="navbar-item">
              <img src="https://bulma.io/images/bulma-logo.png" alt="logo" />
            </a>

            <span
              role="button"
              className="navbar-burger burger"
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

          <div className="navbar-menu" id="navbarBurgerMenu">
            <div className="navbar-start">
              <a href="void(0)" className="navbar-item">
                {" "}
                Home{" "}
              </a>
              <a href="void(0)" className="navbar-item">
                {" "}
                Products{" "}
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a href="void(0)" className="navbar-link">
                  {" "}
                  More{" "}
                </a>
                <div className="navbar-dropdown">
                  <a href="void(0)" className="navbar-item">
                    {" "}
                    About{" "}
                  </a>
                  <a href="void(0)" className="navbar-item">
                    {" "}
                    Jobs{" "}
                  </a>
                  <a href="void(0)" className="navbar-item">
                    {" "}
                    Contact{" "}
                  </a>
                  <hr className="navbar-divider" />
                  <a href="void(0)" className="navbar-item">
                    {" "}
                    Report an issue{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <a href="void(0)" className="navbar-item">
                <i className="fa fa-search"></i>
              </a>
              <a href="void(0)" className="navbar-item">
                <i className="fa fa-shopping-bag"></i>
              </a>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
