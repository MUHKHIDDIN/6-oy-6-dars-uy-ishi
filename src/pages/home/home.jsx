import React from "react";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1 className="home__title">Welcome to Our Company</h1>
        <p className="home__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odio eius, enim maiores aliquid, similique totam dicta possimus ad ut ab repudiandae nulla modi ducimus velit. Placeat ut alias nobis.</p>
        <img className="home__img" src="https://static.norma.uz/images/145967_0805147a9ed0bcaf54b8a67e03e5.jpg" alt="img" />
      </div>
    </div>
  );
};
