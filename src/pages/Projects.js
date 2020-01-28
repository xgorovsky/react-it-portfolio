import React, { useRef, useEffect } from "react";
import ProjectCard from "../components/ProjectCard"
import LetsTalk from "../components/LetsTalk";
import { useTranslation } from "react-i18next";
import gsap, { TimelineLite } from 'gsap';
import moneyApp from "../img/moneyapp.jpg";
import recipeApp from "../img/recipeapp.jpg";
import weather2App from "../img/weather2app.jpg";
import weatherApp from "../img/weatherapp.jpg";
import portfolio from "../img/portfolio.jpg";

export default function Projects() {
  const { t } = useTranslation();
  const projects = [
    { title: "Money Goals App", cover: moneyApp },
    { title: "Recipe App", cover: recipeApp },
    { title: "Weather App v2", cover: weather2App },
    { title: "Weather App v1", cover: weatherApp },
    { title: "ArchFolio", cover: portfolio },
  ]

  let tl = new TimelineLite();
  let titleBg = useRef(null);
  let title = useRef(null);
  let letsTalk = useRef(null);
  const projRefs = useRef([]);
  projRefs.current = [];

  const addToRefs = el => {
    if (el && !projRefs.current.includes(el)) {
      projRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.from(title, {
      opacity: 0,
      delay: 0.9
    })
    tl.to(titleBg, {
      delay: 0.4,
      duration: .5,
      width: "100%",
      transformOrigin: "right",
      ease: "power4.inOut"
    }).to(titleBg, {
      duration: .5,
      x: "100%",
      display: "none",
      ease: "power4.inOut",
      transformOrigin: "right"
    })
    gsap.from([projRefs.current[0],
    projRefs.current[1],
    projRefs.current[2],
    projRefs.current[3],
    projRefs.current[4],
    projRefs.current[5],
      letsTalk], {
      duration: 1,
      delay: 0.7,
      opacity: 0,
      ease: "power4.inOut",
      stagger: {
        amount: 0.7
      }
    });
  }, [])

  return (
    <div className="container">
      <div className="title-flex">
        <div className="title-bg-wrapper">
          <div ref={ref => (titleBg = ref)} className="title-bg" />
          <p ref={ref => (title = ref)} className="title">{t("Projects.title")}</p>
        </div>
      </div>

      <div className="projects-wrapper">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.title} ref={addToRefs} className="projects-grid-element">
              <ProjectCard
                title={project.title}
                cover={project.cover}
              />
            </div>
          ))}
          <div ref={ref => (letsTalk = ref)} className="lets-talk">
            <LetsTalk title={"Let's talk!"} />
          </div>

        </div>
      </div>
    </div >
  );
}
