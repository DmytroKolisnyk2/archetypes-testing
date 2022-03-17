import React from "react";
import styles from "./DisableBtn.module.scss";

export default function DisableBtn({ children, isOpen }) {
  return <div className={isOpen ? styles.openBtn : styles.disabledBtn}>{children}</div>;
}
