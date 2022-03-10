import React from "react";
import { Routes, Route } from "react-router-dom";
import path from "./services/routerPath.json";
import "./translations/i18nReact";
// import i18n from "i18next";
// import { useTranslation } from "react-i18next";
import { firstBlock } from "./services/questions/firstBlock.json";

import "./styles/App.scss";

import GradientWrapper from "./components/GradientWrapper/GradientWrapper";
import HomePage from "./pages/HomePage/HomePage";
import TestPage from "./pages/TestPage/TestPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Block2 from "./components/Block2/Block2";
import TestBlock from "./components/TestBlock/TestBlock";

const App = () => {
  return (
    <>
      <Header></Header>
      <GradientWrapper>
        <main className="main">
          <Routes>
            <Route path={path.home} element={<HomePage />} />
            <Route path={path.test} element={<TestPage />}>
              <Route path={"block1"} element={<TestBlock props={firstBlock} />} />
              <Route path={"block2"} element={<Block2 />} />
            </Route>
          </Routes>
        </main>

        <Footer />
      </GradientWrapper>
    </>
  );
};

export default App;
