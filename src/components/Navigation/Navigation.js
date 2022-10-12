import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "../../layout/Container/Container";

import './Navigation.scss';

const Navigation = () => {
  // const location = useLocation();
  // const { pathname } = location;

  // console.log(pathname == '/');

  // const activeLink = (pathname === "/") ? "active navbar-item" : "";

  return (
    <div className="border-top border-bottom navbar-menu header__navigation" id="navbarMainMenu">
      <Container customClass="px-3">
        <div className="navbar-start">
          <NavLink to="/" className="navbar-item" end>
            <i class="fa-solid fa-house-chimney text-color-red"></i>
          </NavLink>
          <NavLink to="/products" className="navbar-item">
            Products
          </NavLink>

          {/* <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link">More</Link>

            <div className="navbar-dropdown">
              <Link className="navbar-item">About</Link>
              <Link className="navbar-item">Jobs</Link>
              <Link className="navbar-item">Contact</Link>
              <hr className="navbar-divider" />
              <Link className="navbar-item">Report an issue</Link>
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
