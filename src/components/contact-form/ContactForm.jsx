import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./ContactForm.css";
import { postData } from "../../services/api";

const ContactForm = () => {
  const emptyForm = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    recaptchaToken: "",
  };

  const [formData, setFormData] = useState(emptyForm);
  const [formErrors, setFormErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState("NOT_SUBMITTED");
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const recaptchaRef = useRef(null);

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

    // First validate form
    if (!validateForm()) {
      return;
    }

    // Submit if captcha is provided
    if (recaptchaValue) {
      setSubmissionStatus("SUBMITTED");
      try {
        formData["recaptchaToken"] = recaptchaValue;
        const response = await postData("/api/portfolio/contact", formData);
        if (response.success) {
          setFormData(emptyForm);
          setSubmissionStatus("SUCCESS");
          recaptchaRef.current.reset();
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
  }

  function validateForm() {
    const errors = {};

    if (!formData.fullname) {
      errors.fullname = "Full name is required";
    } else if (formData.fullname.length < 3 || formData.fullname.length > 50) {
      errors.fullname = "Full name must be between 3 and 50 characters long";
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Valid email is required";
    } else if (formData.email.length > 255) {
      errors.email = "Email must not exceed 255 characters";
    }

    if (!formData.subject) {
      errors.subject = "Subject is required";
    } else if (formData.subject.length < 3 || formData.subject.length > 100) {
      errors.subject = "Subject must be between 3 and 100 characters long";
    }

    if (!formData.message) {
      errors.message = "Message is required";
    } else if (formData.message.length < 10 || formData.message.length > 1000) {
      errors.message = "Message must be between 10 and 1000 characters long";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  return (
    <div className="content-inner">
      <div id="contact-card">
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="fullname">
            Full name (*){" "}
            {formErrors.fullname && (
              <span className="error">{formErrors.fullname}</span>
            )}
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
          <label htmlFor="email">
            Email (*){" "}
            {formErrors.email && (
              <span className="error">{formErrors.email}</span>
            )}
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="subject">
            Subject (*){" "}
            {formErrors.subject && (
              <span className="error">{formErrors.subject}</span>
            )}
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <label htmlFor="message">
            Message (*){" "}
            {formErrors.message && (
              <span className="error">{formErrors.message}</span>
            )}
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            value={formData.message}
            onChange={handleChange}
          />
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
            onChange={(value) => setRecaptchaValue(value)}
          />
          {submissionStatus === "SUBMITTED" ||
          !recaptchaValue ||
          submissionStatus === "SUCCESS" ? (
            <button id="submit-msg" disabled>
              Submit
            </button>
          ) : (
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
