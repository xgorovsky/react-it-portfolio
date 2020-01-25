import React from "react";

export default function Hamburger(props) {
  return (
    <div
      onClick={props.disabled ? null : props.click}
      className="hamburger__button"
    >
      <div
        className="hamburger__meat"
        style={
          props.disabled && props.show
            ? {
                backgroundColor: "lightgray",
                transform: "rotate(45deg) translateY(300%)",
                transition: ".7s ease"
              }
            : props.show
            ? {
                transform: "rotate(45deg) translateY(300%)",
                transition: ".7s ease"
              }
            : null || (props.disabled && !props.show)
            ? {
                backgroundColor: "lightgray",
                transform: "rotate(0deg)",
                transition: ".7s ease"
              }
            : { transform: "rotate(0deg)", transition: ".7s ease" }
        }
      />
      <div
        className="hamburger__meat"
        style={
          props.show
            ? { opacity: "0", transition: ".3s ease" }
            : props.disabled
            ? {
                backgroundColor: "lightgray",
                opacity: "1",
                transition: ".7s ease"
              }
            : { opacity: "1", transition: ".7s ease" }
        }
      />
      <div
        className="hamburger__meat"
        style={
          props.disabled && props.show
            ? {
                backgroundColor: "lightgray",
                transform: "rotate(-45deg) translateY(-300%)",
                transition: ".7s ease"
              }
            : props.show
            ? {
                transform: "rotate(-45deg) translateY(-300%)",
                transition: ".7s ease"
              }
            : null || (props.disabled && !props.show)
            ? {
                backgroundColor: "lightgray",
                transform: "rotate(0deg)",
                transition: ".7s ease"
              }
            : { transform: "rotate(0deg)", transition: ".7s ease" }
        }
      />
    </div>
  );
}
