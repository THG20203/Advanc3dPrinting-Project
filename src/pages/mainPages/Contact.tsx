import React from "react";
import "../../assets/styles/Contact/contact.scss";
import ContactContent from "../../components/Contact/ContactContent";

const ContactPage = () => {
  return (
    <div className="container">
      <div className="contact__container">
        <ContactContent />
      </div>
    </div>
  );
};

export default ContactPage;
