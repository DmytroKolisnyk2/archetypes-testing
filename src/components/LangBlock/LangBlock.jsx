import React from "react";
import styles from "./LangBlock.module.scss";
import globe from "../../images/icons/globe.png";


export default function LangBlock() {
  return (
    <div className={styles.langWrapper}>
      <img className={styles.langImg} src={globe} />
      <div className={styles.controlsWrapper}>
        <span className={styles.langTextActive + " " + styles.langText}>eng</span>
        <span className={styles.langText}>ukr</span>
      </div>
    </div>
  );
}
