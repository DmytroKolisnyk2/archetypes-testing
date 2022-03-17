import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { modal } from "../../translations/ua/common.json";
import { useForm, ValidationError } from "@formspree/react";

import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import star from "../../images/star.png";
import cross from "../../images/icons/cross.svg";

import path from "../../services/routerPath.json";
import { Link } from "react-router-dom";

const Modal = ({ children, title }) => {
  const { t } = useTranslation();

  const [isActive, setActive] = useState(false);

  const [state, handleSubmit] = useForm("mgedyjvn");

  const handleToggle = () => {
    setActive(!isActive);
  };
  useEffect(() => {
    if (state.succeeded) {
      return (
        <>
          <h3 className={styles.modal__title + " " + styles.modal__thanks}>
            {t(modal.notification)}
          </h3>
        </>
      );
    }
  });

  return (
    <>
      <button onClick={() => handleToggle()}>Open modal</button>
      <div
        className={
          isActive ? styles.lightbox : styles.lightbox + " " + styles.hidden
        }
      >
        <div className={styles.modal}>
          <img src={star} alt="Star" className={styles.modal__image} />
          <div className={styles.modal__wrapper}>
            <h3 className={styles.modal__title}>{title}</h3>
            {children}
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
