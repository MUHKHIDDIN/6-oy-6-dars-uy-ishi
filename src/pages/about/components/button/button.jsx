import React from "react";
import { MainButton } from "../../../../components/Ui/Main-button";

export const Button = () => {
  return (
    <div className="button__list">
      <MainButton className="primary">click</MainButton>
      <MainButton className="secondary">Send</MainButton>
      <MainButton className="danger">Delete</MainButton>
      <MainButton className="success">Save</MainButton>
    </div>
  );
};
