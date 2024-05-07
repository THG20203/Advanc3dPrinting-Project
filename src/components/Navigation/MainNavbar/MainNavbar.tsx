import React, { useState } from "react";
import "../../../assets/styles/Navigation/main-navbar.scss";
import { NavLink } from "react-router-dom";
import mainLogo from "../../../assets/images/main-logo.png";

const MainNavbar = () => {
  return (
    <div className="main-navbar__container">
      <div className="main-navbar__content">
        <img className="main-navbar__logo" src={mainLogo} />
        <nav>
          <ul className="main-navbar__list">
            <li className="main-navbar__list--item">
              <NavLink
                to="/"
                className="main-navbar__link"
                /* onClick={handleLinkClick} */
              >
                Home
              </NavLink>
            </li>
            <li className="main-navbar__list--item">
              <NavLink
                to="#"
                className="main-navbar__link"
                /* onClick={handleLinkClick} */
              >
                Process
              </NavLink>
            </li>
            <li className="main-navbar__list--item">
              <NavLink
                to="about"
                className="main-navbar__link"
                /* onClick={handleLinkClick} */
              >
                About
              </NavLink>
            </li>
            <li className="main-navbar__list--item">
              <NavLink
                to="#"
                className="main-navbar__link"
                /* onClick={handleLinkClick} */
              >
                Design Support
              </NavLink>
            </li>
            <li className="main-navbar__list--item">
              <NavLink
                to="#"
                className="main-navbar__link"
                /* onClick={handleLinkClick} */
              >
                Manufacturing
              </NavLink>
            </li>
            <li className="main-navbar__list--item">
              <NavLink
                to="#"
                className="main-navbar__link"
                /* onClick={handleLinkClick} */
              >
                Material Selection
              </NavLink>
            </li>
            <li className="main-navbar__list--item">
              <NavLink
                to="/threeDPrinting"
                className="main-navbar__link"
                /* onClick={handleLinkClick} */
              >
                3d Printing
              </NavLink>
            </li>
            <li className="main-navbar__list--item">
              <NavLink
                to="/contact"
                className="main-navbar__link"
                /* onClick={handleLinkClick} */
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MainNavbar;
