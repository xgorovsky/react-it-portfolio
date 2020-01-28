import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LangButtons from "./LangButtons";
import gsap from "gsap";

import {
  openMenu,
  closeMenu,
  fadeInUp,
  floatUp,
  onHover,
  outHover
} from "./Animations";

export default function Navigation(props) {
  const { t } = useTranslation();
  const { clicked } = props;

  let nav = useRef(null);
  let openNav = useRef(null);
  let navBackground = useRef(null);
  let navOption1 = useRef(null);
  let navOption2 = useRef(null);
  let navOption3 = useRef(null);
  let info = useRef(null);
  let langBtn = useRef(null);

  useEffect(() => {
    if (clicked.clicked === false) {
      closeMenu([openNav, navBackground]);
      gsap.to(nav, {
        duration: 0.8,
        css: { display: "none" }
      });
    } else if (
      clicked.clicked === true ||
      (clicked.clicked === true && clicked.firstOpen === null)
    ) {
      gsap.to(nav, {
        duration: 0,
        css: { display: "block" }
      });
      gsap.to([openNav, navBackground], {
        y: 0,
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      openMenu([navBackground, openNav]);
      fadeInUp(info);
      fadeInUp(langBtn);
      floatUp(navOption1, navOption2, navOption3);
    }
  }, [clicked]);

  return (
    <div ref={ref => (nav = ref)} className="navigation-menu">
      <div
        ref={ref => (navBackground = ref)}
        className="menu-secondary-color"
      ></div>
      <div ref={ref => (openNav = ref)} className="menu-layer">
        <div className="menu-cool-background"></div>
        <div className="nav-container">
          <div className="menu-links">
            <nav>
              <ul>
                <li>
                  <Link
                    onMouseEnter={e => onHover(e)}
                    onMouseLeave={e => outHover(e)}
                    ref={ref => (navOption1 = ref)}
                    to="/projects"
                  >
                    {t("Navbar.projects")}
                  </Link>
                </li>
                <li>
                  <Link
                    onMouseEnter={e => onHover(e)}
                    onMouseLeave={e => outHover(e)}
                    ref={ref => (navOption2 = ref)}
                    to="/about"
                  >
                    {t("Navbar.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    onMouseEnter={e => onHover(e)}
                    onMouseLeave={e => outHover(e)}
                    ref={ref => (navOption3 = ref)}
                    to="/contact"
                  >
                    {t("Navbar.contact")}
                  </Link>
                </li>
              </ul>
            </nav>
            <div ref={ref => (info = ref)} className="info">
              <h3>{t("NavInfo.title")}</h3>
              <p>{t("NavInfo.data")}</p>
            </div>
            <div className="locations">
              Skills:
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
            <div ref={ref => (langBtn = ref)}>
              <LangButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
