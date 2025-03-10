import React from "react";
import "./Footer.css"; // Import the CSS file
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-logo">XUNWEAVE</h2>
      <ul className="footer-links">
        <li><a href="#">About</a></li>
        <li><a href="#">Bamboo</a></li>
        <li><a href="#">Gamosha</a></li>
        <li><a href="#">Feedback</a></li>
        <li><a href="#">Help</a></li>
      </ul>
      <div className="footer-divider"></div>
      <div className="footer-social">
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaWhatsapp /></a>
      </div>
      <p className="footer-copyright">Dev : Biki Kalita</p>
      <p className="footer-copyright">Owner : Paras</p>
      <p className="footer-copyright">© Copyright 2025, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;