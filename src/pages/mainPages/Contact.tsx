import React from "react";
import "../../assets/styles/Contact/contact.scss";
import ContactContent from "../../components/Contact/ContactContent";
import contactImage from "../../assets/images/contact-image.png";

const ContactPage = () => {
  return (
    <div className="container">
      <div className="contact__container">
        <ContactContent />
        <div className="contact__image--content">
          <img className="contact__image" src={contactImage} />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
