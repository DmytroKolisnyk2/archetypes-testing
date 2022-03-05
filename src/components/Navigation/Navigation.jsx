import React from "react";
import { NavLink } from "react-router-dom";
import NavigationStyles from "./Navigation.module.scss";
import path from "../../services/routerPath.json";


const Navigation = () => {
  return (
    <nav className={NavigationStyles.navigationWrapper}>
      <ul className={NavigationStyles.navigationUl}>
        <li className={NavigationStyles.navigationLi}>
          <NavLink
            //  className={NavigationStyles.navigationLink}
            to={path.test}
            className={(navData) =>
              navData.isActive ? NavigationStyles.NavLinkActive : NavigationStyles.NavLink
            }
          >
            Тест
          </NavLink>
        </li>
        <li className={NavigationStyles.navigationLi}>
          <NavLink
            to={path.archetypes}
            className={(navData) =>
              navData.isActive ? NavigationStyles.NavLinkActive : NavigationStyles.NavLink
            }
          >
            Архетипы
          </NavLink>
        </li>
        <li className={NavigationStyles.navigationLi}>
          <NavLink
            to={path.contacts}
            className={(navData) =>
              navData.isActive ? NavigationStyles.NavLinkActive : NavigationStyles.NavLink
            }
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
