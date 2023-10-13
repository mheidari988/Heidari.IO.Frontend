import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="content-inner">
      <div id="contact-card">
        <form id="contact-form">
          <label htmlFor="fullName">Full name</label>
          <input type="text" name="fullName" id="fullName" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject" />
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" cols="50"></textarea>
          <button id="submit-msg" type="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
