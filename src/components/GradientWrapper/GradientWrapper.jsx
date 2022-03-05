import React from "react";
import styles from "./GradientWrapper.module.scss";

export default function GradientWrapper({ children }) {
  return <section className={styles.gradient}>{children}</section>;
}
