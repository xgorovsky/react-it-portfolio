import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import profilePic from "../img/unsplash.jpg";
import CoolButton from "../components/CoolButton";
import { fadeIn, imgReveal } from "../components/Animations";

export default function About() {
  const { t } = useTranslation();

  let img = useRef(null);
  let imgSrc = useRef(null);
  let imgBg = useRef(null);
  let title = useRef(null);
  let about = useRef(null);
  let cont = useRef(null);
  let btn = useRef(null);

  useEffect(() => {
    fadeIn(cont);
    imgReveal(title);
    imgReveal(about);
    imgReveal(btn);
    gsap.timeline().to([imgBg, img], {
      duration: 0,
      ease: "power4.inOut",
      width: "100%",
      autoAlpha: 1,
      stagger: {
        amount: 0.3
      }
    }).to(imgBg, {
      duration: 2,
      delay: -0.5,
      ease: "power4.inOut",
      x: "100%"
    }).from(imgSrc, {
      scale: 1.5,
      delay: -1.5,
      duration: 1,
      ease: "power4.inOut"
    });
  }, []);

  return (
    <section ref={ref => (cont = ref)} className="about">
      <div className="first-column">
        <div className="image-wrapper">
          <div ref={ref => (imgBg = ref)} className="image-bg"></div>
          <div ref={ref => (img = ref)} className="image">
            <img ref={ref => (imgSrc = ref)} src={profilePic} alt="" />
          </div>
        </div>
      </div>
      <div className="second-column">
        <div className="title">
          <h1 ref={ref => (title = ref)}>{t("About.title")}</h1>
          <p ref={ref => (about = ref)} className="description">{t("About.description")}</p>
          <div ref={ref => (btn = ref)} className="btn-wrapper">
            <div className="show-nav">
              <CoolButton linkTo={"/"} title={t("Home.back")} />
              <CoolButton linkTo={"/projects"} title={t("About.backProjects")} />
              <CoolButton linkTo={"/contact"} title={t("About.backContact")} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
