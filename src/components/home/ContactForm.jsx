import React, { useState } from "react";
import "./ContactForm.css";
import { postData } from "../../services/api";

const ContactForm = () => {
  const emptyForm = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(emptyForm);
  const [submissionStatus, setSubmissionStatus] = useState("NOT_SUBMITTED");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmissionStatus("SUBMITTED");
    try {
      const response = await postData("/api/portfolio/contact", formData);
      if (response.success) {
        setFormData(emptyForm);
        setSubmissionStatus("SUCCESS");
      } else {
        setSubmissionStatus("FAILED");
      }
    } catch (error) {
      console.error(
        "Submission failed:",
        error.response ? error.response.data : error.message
      );
      setSubmissionStatus("FAILED");
    }
  }

  return (
    <div className="content-inner">
      <div id="contact-card">
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="fullname">Full name</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            value={formData.message}
            onChange={handleChange}
          />
          {submissionStatus !== "SUBMITTED" && (
            <button id="submit-msg" type="submit">
              Submit
            </button>
          )}
        </form>
      </div>
      {submissionStatus === "SUCCESS" && (
        <p className="success-msg">
          Thank you for reaching out to us! Your message has been successfully
          submitted. We'll get back to you as soon as possible.
        </p>
      )}
      {submissionStatus === "FAILED" && (
        <p className="error-msg">
          Oops! Something went wrong while submitting your message. Please try
          again later.
        </p>
      )}
      {submissionStatus === "SUBMITTED" && (
        <p className="info-msg">
          Your message is being submitted, please wait.
        </p>
      )}
    </div>
  );
};

export default ContactForm;
