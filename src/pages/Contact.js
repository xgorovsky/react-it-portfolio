import React from "react";
import { useTranslation } from "react-i18next";

export default function Conctact() {
  const { t } = useTranslation();
  return <p>{t("Contact.title")}</p>;
}
