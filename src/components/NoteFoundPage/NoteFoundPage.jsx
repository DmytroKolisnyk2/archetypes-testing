import React from "react";
import styles404 from "./NoteFoundPage.module.scss"
import { pageNotFound } from "../../translations/ua/common.json";
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom"
import path from "../../services/routerPath.json";
import images from "../../images/star.png"

function NoteFoundPage() {
  const { t } = useTranslation();
  return (
    <div className={styles404.wrapper404}>
<h2 className={styles404.title404}>{t(pageNotFound.title)}</h2>
<p className={styles404.text404}>{t(pageNotFound.text)}</p>
<div className={styles404.wrapperImg404}>
<img className={styles404.images} src={images} alt="imagesStar"/>
<Link to={path.home} className={styles404.subtext404}>{t(pageNotFound.subText)}</Link>
</div>
    </div>
  );
}

export default NoteFoundPage;
