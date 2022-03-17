import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { modal } from "../../translations/ua/common.json";
import { useForm, ValidationError } from "@formspree/react";

import styles from "../Modal/Modal.module.scss";
const RegForm = () => {
	const { t } = useTranslation();
	const [state, handleSubmit] = useForm("mgedyjvn");
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
      <form
        method="POST"
        onSubmit={handleSubmit}
        className={styles.modal__form}
      >
        <label
          htmlFor="name"
          className={styles.modal__name + " " + styles.modal__label}
        >
          {t(modal.inputName)}
        </label>
        <input
          type="message"
          id="name"
          name="message"
          className={styles.modal__input}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <label
          htmlFor="email"
          className={styles.modal__email + " " + styles.modal__label}
        >
          {t(modal.inputEmail)}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.modal__input}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <button className={styles.button} type="submit">
          {t(modal.submit)}
        </button>
      </form>
    </>
  );
};

export default RegForm;
