import React, { useRef, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import LetsTalk from "../components/LetsTalk";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import moneyApp from "../img/moneyapp.jpg";
import recipeApp from "../img/recipeapp.jpg";
import weather2App from "../img/weather2app.jpg";
import weatherApp from "../img/weatherapp.jpg";
import portfolio from "../img/portfolio.jpg";
import { flashHack } from "../components/Animations";

export default function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      title: "Money Goals App",
      cover: moneyApp,
      live: "https://xgorovsky.github.io/react-money-goals-app",
      repo: "https://github.com/xgorovsky/react-money-goals-app"
    },
    {
      title: "Recipe App",
      cover: recipeApp,
      live: "/",
      repo: "https://github.com/xgorovsky/react-recipe-app"
    },
    {
      title: "Weather App v2",
      cover: weather2App,
      live: "https://xgorovsky.github.io/weather-app-react/",
      repo: "https://github.com/xgorovsky/weather-app-react"
    },
    {
      title: "Weather App v1",
      cover: weatherApp,
      live: "https://xgorovsky.github.io/WeatherAppJS/",
      repo: "https://github.com/xgorovsky/WeatherAppJS"
    },
    {
      title: "ArchFolio",
      cover: portfolio,
      live: "https://xgorovsky.github.io/archfolio",
      repo: "https://github.com/xgorovsky/archfolio"
    }
  ];

  let titleBg = useRef(null);
  let title = useRef(null);
  let letsTalk = useRef(null);
  let cont = useRef(null);
  const projRefs = useRef([]);
  projRefs.current = [];

  const addToRefs = el => {
    if (el && !projRefs.current.includes(el)) {
      projRefs.current.push(el);
    }
  };

  useEffect(() => {
    flashHack(cont);
    gsap.from(title, {
      opacity: 0,
      delay: 0.6
    });
    gsap.to(titleBg, {
      delay: 0.1,
      duration: 0.5,
      width: "100%",
      transformOrigin: "right",
      ease: "power4.inOut"
    });
    gsap.to(titleBg, {
      delay: 0.6,
      duration: 0.5,
      x: "100%",
      display: "none",
      ease: "power4.inOut",
      transformOrigin: "right"
    });
    gsap.from(
      [
        projRefs.current[0],
        projRefs.current[1],
        projRefs.current[2],
        projRefs.current[3],
        projRefs.current[4],
        projRefs.current[5],
        letsTalk
      ],
      {
        duration: 1,
        delay: 0.2,
        opacity: 0,
        ease: "power4.inOut",
        stagger: {
          amount: 0.7
        }
      }
    );
  }, []);

  return (
    <div ref={ref => (cont = ref)} className="container">
      <div className="title-flex">
        <div className="title-bg-wrapper">
          <div ref={ref => (titleBg = ref)} className="title-bg" />
          <p ref={ref => (title = ref)} className="title">
            {t("Projects.title")}
          </p>
        </div>
      </div>

      <div className="projects-wrapper">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={addToRefs}
              className="projects-grid-item"
            >
              <ProjectCard
                title={project.title}
                cover={project.cover}
                live={project.live}
                repo={project.repo}
              />
            </div>
          ))}
          <div ref={ref => (letsTalk = ref)} className="projects-grid-item">
            <LetsTalk title={"LetsTalk"} />
          </div>
        </div>
      </div>
    </div>
  );
}
