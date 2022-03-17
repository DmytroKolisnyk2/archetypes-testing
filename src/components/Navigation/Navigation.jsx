import React from "react";
import { NavLink } from "react-router-dom";
import NavigationStyles from "./Navigation.module.scss";
import path from "../../services/routerPath.json";
import { useTranslation } from "react-i18next";
import { navigation } from "../../translations/ua/common.json";

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <nav className={NavigationStyles.navigationWrapper}>
      <ul className={NavigationStyles.navigationUl}>
        <li className={NavigationStyles.navigationLi}>
          <NavLink
            //  className={NavigationStyles.navigationLink}
            to={path.testLink}
            className={(navData) =>
              navData.isActive ? NavigationStyles.NavLinkActive : NavigationStyles.NavLink
            }
          >
            {t(navigation.test)}
          </NavLink>
        </li>
        <li className={NavigationStyles.navigationLi}>
          <NavLink
            to={path.archetypes}
            className={(navData) =>
              navData.isActive ? NavigationStyles.NavLinkActive : NavigationStyles.NavLink
            }
          >
            {t(navigation.archetypes)}
          </NavLink>
        </li>
        <li className={NavigationStyles.navigationLi}>
          <NavLink
            to={path.contacts}
            className={(navData) =>
              navData.isActive ? NavigationStyles.NavLinkActive : NavigationStyles.NavLink
            }
          >
            {t(navigation.contacts)}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
