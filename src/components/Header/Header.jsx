import React from "react";
import Navigation from "../Navigation/Navigation.jsx";
import NavigationStyles from "../Navigation/Navigation.module.scss"
const Header = () => (
  <header className={NavigationStyles.header}>
    <Navigation />
  </header>
);

export default Header;