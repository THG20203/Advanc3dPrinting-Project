import React from "react";
import footerLogo from "../../assets/images/footer-logo.png";
import "../../assets/styles/Footer/footer-box.scss";

const FooterBox = () => {
  return (
    <div className="footer__box mb-lg">
      <p className="footer__box--title mb-md">Why Us?</p>
      <p className="footer__box--text mb-sm">
        We are well-equipped to handle the most intricate projects with
        precision and excellence
      </p>
      <p className="footer__box--text mb-md">
        Partner with us and let's bring your ideas to life.
      </p>
      <hr className="footer__box--hr" />
      <div className="footer__box--sign-off">
        <img src={footerLogo} className="footer__box--logo" />
        <div className="footer__box--container-text">
          <p className="footer__box--text">VAT Registered</p>
          <p className="footer__box--text">Company No.14533802</p>
          <p className="footer__box--text">© 2024 | Advanc3d Printing Ltd</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBox;
