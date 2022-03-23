import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import path from "./services/routerPath.json";
import "./translations/i18nReact";

import { useSelector } from "react-redux";
import { getLang } from "./redux/lang/lang-selector";

import "./styles/App.scss";
import i18n from "./translations/i18nReact";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GradientWrapper from "./components/GradientWrapper/GradientWrapper";

import asyncComponent from "./services/asyncComponent";
import Loader from "./components/Loader/Loader";

const HomePage = asyncComponent({
  loader: () => import("./pages/HomePage/HomePage"),
  loading: Loader,
});
const TestPage = asyncComponent({
  loader: () => import("./pages/TestPage/TestPage"),
  loading: Loader,
});
const ArchetypesPage = asyncComponent({
  loader: () => import("./pages/ArchetypesPage/ArchetypesPage"),
  loading: Loader,
});
const ArchetypeDetailPage = asyncComponent({
  loader: () => import("./pages/ArchetypeDetailPage/ArchetypeDetailPage"),
  loading: Loader,
});

const App = () => {
  const lang = useSelector(getLang);

  useEffect(() => i18n.changeLanguage(lang), []);
  return (
    <>
      <Header></Header>
      <GradientWrapper>
        <main className="main">
          <Routes>
            <Route path={path.home} element={<HomePage />} />
            <Route path={path.archetypes} element={<ArchetypesPage />} />
            <Route path={path.ArchetypeDetailPage} element={<ArchetypeDetailPage />} />
            <Route path={path.testLink} element={<TestPage />} />
            <Route path={path.test} element={<TestPage />} />
          </Routes>
        </main>
        <Footer />
      </GradientWrapper>
    </>
  );
};

export default App;
