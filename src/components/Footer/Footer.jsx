import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className="footer">
      <a
        href={"https://github.com/manish-bhandari/portfolio-website"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Made with<i className="fa-solid fa-heart"></i> by Manish Bhandari
      </a>
    </div>
  );
}

export default Footer