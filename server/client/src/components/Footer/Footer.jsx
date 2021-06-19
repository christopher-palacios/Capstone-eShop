import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <Link to="/about" className="footer__text">
          About Us
        </Link>
        <Link to="/contact" className="footer__text">
          Contact Us
        </Link>
      </div>
      <div className="footer__container">
        <p className="footer__stamp">&#xa9;2021 React E-Commerce Application</p>
      </div>
    </section>
  );
}

export default Footer;
