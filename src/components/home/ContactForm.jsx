import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  function closeForm() {
    document.getElementById("contact-card").style.display = "none";
  }
  return (
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
        <input id="submit-msg" type="button" value="Send" />
      </form>
      <button id="form-close" onClick={closeForm}>
        X
      </button>
    </div>
  );
};

export default ContactForm;
