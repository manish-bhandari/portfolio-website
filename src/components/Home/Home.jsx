import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <section className="home section">
      <div className="home_content grid">
        <div className="home_data">
          <h1>HI THERE 👋 MY NAME IS</h1>
          <h2>MANISH BHANDARI</h2>
          <p>
            I'm a Computer Science student at the University of Texas at Austin
            with a passion for{' '} 
            <br className="about_break"></br>
            <Typewriter
              words={[
                "web development",
                "full-stack",
                "design",
                "film making",
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
        </div>
        <div className="home_img">
          <img src="assets/guy-graphic.png" alt="" />
        </div>
      </div>
      <div className="home_scroll">
        <span>Scroll down</span>
        <i className="fa-solid fa-arrow-down"></i>{" "}
      </div>
    </section>
  );
}

export default Home;
