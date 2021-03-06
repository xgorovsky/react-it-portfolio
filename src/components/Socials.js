import React from "react";
import { FaGithub, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "./css/Socials.scss";

export default function Socials(props) {
  const { color } = props;
  return (
    <div className="socials-wrapper">
      <a
        rel="noopener noreferrer"
        href="https://github.com/xgorovsky"
        target="_blank"
        className="card-socials"
        style={color ? { color: color } : null}
      >
        <FaGithub />
      </a>
      <a
        rel="noopener noreferrer"
        href="http://facebook.com/igorbiedrawa"
        target="_blank"
        className="card-socials"
        style={{ color: color }}
      >
        <FaFacebook />
      </a>
      <a
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/igor-biedrawa/"
        target="_blank"
        className="card-socials"
        style={color ? { color: color } : null}
      >
        <FaLinkedinIn />
      </a>
      <a
        href="mailto:biedrawa.igor@gmail.com"
        style={color ? { color: color } : null}
        className="card-socials"
      >
        <IoIosMail />
      </a>
    </div>
  );
}
