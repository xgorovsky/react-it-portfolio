import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import CoolButton from "../components/CoolButton";
import ContactForm from "../components/ContactForm";
import Socials from "../components/Socials";
import { rotateTxt, fadeIn } from "../components/Animations";

function Contact() {
  const { t } = useTranslation();
  let rot1 = useRef(null);
  let rot2 = useRef(null);
  let rot3 = useRef(null);
  let rot4 = useRef(null);
  let cont = useRef(null);

  useEffect(() => {
    fadeIn(cont);
    rotateTxt(rot1, rot2, rot3, rot4);
  }, []);
  return (
    <section ref={ref => (cont = ref)} className="contact">
      <div className="first-column">
        <div className="catchword-section">
          <h1 className="top-text">{t("Contact.TopText")}</h1>
          <div className="rotate-bucket">
            <h2 ref={ref => (rot1 = ref)} className="rotate-text">
              {t("Contact.RotateText")}
              <span style={{ color: "#fdb813" }}>?</span>
            </h2>
            <h2 ref={ref => (rot2 = ref)} className="rotate-text">
              {t("Contact.RotateText2")}
              <span style={{ color: "#fdb813" }}>?</span>
            </h2>
            <h2 ref={ref => (rot3 = ref)} className="rotate-text">
              {t("Contact.RotateText3")}
              <span style={{ color: "#fdb813" }}>?</span>
            </h2>
            <h2 ref={ref => (rot4 = ref)} className="rotate-text">
              {t("Contact.RotateText4")}
              <span style={{ color: "#fdb813" }}>.</span>
            </h2>
          </div>
          <div className="contact-about">
            <p className="description">{t("Projects.LetsTalk")}</p>
            <CoolButton linkTo={"/about"} title={t("About.title")} />
          </div>
        </div>
        <Socials color={"#202020"} />
      </div>
      <div className="second-column">
        <ContactForm
          label={t("Contact.title")}
          send={t("Contact.submit")}
          name={t("Contact.name")}
          email={t("Contact.email")}
          message={t("Contact.message")}
        />
      </div>
    </section>
  );
}

export default Contact;
