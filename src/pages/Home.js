import React from "react";
import { useTranslation } from "react-i18next";
import graph from "../img/main.svg";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="home-container">
      <div className="title-wrapper">
        <div className="first-column">
          <div className="graphic-background">
            <div className="graphic">
              <img src={graph} alt="" />
            </div>
          </div>
        </div>
        <div className="second-column">
          <div className="info-wrapper">
            <h1>{t("Home.title")}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis aperiam qui ab? Ad dolorem placeat ipsa tenetur.
              Fugiat, necessitatibus beatae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
