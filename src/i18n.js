import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

const Languages = ["en", "pl"];

function checkEnv() {
  if (process.env.NODE_ENV !== "production") {
    return "/locales/{{lng}}/{{ns}}.json";
  } else {
    return "/react-it-portfolio/locales/{{lng}}/{{ns}}.json";
  }
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    loadPath: checkEnv(),
    whitelist: Languages,
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: checkEnv()
    }
  });

export default i18n;

//react-it-portfolio
