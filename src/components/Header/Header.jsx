import React from "react";
import Navigation from "../Navigation/Navigation.jsx";
import styles from "./Header.module.scss";
import logo from "../../images/icons/logo.svg";

// import { useSelector } from "react-redux";
// import { getLang } from "./redux/lang/lang-selector";
// import i18n from "./translations/i18nReact";

import path from "../../services/routerPath.json";
import Button from "../Button/Button";
import LangBlock from "../LangBlock/LangBlock.jsx";
import SvgArrow from "../SvgArrow/SvgArrow";
import { useTranslation } from "react-i18next";
import { useMatch, Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const { t } = useTranslation();
  const isTestLink = useMatch(path.testLink);
  const isTest = useMatch(path.test);

  return (
    <div className={styles.headerWrapper}>
      <header className={styles.Header}>
        <nav className={styles.Nav}>
          <Link className={styles.logo} to={path.home}>
            <img src={logo} alt="Logo" />
          </Link>
          <Navigation />
        </nav>
        <div className={styles.btnWrapper}>
          {!isTest && !isTestLink && (
            <div className={styles.button}>
              <Fade triggerOnce duration={500}>
                <Link to={path.testLink}>
                  <Button width={220} color="black" bgColor="white">
                    <span>{t("header.btn")}</span>
                    <SvgArrow size={20} orientation="right" />
                  </Button>
                </Link>
              </Fade>
            </div>
          )}
          {/* <Fade triggerOnce duration={500}> */}
            <LangBlock/>
          {/* </Fade> */}
        </div>
      </header>
    </div>
  );
};

export default Header;
