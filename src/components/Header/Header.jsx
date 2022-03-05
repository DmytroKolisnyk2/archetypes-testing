import React from "react";
import Navigation from "../Navigation/Navigation.jsx";
import styles from "./Header.module.scss";
import logo from "../../images/icons/logo.svg";

import { Link } from "react-router-dom";
import path from "../../services/routerPath.json";
import Button from "../Button/Button";
import SvgArrow from "../SvgArrow/SvgArrow";

const Header = () => (
  <div className={styles.headerWrapper}>
    <header className={styles.Header}>
      <nav className={styles.Nav}>
        <Link to={path.home}>
          <img src={logo} alt="Logo" />
        </Link>
        <Navigation />
      </nav>
      <div className={styles.button}>
        <Button width={220} color="black" bgColor="white">
          <span> Почати тест</span>
          <SvgArrow size={20} orientation="right" />
        </Button>
      </div>
    </header>
  </div>
);

export default Header;
