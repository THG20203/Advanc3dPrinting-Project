import React from "react";
import "../../assets/styles/Contact/contact.scss";
import SpeechBubble from "../../components/SpeechBubble/SpeechBubble";

const ContactPage = () => {
  return (
    <div className="container">
      <div className="contact__container">
        <SpeechBubble />
        <h2 className="heading-2 mb-md">Get in Touch</h2>
        <p className="paragraph-text mb-sm">
          Feel free to contact us and discuss your 3D printing needs.
        </p>
        <p className="paragraph-text mb-lg">
          We are here to assist you from concept to production.
        </p>
        <p className="paragraph-text mb-sm">advanc3dprintingltd@gmail.com</p>
        <p className="paragraph-text mb-sm">+44 (0)7757 905335</p>
        <p className="paragraph-text mb-xl">
          <span className="address-text">502 Broadway</span>
          <br />
          <span className="address-text">Letchworth</span>
          <br />
          <span className="address-text">SG6 3PT</span>
          <br />
          <span className="address-text">UK</span>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
