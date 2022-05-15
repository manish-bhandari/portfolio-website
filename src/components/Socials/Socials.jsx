import React from 'react'
import './Socials.css'

function Socials() {
  return (
    <div className="socials-container">
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
  );
}

export default Socials