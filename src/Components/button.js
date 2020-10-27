import React from "react";
import "./Button.css";

const ButtonComponent = props => {
  return (
    <button
      className="button-style"
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </button>
  );
};


export default ButtonComponent;