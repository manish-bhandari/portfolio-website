import React from 'react'
import './ContactMe.css'

const ContactMe = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <div className="form-container">
      <div className="form-label-container">
        <h1>Get In Touch</h1>
        <p>
          Let's get in touch! I'm constantly looking for new opportunities!
          Whether you want to create something together or want to hire me, feel
          free to reach out!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="message-form">
        <input name="firstName" placeholder="Name" className="form-field" />

        <div className="email-num-container">
          <input name="email" placeholder="Email" className="form-field" />
          <input
            name="phone-number"
            placeholder="Phone Number"
            className="form-field"
          />
        </div>

        <input name="subject" placeholder="Subject" className="form-field" />

        <textarea placeholder="Your Message" id="message" name="message" rows="10" cols="50">
        </textarea>

        <button class="form-field" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactMe