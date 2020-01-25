import React from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="wrapper">
        <h1>{t("Home.title")}</h1>
      </div>
    </div>
  );
}
