import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import path from "./services/routerPath.json";
import Header from "./components/Header/Header"
import TestPage from "./pages/TestPage/TestPage";


class App extends Component {
  render() {
    return (
      <>
      <Header/>

      <Routes>
        <Route path={path.test} element={<TestPage />} />
      </Routes>
    </>
    );
  }
}

export default App;
