import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";

import styles from "./Modal.module.scss";
// import Button from "../Button/Button";
import star from "../../images/star.png";
import cross from "../../images/icons/cross.svg";

// import path from "../../services/routerPath.json";
// import { Link } from "react-router-dom";

const Modal = () => {
  const { t } = useTranslation();

  const [isActive, setActive] = useState(false);

  const [state, handleSubmit] = useForm("mgedyjvn");

  const handleToggle = () => {
    setActive(!isActive);
  };
  if (state.succeeded) {
    return (
      <>
        <h3 className={styles.modal__title + " " + styles.modal__thanks}>
          {t("modal.notification")}
        </h3>
      </>
    );
  }

  return (
    <>
      <button onClick={() => handleToggle()}>Open modal</button>
      <div className={isActive ? styles.lightbox : styles.lightbox + " " + styles.hidden}>
        <div className={styles.modal}>
          <img src={star} alt="Star" className={styles.modal__image} />
          <div className={styles.modal__wrapper}>
            <h3 className={styles.modal__title}>{t("modal.receiveResult")}</h3>
            <form method="POST" onSubmit={handleSubmit} className={styles.modal__form}>
              <label htmlFor="name" className={styles.modal__name + " " + styles.modal__label}>
                {t("modal.inputName")}
              </label>
              <input type="message" id="name" name="message" className={styles.modal__input} />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <label htmlFor="email" className={styles.modal__email + " " + styles.modal__label}>
                {t("modal.inputEmail")}
              </label>
              <input type="email" id="email" name="email" className={styles.modal__input} />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <button className={styles.button} type="submit">
                {t("modal.submit")}
              </button>
            </form>
          </div>
          <img
            src={cross}
            alt="cross"
            className={styles.modal__cross}
            onClick={() => handleToggle()}
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
