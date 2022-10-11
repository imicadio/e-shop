import React from "react";
import Container from "../../layout/Container/Container";

const Navigation = () => {
  return (
    <div className="border-top border-bottom navbar-menu" id="navbarMainMenu">
      <Container customClass="px-3">
        <div class="navbar-start">
          <a class="navbar-item">Home</a>

          <a class="navbar-item">Documentation</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">About</a>
              <a class="navbar-item">Jobs</a>
              <a class="navbar-item">Contact</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
