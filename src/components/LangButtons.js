import React from "react";
import i18n from "../i18n";
import "./css/LangButton.css";

export default function LangButtons() {
  function changeLang(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="lang-btn-wrapper">
      <button className="lang-btn" onClick={() => changeLang("pl")}>
        PL
      </button>
      <button
        className="lang-btn"
        id="lang-btn-right"
        onClick={() => changeLang("en")}
      >
        EN
      </button>
    </div>
  );
}
