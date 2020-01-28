import React from "react";
import { useTranslation } from "react-i18next";
import "./css/ProjectCard.scss";


export default function ProjectCard(props) {
    const { t } = useTranslation();
    const { title, cover } = props;
    return (
        <div className="card">
            <div className="card__image">
                <img src={cover} alt="" />
            </div>
            <div className="card-main">
                <h1 className="card__title">{title}</h1>
                <p>{t("Projects." + title)}</p>
            </div>
        </div>
    );
}
