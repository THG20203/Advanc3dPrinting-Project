import React, { useState } from "react";
import "../../../assets/styles/Navigation/main-navbar.scss";
import { NavLink } from "react-router-dom";
import mainLogo from "../../../assets/images/main-logo.png";

// Define type for the hoverItem state
type MenuItem =
  | "process"
  | "design-support"
  | "manufacturing"
  | "material-selection"
  | "";

const MainNavbar = () => {
  const [hoverItem, setHoverItem] = useState<MenuItem>("");

  const handleMouseEnter = (item: MenuItem) => {
    setHoverItem(item);
  };

  const handleMouseLeave = () => {
    setHoverItem("");
  };

  return (
    <div className="main-navbar__container">
      <div className="main-navbar__content">
        <img className="main-navbar__logo" src={mainLogo} alt="Company Logo" />
        <nav>
          <ul className="main-navbar__list">
            <li className="main-navbar__list--item">
              <NavLink to="/" className="main-navbar__link">
                Home
              </NavLink>
            </li>
            <li
              className="main-navbar__list--item"
              onMouseEnter={() => handleMouseEnter("process")}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="/process" className="main-navbar__link">
                Process
              </NavLink>
              {hoverItem === "process" && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to="/process/design-process"
                      className="dropdown-link"
                    >
                      Design Process
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/process/manufacturing-process"
                      className="dropdown-link"
                    >
                      Manufacturing Process
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="main-navbar__list--item">
              <NavLink to="/about" className="main-navbar__link">
                About
              </NavLink>
            </li>
            <li
              className="main-navbar__list--item"
              onMouseEnter={() => handleMouseEnter("design-support")}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="/design-support" className="main-navbar__link">
                Design Support
              </NavLink>
              {hoverItem === "design-support" && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to="/design-support/design-advice"
                      className="dropdown-link"
                    >
                      Design Advice
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/design-support/gallery"
                      className="dropdown-link"
                    >
                      Gallery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/design-support/prototype-design"
                      className="dropdown-link"
                    >
                      Prototype Design
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/design-support/reverse-engineering"
                      className="dropdown-link"
                    >
                      Reverse Engineering
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="main-navbar__list--item"
              onMouseEnter={() => handleMouseEnter("manufacturing")}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="/manufacturing" className="main-navbar__link">
                Manufacturing
              </NavLink>
              {hoverItem === "manufacturing" && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to="/manufacturing/ondemand"
                      className="dropdown-link"
                    >
                      On Demand
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/manufacturing/prototype-manufacturing"
                      className="dropdown-link"
                    >
                      Prototype Manufacturing
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="main-navbar__list--item"
              onMouseEnter={() => handleMouseEnter("material-selection")}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="/material-selection" className="main-navbar__link">
                Material Selection
              </NavLink>
              {hoverItem === "material-selection" && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to="/material-selection/standard-aesthetic"
                      className="dropdown-link"
                    >
                      Standard Aesthetic
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/material-selection/engineering"
                      className="dropdown-link"
                    >
                      Engineering
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/material-selection/flexible"
                      className="dropdown-link"
                    >
                      Flexible
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/material-selection/fiber-reinforced"
                      className="dropdown-link"
                    >
                      Fiber Reinforced
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="main-navbar__list--item">
              <NavLink to="/threeDPrinting" className="main-navbar__link">
                3D Printing
              </NavLink>
            </li>
            <li className="main-navbar__list--item">
              <NavLink to="/contact" className="main-navbar__link">
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
