import React from "react";

import Container from "../../layout/Container/Container";

import "./HeaderContent.scss";

export default function headerContent() {
  return (
    <Container customClass="column">
      <div className="navbar-brand columns mb-0">
        <a href="/" className="column is-3 navbar-item">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="logo"
            className="navbar__logo"
          />
        </a>

        <div className="column field has-addons mb-0 is-hidden-touch">
          <div className="control full-width">
            <input
              className="input"
              type="text"
              placeholder="Find a repository"
            />
          </div>
          <div className="control">
            <a className="button is-info">
              <i class="fa-solid fa-magnifying-glass"></i>
              <span className="has-text-weight-semibold ml-2">Search</span>
            </a>
          </div>
        </div>

        <div className="column is-2 has-text-right is-hidden-touch">
          <a href="/login" type="button" className="button is-primary">
            Login
          </a>
        </div>

        {/* RESPONSIVE BUTTON */}
        <span
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBurgerMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>

      <div className="field has-addons mb-0 is-hidden-desktop">
        <div className="control full-width">
          <input
            className="input"
            type="text"
            placeholder="Find a repository"
          />
        </div>
        <div className="control">
          <a className="button is-info">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span className="has-text-weight-semibold is-hidden-touch ml-2">
              Search
            </span>
          </a>
        </div>
      </div>
    </Container>
  );
}
