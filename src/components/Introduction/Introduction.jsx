import React from "react";
import styles from "./Introduction.module.scss";
import { Link } from "react-router-dom";
import GradientWrapper from "../GradientWrapper/GradientWrapper";
import Button from "../Button/Button";
import ImgBig from "../../images/introduction_big.png";
import ImgSmall from "../../images/introduction_small.png";
import path from "../../services/routerPath.json";

export default function Introduction() {
  return (
    <GradientWrapper>
      <div className={styles.introduction}>
        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <h1 className={styles.headline}>Взнай свій архітип</h1>
            <p className={styles.text}>
              Якщо ви давно шукаєте відповіді на свої запитання, але так і не розібраєте станете,
              коли виростете - архетипи допоможуть вам розставити всі крапки над “i”
            </p>
            <div className={styles.btnWrapper}>
              <Link className={styles.link} to={path.test}>
                <Button color="white" bgColor="violet">
                  Почати тест
                </Button>
              </Link>
            </div>
          </div>

          <picture>
            <source srcSet={ImgSmall} media="(max-width: 1024px)" />{" "}
            <img className={styles.image} src={ImgBig} alt="introduction" />
          </picture>
        </div>
      </div>
    </GradientWrapper>
  );
}
