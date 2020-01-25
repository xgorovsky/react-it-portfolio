import React from "react";
import { useRef, useEffect } from "react";
import "./css/Loader.css";
import { Loading } from "./Animations";

// ! will do some coolio animation here yaboy

export default function Loader() {
  let circle = useRef(null);
  let circle2 = useRef(null);
  let circle3 = useRef(null);
  let circle4 = useRef(null);
  useEffect(() => {
    console.log("Loading this shit up...");
    Loading(circle, circle2, circle3, circle4);
  });

  return (
    <div className="loader">
      <div ref={ref => (circle = ref)} className="circle"></div>
      <div ref={ref => (circle2 = ref)} className="circle"></div>
      <div ref={ref => (circle3 = ref)} className="circle"></div>
      <div ref={ref => (circle4 = ref)} className="circle"></div>
    </div>
  );
}
