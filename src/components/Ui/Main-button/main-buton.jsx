import React from "react";
import "./main-button.css";

export const MainButton = ({
  children,
  variant,
  type,
  className,
  id,
  startIcon,
  endIcon,
}) => {
  return (
    <button id={id} type={type} className={className + " btn " + variant}>
      {startIcon ? <span>{startIcon}</span> : ""}
      <span>{children}</span>
      {endIcon ? <span>{endIcon}</span> : ""}
    </button>
  );
};
