import React, { useState, useEffect, useLayoutEffect } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { NavHashLink } from "react-router-hash-link";

const Navbar = ({theme, toggleTheme}) => {
  const [clicked, setclicked] = useState(false);
  const [isAtTop, setIsAtTop] = useState(window.scrollY === 0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClick = () => {
    setclicked(!clicked);
  };

  useEffect(() => {
    const html_tag = document.getElementsByTagName("html")[0];
    if (clicked)
      html_tag.style = "overflow: hidden";
    else
      html_tag.style = "";
  }, [clicked])
  

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsAtTop(currentScrollPos === 0)
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAtTop]);

  useEffect(()=>{
    const appDiv = document.getElementById('App');
    if (clicked){
      appDiv.className = "App fixed"
    } else {
      appDiv.className = "App"
    }
  },[clicked])

   useLayoutEffect(() => {
     function updateSize() {
       setWindowWidth(window.innerWidth);
     }
     window.addEventListener("resize", updateSize);
     updateSize();
     return () => window.removeEventListener("resize", updateSize);
   }, []);

   useEffect(()=>{
    if (windowWidth > 850){
      setclicked(false);
    }
  },[windowWidth]);

  function handleNavClick(){
    if (clicked){
      setclicked(false);
    }
  }

  return (
    <nav className={`nav${isAtTop ? "" : " shadow"}${clicked ? "" : " blur"}`}>
      <img
        src="assets/mb-logo.svg"
        alt=""
        className="nav-logo"
        data-aos="fade"
      />
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li
              data-aos="fade-down"
              data-aos-delay={`${index * 100}`}
              className="nav-link"
              key={index}
            >
              <NavHashLink smooth to={item.url} onClick={handleNavClick}>
                {item.title}
              </NavHashLink>
            </li>
          );
        })}
        <li data-aos="fade-down" data-aos-delay="400" className="nav-link">
          <a className="resume_btn" href="/resume.pdf">
            Resume
          </a>
        </li>
        <li className={`nav-link`} onClick={toggleTheme}>
          <i
            className={`theme_nav fa-solid ${theme} ${
              theme === "light" ? "fa-sun" : "fa-moon"
            }`}
          ></i>
        </li>
      </ul>
      <div
        className={`hamburger-container ${clicked ? "open" : ""}`}
        onClick={handleClick}
      >
        <div className={`hamburger`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
