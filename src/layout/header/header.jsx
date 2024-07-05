import React from "react";
import { Link } from "react-router-dom";
import { MainButton } from "../../components/Ui/Main-button";
import "./header.css";

export const Header = () => {
  return (
    <div className="container">
      <header className="main-headir">
        <div className="container">
          <div className="main-headir-block">
          <img
                className="footer__logo"
                src="https://s.tmimgcdn.com/scr/800x500/268900/aslan-hayvan-basi-vektor-logo-tasarim-sablonu-v3_268943-original.jpg"
                alt="logo"
              />
            <div className="main-headir-list">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <MainButton className="secondary">Search</MainButton>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
