import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css";

export const About = () => {
  return (
    <div className="container wrapper">
      <div className="card">
        <Link to="/about">
          <p className="button__list">button</p>
        </Link>
        <Link to="/about/login">
          <p className="input__list">input</p>
        </Link>
      </div>
      <div className="card2">
        <Outlet />
      </div>
    </div>
  );
};
