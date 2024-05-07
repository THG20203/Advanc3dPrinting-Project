import React from "react";
import "../../assets/styles/Contact/contact.scss";
import SpeechBubble from "../../components/SpeechBubble/SpeechBubble";

const ContactPage = () => {
  return (
    <div className="container">
      <div className="contact__container">
        <SpeechBubble />
        <h2 className="heading-2 mb-md">Get in Touch</h2>
        <p className="paragraph-text">
          Feel free to contact us and discuss your 3D printing needs.
        </p>
        <p className="paragraph-text mb-lg">
          We are here to assist you from concept to production.
        </p>
        <a
          className="contact__link"
          href="mailto:advanc3dprintingltd@gmail.com"
        >
          <p className="paragraph-text mb-sm contact-bold">
            advanc3dprintingltd@gmail.com
          </p>
        </a>
        <a className="contact__link" href="t:+447757905335">
          <p className="paragraph-text mb-md contact-bold">
            +44 (0)7757 905335
          </p>
        </a>
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
