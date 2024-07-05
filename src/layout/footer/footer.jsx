import React from "react";
import "./fotter.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer">
          <div className="footer__block">
            <div className="footer__content">
              <img
                className="footer__logo"
                src="https://s.tmimgcdn.com/scr/800x500/268900/aslan-hayvan-basi-vektor-logo-tasarim-sablonu-v3_268943-original.jpg"
                alt="logo"
              />
              <p className="footer__text">
                www.companyname.com companyname@gmail.com Phone: +7
                485-118-03-25
              </p>
            </div>
            <ul className="footer__list">
              <Link className="footer__link" to="/">
                Home
              </Link>
              <Link className="footer__link" to="/about">
                About
              </Link>
              <Link className="footer__link" to="/contact">
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
