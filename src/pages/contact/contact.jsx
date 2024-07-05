import React from "react";
import "./style.css";
import { MainButton } from "../../components/Ui/Main-button";
import { MainInput } from "../../components/Ui/input";

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
          <MainInput type="text" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <MainInput type="text" placeholder="username" />
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
        <MainButton className="primary">Submit</MainButton>
      </form>
    </div>
  );
};
