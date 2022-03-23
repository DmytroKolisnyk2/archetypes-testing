import React, { useEffect } from "react";

import styles from "./LangBlock.module.scss";
import globe from "../../images/icons/globe.png";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getLang } from "../../redux/lang/lang-selector";
import { changeLang } from "../../redux/lang/lang-action";
import i18n from "../../translations/i18nReact";

export default function LangBlock() {
  const lang = useSelector(getLang);
  const dispatch = useDispatch();

  useEffect(() => i18n.changeLanguage(lang), [lang]);

  return (
    <div className={styles.langWrapper}>
      <img className={styles.langImg} src={globe} />
      <div className={styles.controlsWrapper}>
        <span
          onClick={() => dispatch(changeLang("en"))}
          className={`${styles.langText} ${lang === "en" && styles.langTextActive}`}
        >
          eng
        </span>
        <span
          onClick={() => dispatch(changeLang("ua"))}
          className={`${styles.langText} ${lang === "ua" && styles.langTextActive}`}
        >
          ukr
        </span>
      </div>
    </div>
  );
}
