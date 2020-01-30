import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import img from "../img/main.svg";
import CoolButton from "../components/CoolButton";
import {
  graphReveal,
  imgReveal,
  fromRight,
  flashHack
} from "../components/Animations";
import { Link } from "react-router-dom";

export default function Home() {
  let graph = useRef(null);
  let graphBg = useRef(null);
  let graphBg2 = useRef(null);
  let ha = useRef(null);
  let hb = useRef(null);
  let pa = useRef(null);
  let btn = useRef(null);
  let cont = useRef(null);

  const { t } = useTranslation();

  useEffect(() => {
    flashHack(cont);
    fromRight(ha, hb, pa, btn);
    graphReveal(graphBg, graphBg2);
    imgReveal(graph);
  }, []);

  return (
    <div ref={ref => (cont = ref)} className="container">
      <div className="home-wrapper">
        <div className="first-column">
          <div ref={ref => (graphBg = ref)} className="graphic-background">
            <div
              ref={ref => (graphBg2 = ref)}
              className="graphic-background-2"
            />
            <img ref={ref => (graph = ref)} src={img} alt="some-graphic" />
          </div>
        </div>
        <div className="second-column">
          <div className="info-wrapper">
            <Link
              style={{ textDecoration: "none", color: "#202020" }}
              to="/contact"
            >
              <h1 ref={ref => (ha = ref)}>{t("Home.title")}</h1>
            </Link>
            <h2 ref={ref => (hb = ref)}>{t("Home.subtitle")}</h2>
            <p ref={ref => (pa = ref)}>{t("Home.mess1")}</p>
            <div className="btn-wrapper" ref={ref => (btn = ref)}>
              <CoolButton linkTo={"/projects"} title={t("Home.button")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
