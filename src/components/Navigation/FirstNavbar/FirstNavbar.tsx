import React from "react";
import "../../../assets/styles/Navigation/first-navbar.scss";

const FirstNavbar = () => {
  return (
    <div className="first-navbar__container">
      <div className="first-navbar__content">
        <a
          className="first-navbar__link"
          href="mailto:advanc3dprintingltd@gmail.com"
        >
          <strong>
            <span>Email:</span>
          </strong>
          <br />
          <span> advanc3dprintingltd@gmail.com</span>
        </a>
        <a className="first-navbar__link" href="tel:+447757905335">
          <strong>
            <span>Telephone: </span>
          </strong>
          <br />
          <span>+44 (0)7757 905335</span>
        </a>
      </div>
    </div>
  );
};

export default FirstNavbar;
