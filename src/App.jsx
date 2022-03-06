import React from "react";
import { Routes, Route } from "react-router-dom";
import path from "./services/routerPath.json";
import "./translations/i18nReact";
// import i18n from "i18next";
// import { useTranslation } from "react-i18next";
import "./styles/App.scss";

import GradientWrapper from "./components/GradientWrapper/GradientWrapper";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";

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
      <Header></Header>
      <GradientWrapper>
        <Introduction />
        <Routes>
          <Route path={path.home} element={<HomePage />} />
        </Routes>
      </GradientWrapper>
    </>
  );
};

export default App;
