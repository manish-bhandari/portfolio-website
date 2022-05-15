import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <section className="home section">
      <div className="home_content grid">
        <div className="home_data">
          <h1>Hi, my name is</h1>
          <h2>Manish Bhandari.</h2>
          <p>
            I'm a Computer Science and Digital Arts {"&"} Media student at the
            University of Texas at Austin with a passion for{" "}
            <br className="about_break"></br>
            <Typewriter
              words={[
                "full-stack",
                "web dev.",
                "design",
                "film making",
                "photography",
                "dance",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </p>
          <a className="home_button" href="#">
            Click Me
          </a>
        </div>
        <div className="home_img">
          <img src="assets/guy-graphic.png" alt="" />
        </div>
      </div>
      <div className="home_scroll">
        <a className="scroll_button" href="#about">
          <img className="mouse_img" src="assets/mouse.svg" alt="mouse" />
          <span>Scroll down</span>
          <i className="fa-solid fa-arrow-down"></i>
        </a>
      </div>
    </section>
  );
}

export default Home;
