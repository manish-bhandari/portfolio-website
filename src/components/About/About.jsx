import React from 'react'
import './About.css'

function About() {
  return (
    <section
      className="about_section"
      id="about"
      data-aos="fade-up"
    >
      <h1 className="about_title section_title">About Me</h1>
      <div className="about_content">
        <div className="about_data">
          <p>
            I'm a Junior at UT Austin (expected graduation May 2023) majoring in
            <span> Computer Science</span> and pursuing a Digital Arts & Media
            certificate.
          </p>
          <p>
            I am a passionate programmer interested in the fields of{" "}
            <span>full stack development, app development, and UI/UX.</span> I
            am always looking forward to learning new ideas, developing my
            skills, and making new connections. I am currently seeking a summer
            2022 internship.
          </p>
        </div>
        <div className="about_image">
          <div className="about_img_container">
            <img src="assets/manish-profile.png" alt="Manish Profile Pic" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About