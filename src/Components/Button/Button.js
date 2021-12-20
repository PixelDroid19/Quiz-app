import React from "react";
import "./Button.css";

export const Button = (props) => {
  return (
    <input
      type="button"
      style={{ color: props.color, backgroundColor: props.backgroundColor}}
      value={props.name}
      onClick={props.onClick}
      className="ButtonCustom"
    />
  );
};
