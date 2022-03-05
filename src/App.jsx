import React from "react";
import { Routes, Route } from "react-router-dom";
import path from "./services/routerPath.json";
import "./translations/i18nReact";
// import i18n from "i18next";
// import { useTranslation } from "react-i18next";
import HomePage from "./pages/HomePage/HomePage";
import './styles/App.scss';
const App = () => {
  // const { t } = useTranslation();
  return (
    <>
      {/* <div>{t("hello")}</div>
      <button onClick={() => i18n.changeLanguage("en")} type="button">
        {t("btn.en")}
      </button>
      <button onClick={() => i18n.changeLanguage("ua")} type="button">
        {t("btn.ua")}
      </button> */}    
      <Routes>
        <Route path={path.home} element={<HomePage />} />
      </Routes>
    </>

  );
};


export default App;