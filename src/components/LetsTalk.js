import React from "react";
import { useTranslation } from "react-i18next";
import "./css/ProjectCard.scss";
import CoolButton from "./CoolButton";

export default function ProjectCard(props) {
  const { t } = useTranslation();
  const { title } = props;
  return (
    <div className="card">
      <div
        style={{
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#fdb813"
        }}
        className="card-main"
      >
        <h1 className="card__title">{title}</h1>
        <p>{t("Projects." + title)}</p>
        <CoolButton linkTo={"/contact"} title={t("Contact.title")} />
      </div>
    </div>
  );
}
