import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form">
      <div className="form-label-container">
        <h1>Contact Me</h1>
        <p>Let's get in touch!</p>
      </div>

      <div className="form_container">
        <div>
          <div className="contact_information">
            <i className="fa-solid fa-phone"></i>
            <div>
              <h3 className="contact_title">Call Me</h3>
              <span className="contact_subtitle">713-815-4218</span>
            </div>
          </div>
          <div className="contact_information">
            <i className="fa-solid fa-envelope"></i>
            <div>
              <h3 className="contact_title">Email</h3>
              <span className="contact_subtitle">bhmanish73@gmail.com</span>
            </div>
          </div>
          <div className="contact_information">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <h3 className="contact_title">Location</h3>
              <span className="contact_subtitle">Austin, Texas</span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="message_form">
          <div className="form_content double">
            <div className="form_input">
              <input name="firstName" className="form-field" />
              <label>Name</label>
            </div>
            <div className="form_input">
              <input name="email" className="form-field" />
              <label htmlFor="">Email</label>
            </div>
          </div>

          <div className="form_content">
            <div className="form_input">
              <input name="subject" className="form-field" />
              <label>Subject</label>
            </div>
          </div>

          <div className="form_content">
            <div className="form_input">
              <textarea id="message" name="message" rows="10"></textarea>
              <label>Message</label>
            </div>
          </div>
          <button className="form_submit" type="submit">
            Send Message <i className="fa-solid fa-paper-plane"></i>{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
