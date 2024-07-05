import React from "react";
import { MainInput } from "../../../../components/Ui/input";
import { MainButton } from "../../../../components/Ui/Main-button";

export const LoginInput = () => {
  return (
    <div className="input__list1">
      <MainInput type="text" placeholder="username" />
      <MainButton className="primary">Send</MainButton>
      <MainInput type="password" placeholder="password" />
      <MainButton className="primary">Send</MainButton>
      <MainInput type="email" placeholder="email" />
      <MainButton className="primary">Send</MainButton>
      <MainInput type="number" placeholder="number" />
      <MainButton className="primary">Send</MainButton>
    </div>
  );
};
