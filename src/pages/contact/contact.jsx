import React from "react";
import "./style.css";

export const Contact = () => {
  return (
    <div className="container">
      <h1 className="contact__title">Contact Us</h1>
      <p className="contact__text">
        Have questions? Contact us using the form below or via the provided
        contact information.
      </p>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
