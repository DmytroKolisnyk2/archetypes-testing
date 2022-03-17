import React from "react";
import { Routes, Route } from "react-router-dom";
import path from "./services/routerPath.json";
import "./translations/i18nReact";
import "./styles/App.scss";

import GradientWrapper from "./components/GradientWrapper/GradientWrapper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import asyncComponent from "./services/asyncComponent.js";
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
  return (
    <>
      <Header></Header>
      <GradientWrapper>
        <main className="main">
          <Routes>

            <Route path={path.home} element={<HomePage />} />
            <Route path={path.archetypes} element={<ArchetypesPage />} />
            <Route path={path.ArchetypeDetailPage} element={<ArchetypeDetailPage />}/>
            <Route path={path.test} element={<TestPage />} />
          </Routes>
        </main>
        <Footer />
      </GradientWrapper>
    </>
  );
};

export default App;
