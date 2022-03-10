import React from "react";
import styles from "./GradientWrapper.module.scss";

export default function GradientWrapper({ children }) {
  return <div className={styles.gradient}>{children}</div>;
}
