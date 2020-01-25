import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return <p>{t("About.title")}</p>;
}
