import React from "react";
import "./Footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
function Footer() {
  return (
    <footer>
      <a href="#" className="footer_lego"></a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portflio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/">
          <AiFillFacebook />
        </a>
        <a href="https://www.instgram.com/">
          <AiFillInstagram />
        </a>
        <a href="https://www.linkedin.com/">
          <AiFillLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
