import React from "react";
import "./buttons.css";

const ButtonComponentt = props => {
  return (
    <button
      className="button-styl"
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </button>
  );
};


export default ButtonComponentt;
