import React, { useState, useEffect, useLayoutEffect } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setclicked] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setvisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(window.scrollY == 0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClick = () => {
    setclicked(!clicked);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setvisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
    setIsAtTop(currentScrollPos == 0)
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  useEffect(()=>{
    const appDiv = document.getElementById('App');
    console.log(clicked)
    console.log(appDiv.className)
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
      className={`nav${visible ? "" : " hidden"}${isAtTop ? "" : " shadow"}${
        clicked ? "" : " blur"
      }`}
    >
      {/* <h1 className="navbar-logo">MB</h1> */}
      <img src="assets/mb-logo.svg" alt="" className="nav-logo" />
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li className="nav-link" key={index}>
              <a href={item.url}>{item.title}</a>
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
