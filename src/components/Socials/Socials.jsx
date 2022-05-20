import React from 'react'
import './Socials.css'

function Socials() {
  return (
    <section className="socials">
      <div
        className="socials_container side_float"
        data-aos="fade"
        data-aos-delay="2000"
      >
        <a
          className="fa-brands fa-linkedin"
          target="_blank"
          href="https://www.linkedin.com/in/bhandari-manish/"
        ></a>
        <a
          className="fa-brands fa-instagram"
          target="_blank"
          href="https://www.instagram.com/manish.bhandariii/"
        ></a>
        <a
          className="fa-brands fa-github"
          href="https://github.com/manish-bhandari"
          target="_blank"
        ></a>
      </div>
      <div
        className="side_email_container side_float"
        data-aos="fade"
        data-aos-delay="2000"
      >
        <a href="mailto:bhmanish73@gmail.com">bhmanish73@gmail.com</a>
      </div>
    </section>
  );
}

export default Socials