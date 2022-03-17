import React, { useState, UseEffect } from "react";
import { Routes, Route } from "react-router-dom";
import path from "./services/routerPath.json";
import "./translations/i18nReact";
// import i18n from "i18next";
// import { useTranslation } from "react-i18next";
import styles from "./components/Modal/Modal.module.scss";
import Button from "./components/Button/Button";
import star from "./images/star.png";
import cross from "./images/icons/cross.svg";
import { firstBlock } from "./services/questions/firstBlock.json";


import "./styles/App.scss";

import HomePage from "./pages/HomePage/HomePage";
import ArchetypesPage from './pages/ArchetypesPage/ArchetypesPage';
import ArchetypeDetailPage from "./pages/ArchetypeDetailPage/ArchetypeDetailPage";
import TestPage from "./pages/TestPage/TestPage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal.jsx";
import RegForm from "./components/RegForm/RegForm.jsx";
import { useTranslation } from "react-i18next";
import { modal } from "./translations/ua/common.json";
import { useForm, ValidationError } from "@formspree/react";
import Block2 from "./components/Block2/Block2";
import Block1 from "./components/Block1/Block1";
import GradientWrapper from "./components/GradientWrapper/GradientWrapper";


const App = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("mgedyjvn");
  return (
    <>
      {/* <Header></Header>
      <GradientWrapper> */}
      <main className="main">
        <Modal state={state} title={t(modal.receiveResult)}>
          <RegForm/>
        </Modal>
        <Routes>
          <Route path={path.home} element={<HomePage />} />
          <Route path={path.test} element={<TestPage />} />
        </Routes>
      </main>
      {/* <Footer />
      </GradientWrapper> */}
      {/* <Header></Header>
      <GradientWrapper>
        <main className="main">
          <Modal/>
          <Routes>
            <Route path={path.home} element={<HomePage />} />
            <Route path={path.archetypes} element={<ArchetypesPage />}/>
            <Route path={path.ArchetypeDetailPage} element={<ArchetypeDetailPage />}/>
            <Route path={path.test} element={<TestPage />}>
              <Route path={"block1"} element={<Block1 props={firstBlock} />} />
              <Route path={"block2"} element={<Block2 />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </GradientWrapper> */}

    </>
  );
};

export default App;
