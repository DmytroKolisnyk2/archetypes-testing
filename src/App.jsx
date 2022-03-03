import React from "react";
import { Routes, Route } from "react-router-dom";
import path from "./services/routerPath.json";

import "./translations/i18nReact";
import TestPage from "./pages/TestPage/TestPage";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
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
        <Route path={path.test} element={<SectionTitle title={'Узнать свой архетип'} text={'Этот небольшой тест поможет вам узнать свои ведущие архетипы, определить свои ценности и сильные стороны.'} />} />
        <Route path={path.test} element={<TestPage />} />
      </Routes>
    </>

  );
};


export default App;
