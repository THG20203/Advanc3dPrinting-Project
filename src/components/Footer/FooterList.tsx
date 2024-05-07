import React from "react";
import "../../assets/styles/Footer/footer-list.scss";

const FooterList = () => {
  return (
    <>
      <div className="footer__list">
        <p className="footer__title mb-md">Quick Links</p>
        <ul>
          <li className="footer__text mb-sm">Home</li>
          <li className="footer__text mb-sm">About</li>
          <li className="footer__text mb-sm">Ideas Gallery</li>
          <li className="footer__text mb-sm">Get in touch</li>
        </ul>
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
        <p className="footer__title mb-md">Material Selection</p>
        <ul>
          <li className="footer__text mb-sm">Standard and Aesthetic</li>
          <li className="footer__text mb-sm">Engineering</li>
          <li className="footer__text mb-sm">Flexible</li>
          <li className="footer__text mb-sm">Fiber Reinforced</li>
        </ul>
      </div>
    </>
  );
};

export default FooterList;
