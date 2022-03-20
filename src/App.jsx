import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import path from "./services/routerPath.json";
import "./translations/i18nReact";

import "./styles/App.scss";

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
  const location = useLocation();
  return (
    <>
      <Header></Header>
      <GradientWrapper>
        <main className="main">
          <Routes>
            <Route
              path={path.home}
              element={
                <CSSTransition
                  in={location.pathname === path.home}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <HomePage />
                </CSSTransition>
              }
            />
            <Route path={path.archetypes} element={<CSSTransition
                  in={location.pathname === path.archetypes}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <ArchetypesPage />
                </CSSTransition>}/>
            <Route
              path={path.ArchetypeDetailPage}
              element={<CSSTransition
                  in={location.pathname === path.archetypeDetailPage}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <ArchetypeDetailPage />
                </CSSTransition>}
            />
            <Route path={path.testLink} element={<TestPage />}></Route>
            <Route path={path.test} element={<TestPage />}></Route>
          </Routes>
        </main>
        <Footer />
      </GradientWrapper>
    </>
  );
};

export default App;
