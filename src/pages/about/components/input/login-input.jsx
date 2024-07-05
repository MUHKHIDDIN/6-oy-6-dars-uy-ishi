import React from "react";
import { MainInput } from "../../../../components/Ui/input";

export const LoginInput = () => {
  return (
    <div className="input__list1">
      <MainInput type="text" placeholder="username" />
      <MainInput type="password" placeholder="password" />
      <MainInput type="email" placeholder="email" />
      <MainInput type="number" placeholder="number" />
    </div>
  );
};
