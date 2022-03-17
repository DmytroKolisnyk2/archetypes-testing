import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import path from "./services/routerPath.json";
import "./translations/i18nReact";

// import i18n from "i18next";
// import { useTranslation } from "react-i18next";

import "./styles/App.scss";

import GradientWrapper from "./components/GradientWrapper/GradientWrapper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import asyncComponent from "./services/asyncComponent.js"
import Loader from "./components/Loader/Loader"
// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const TestPage = lazy(() => import("./pages/TestPage/TestPage"));
// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

const HomePage = asyncComponent({
  loader: () => import("./pages/HomePage/HomePage"),
  loading: Loader,
});
const TestPage = asyncComponent({
  loader: () => import("./pages/TestPage/TestPage"),
  loading: Loader,
});
// import TestPage from "./pages/TestPage/TestPage";

const App = () => {
  return (
    <>
      <Header></Header>
      <GradientWrapper>
        <main className="main">
            <Routes>
              <Route path={path.home} element={<HomePage />} />
              <Route path={path.test} element={<TestPage />} />
            </Routes>
        </main>
        <Footer />
      </GradientWrapper>
    </>
  );
};

export default App;
