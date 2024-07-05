import React from "react";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1 className="home__title">Welcome to Our Company</h1>
        <p className="home__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odio eius, enim maiores aliquid, similique totam dicta possimus ad ut ab repudiandae nulla modi ducimus velit. Placeat ut alias nobis.</p>
        <img className="home__img" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>
    </div>
  );
};
