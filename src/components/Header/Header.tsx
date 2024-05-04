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
      <img className="header__image" src={mainHeader} />
      <img className="header__image" src={secondaryHeaderImage} />
      <img className="header__image" src={whatCanImage} />
      <img className="header__image" src={whyChooseImage} />
    </div>
  );
};

export default Header;
