import React from "react";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  return <p>{t("Projects.title")}</p>;
}
