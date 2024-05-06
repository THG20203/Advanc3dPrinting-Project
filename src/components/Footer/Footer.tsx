import React from "react";
import "../../assets/styles/Footer/footer.scss";
import FooterBox from "../Footer/FooterBox";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <FooterBox />
        <div className="footer__about">
          <p className="footer__title mb-md">About</p>
          <p className="footer__text">
            We are a design and manufacturing engineer specializing in 3D
            printing. We offer exceptional design for 3D printing services, from
            initial idea to prototyping and manufacturing of one-off parts.
          </p>
        </div>

        <div className="footer__list">
          <p className="footer__title mb-md">Design</p>
          <ul>
            <li className="footer__text mb-sm">Design Process</li>
            <li className="footer__text mb-sm">Manufacturing Process</li>
            <li className="footer__text mb-sm">Design Advice / Consultancy</li>
            <li className="footer__text mb-sm">Reverse Engineering</li>
            <li className="footer__text mb-sm">Prototype Design</li>
          </ul>
        </div>
        <div className="footer__list">
          <p className="footer__title mb-md">Manufacturing</p>
          <ul>
            <li className="footer__text mb-sm">On Demand Manufacturing</li>
            <li className="footer__text mb-sm">Protoype Manufacturing</li>
          </ul>
        </div>
        <div className="footer__list">
          <p className="footer__title mb-md">Quick Links</p>
          <ul>
            <li className="footer__text mb-sm">Home</li>
            <li className="footer__text mb-sm">About</li>
            <li className="footer__text mb-sm">Ideas Gallery</li>
            <li className="footer__text mb-sm">Get in touch</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
