import React from "react";
import "../../assets/styles/Footer/footer.scss";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <div>
          We are a design and manufacturing engineer specializing in 3D
          printing, we offer exceptional design for 3D printing services, from
          initial idea to prototyping and manufacturing of one-off parts.
        </div>
        <div className="footer__address">169 MADISON STREET LONSON N5 6BE</div>
        <div className="footer__links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Design Process</li>
            <li>Manufacturing Process</li>
            <li>Design Advice / Consultancy</li>
            <li>Ideas Gallery</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
