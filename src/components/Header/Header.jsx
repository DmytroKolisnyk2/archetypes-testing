import React from "react";
import Navigation from "../Navigation/Navigation.jsx";
import styles from "./Header.module.scss";
import logo from "../../images/icons/logo.svg";

import { Link } from "react-router-dom";
import path from "../../services/routerPath.json";
import Button from "../Button/Button";
import SvgArrow from "../SvgArrow/SvgArrow";
import { useTranslation } from "react-i18next";
import { header } from "../../translations/ua/common.json";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <div className={styles.headerWrapper}>
      <header className={styles.Header}>
        <nav className={styles.Nav}>
          <Link to={path.home}>
            <img src={logo} alt="Logo" />
          </Link>
          <Navigation />
        </nav>
        {path.test !== pathname && (
          <Link to={path.test} className={styles.button}>
            <Button width={220} color="black" bgColor="white">
              <span>{t(header.btn)}</span>
              <SvgArrow size={20} orientation="right" />
            </Button>
          </Link>
        )}
      </header>
    </div>
  );
};

export default Header;
