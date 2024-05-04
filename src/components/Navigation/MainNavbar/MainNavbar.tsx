import React, { useState } from "react";
import "../../../assets/styles/Navigation/main-navbar.scss";
import { NavLink } from "react-router-dom";

const MainNavbar = () => {
  return (
    <div className="main-navbar__container">
      <div className="main-navbar__content">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className="nav__link"
                /* onClick={handleLinkClick} */
              >
                Home
              </NavLink>
            </li>
            <li>Process</li>
            <li>
              <NavLink
                to="about"
                className="nav__link"
                /* onClick={handleLinkClick} */
              >
                About
              </NavLink>
            </li>
            <li>Design Support</li>
            <li>Manufacturing</li>
            <li>Material Selection</li>
            <li>3d Printing</li>
            <li>Get in Touch</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MainNavbar;
