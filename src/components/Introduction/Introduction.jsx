import React from "react";
import styles from "./Introduction.module.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import ImgBig from "../../images/introduction_big.png";
import ImgSmall from "../../images/introduction_small.png";
import path from "../../services/routerPath.json";
import { useTranslation } from "react-i18next";

export default function Introduction() {
  const { t } = useTranslation();

  return (
    <div className={styles.introduction}>
      <div className={styles.contentWrapper}>
        <div className={styles.textWrapper}>
          <h1 className={styles.headline}> {t("introduction.headline")}</h1>
          <p className={styles.text}>{t("introduction.text")}</p>
          <div className={styles.btnWrapper}>
            <Link className={styles.link} to={path.testLink}>
              <Button width={170} color="white" bgColor="violet">
                {t("introduction.btn")}
              </Button>
            </Link>
          </div>
        </div>

        <picture>
          <source srcSet={ImgSmall} media="(max-width: 1024px)" />
          <img className={styles.image} src={ImgBig} alt="introduction" />
        </picture>
      </div>
    </div>
  );
}
