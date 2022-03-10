import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import { modal } from "../../translations/ua/common.json";

import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import star from "../../images/star.png";
import cross from "../../images/icons/cross.svg";

import path from "../../services/routerPath.json";
import HomePage from "../../pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Modal = () => {
  const { t } = useTranslation();

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <button onClick={() => handleToggle()}>Open modal</button>
      <div className={isActive ? styles.lightbox : styles.lightbox + ' ' + styles.hidden}>
        <div className={styles.modal}>
          <img src={star} alt="Star" className={styles.modal__image} />
          <div className={styles.modal__wrapper}>
            <h3 className={styles.modal__title}>{t(modal.receiveResult)}</h3>
            <form action="GET" className={styles.modal__form}>
              <label htmlFor="name" className={styles.modal__name + " " + styles.modal__label}>
                {t(modal.inputName)}
              </label>
              <input type="text" id="name" className={styles.modal__input} />
              <label htmlFor="email"  className={styles.modal__email + " " + styles.modal__label}>
                {t(modal.inputEmail)}
              </label>
              <input type="email" id="email" className={styles.modal__input} />
            </form>
            <div className={styles.modal__button__wrapper}>
              <Button width={"100%"} paddingRight={30} paddingLeft={30} color="white" bgColor="violet">
                <Link to={path.archetypes}><span className={styles.span}>{t(modal.btn)}</span></Link>
              </Button>
            </div>
          </div>
          <img src={cross} alt="cross" className={styles.modal__cross} onClick={() => handleToggle()}/>
        </div>
      </div>
    </>
  );
};

export default Modal;
