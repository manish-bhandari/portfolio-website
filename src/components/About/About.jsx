import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about-section">
      <div className="about-left">
        <div className="about-title">
          <h1>About Me </h1>
          <div className="about-me-line"></div>
        </div>
        <p>
          I'm a Junior at UT Austin (expected graduation May 2023) majoring in
          Computer Science and pursuing a Digital Arts & Media certificate.
        </p>
        <p>
          I am a passionate programmer interested in the fields of full stack
          development,app development, and UI/UX. I am always
          looking forward to learning new ideas, developing my skills, and
          making new connections. I am currently seeking a summer 2022
          internship.
        </p>
      </div>
      <div className="about-right">
        <div className="about-img-container">
          <div className="img-rec1"></div>
          <div className="img-rec2"></div>
          <img src="assets/manish-profile.png" alt="Manish Profile Pic" />
        </div>
      </div>
    </section>
  );
}

export default About