import React from "react";
import { useTranslation } from "react-i18next";
import "./css/ProjectCard.scss";
import { FaGithub, FaRegPlayCircle } from "react-icons/fa";

export default function ProjectCard(props) {
  const { t } = useTranslation();
  const { title, cover, live, repo } = props;
  return (
    <div className="card">
      <div className="card__image">
        <img src={cover} alt="" />
      </div>
      <div className="card-main">
        <h1 className="card__title">{title}</h1>
        <p>{t("Projects." + title)}</p>
      </div>
      <div className="icons-wrapper">
        <a
          rel="noopener noreferrer"
          href={live}
          target="_blank"
          className="card-socials"
        >
          <FaRegPlayCircle />
          <p>LIVE</p>
        </a>
        <a
          rel="noopener noreferrer"
          href={repo}
          target="_blank"
          className="card-socials"
        >
          <FaGithub />
          <p>GitHub</p>
        </a>
      </div>
    </div>
  );
}
