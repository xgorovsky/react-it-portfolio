import React from "react";
import { Link } from "react-router-dom";
import "./css/CoolButton.scss";

export default function CoolButton(props) {
  const { title, linkTo } = props;

  return (
    <div className="btn">
      <Link to={linkTo}>
        <button className="cool-btn">{title}</button>
      </Link>
    </div>
  );
}
