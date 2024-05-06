import React from "react";
import "../../assets/styles/Footer/footer.scss";
import footerLogo from "../../assets/images/footer-logo.png";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <form className="footer__box">
          <p className="footer__box--title mb-sm">Why Us?</p>
          <p className="paragraph-text">
            Partner with us and let's bring your ideas to life.
          </p>
          <hr className="footer__box--hr" />
          <div className="footer__box--sign-off">
            <img src={footerLogo} className="footer__box--logo" />
            <p className="paragraph-text">© 2022-2024, Advanc3d Printing</p>
          </div>
        </form>

        <div className="footer__about">
          <p className="footer__title">About</p>
          <p className="footer__text">
            We are a design and manufacturing engineer specializing in 3D
            printing, we offer exceptional design for 3D printing services, from
            initial idea to prototyping and manufacturing of one-off parts.
          </p>
        </div>

        <div className="footer__list">
          <p className="footer__title">Operations</p>
          <ul>
            <li>Design Process</li>
            <li>Manufacturing Process</li>
            <li>Design Advice / Consultancy</li>
            <li>Reverse Engineering</li>
            <li>Prototype Design</li>
          </ul>
        </div>
        <div className="footer__list">
          <p className="footer__title">Quick Links</p>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Ideas Gallery</li>
            <li>Get in touch</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
