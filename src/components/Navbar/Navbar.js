import React, { useState, useEffect } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setclicked] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setvisible] = useState(true);
  const handleClick = () => {
    setclicked(!clicked);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setvisible(
      prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav className={visible ? "NavbarItems" : "NavbarItems hidden"}>
      {/* <h1 className="navbar-logo">MB</h1> */}
      <img src="assets/mb-logo.svg" alt="" className="navbar-logo" />
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a class={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
