import React, { useState, useEffect, useLayoutEffect } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  const [clicked, setclicked] = useState(false);
  const [isAtTop, setIsAtTop] = useState(window.scrollY == 0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClick = () => {
    setclicked(!clicked);
    
    const html_tag = document.getElementsByTagName("html")[0]
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
    setIsAtTop(currentScrollPos == 0)
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

  return (
    <nav
      className={`nav${isAtTop ? "" : " shadow"}${
        clicked ? "" : " blur"
      }`}
    >
      {/* <HashLink></HashLink> */}
      {/* <h1 className="navbar-logo">MB</h1> */}
      <img src="assets/mb-logo.svg" alt="" className="nav-logo" />
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li className="nav-link" key={index}>
              <HashLink smooth to={item.url}>{item.title}</HashLink>
            </li>
          );
        })}
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
