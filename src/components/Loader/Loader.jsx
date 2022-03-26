import React from "react";
import logo from "../../images/icons/logo.svg";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <>
      <div className={styles.lightbox}>
        <img src={logo} alt="Logo" className={styles.loader__image} />
      </div>
    </>
  );
};

export default Loader;
