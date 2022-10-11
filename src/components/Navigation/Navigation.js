import React from "react";
import { Link } from "react-router-dom";
import Container from "../../layout/Container/Container";

const Navigation = () => {
  return (
    <div className="border-top border-bottom navbar-menu" id="navbarMainMenu">
      <Container customClass="px-3">
        <div className="navbar-start">
          <Link to="/" className="navbar-item"><i class="fa-solid fa-house-chimney text-color-red"></i></Link>
          <Link to="/products" className="navbar-item">Products</Link>

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
