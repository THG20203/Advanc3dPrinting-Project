import React from "react";
import "../../assets/styles/Footer/footer.scss";
import FooterBox from "../Footer/FooterBox";
import FooterList from "../Footer/FooterList";

const footerLink = [{ footerTitle: "Quick Links" }, {}, {}, {}];

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <FooterBox />
        <div className="footer__about">
          <p className="footer__title mb-md">About</p>
          <p className="footer__text mb-sm">
            We are a design and manufacturing engineer specializing in 3D
            printing. We offer exceptional design for 3D printing services, from
            initial idea to prototyping and manufacturing of one-off parts.
          </p>
          <p className="footer__text">
            Our expertise and dedication set us apart in this industry, ensuring
            top-quality results for our clients.
          </p>
        </div>
        <FooterList />
      </div>
    </div>
  );
};

export default Footer;
