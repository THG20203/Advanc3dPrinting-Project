import React from "react";
import "../../assets/styles/Header/header.scss";
/* Header Images */
import mainHeader from "../../assets/images/main-header.png";
import secondaryHeaderImage from "../../assets/images/header-second.png";
import whatCanImage from "../../assets/images/what-can-we-do.png";
import whyChooseImage from "../../assets/images/why-choose-us.png";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__image--container header__image--big">
        <img className="header__image" src={mainHeader} />
        <div className="header__text-container">
          <h1 className="heading-1 header__text">Design</h1>
        </div>
      </div>
      <div className="header__image--container  header__image--wide">
        <img className="header__image" src={secondaryHeaderImage} />
        <div className="header__text-container">
          <h2 className="heading-2 header__text mb-md">
            3D Printing Design and Manufacturing Specialists
          </h2>
          <p className="hero-text header__text">
            Hero sentence! Quick sentence that intrigues, suggests what we do
            and wants the reader to go on
          </p>
        </div>
      </div>
      <div className="header__image--container header__image--top-right">
        <img className="header__image" src={whatCanImage} />
        <div className="header__text-container">
          <h1 className="heading-1 header__text">Print</h1>
        </div>
      </div>
      <div className="header__image--container header__image--bottom-right">
        <img className="header__image" src={whyChooseImage} />
        <div className="header__text-container">
          <h1 className="heading-1 header__text">Evolve</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
