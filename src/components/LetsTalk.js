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
          justifyContent: "space-evenly",
          width: "100%",
          height: "100%",
          backgroundColor: "#fdb813"
        }}
        className="card-main"
      >
        <div style={{ width: "100%" }} className="text-section">
          <h1 className="card__title">{title}</h1>
          <p>{t("Projects." + title)}</p>
        </div>
        <CoolButton linkTo={"/contact"} title={t("Contact.title")} />
      </div>
    </div>
  );
}
