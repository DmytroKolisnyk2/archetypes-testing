import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import path from "./services/routerPath.json";

import TestPage from "./pages/TestPage/TestPage";


class App extends Component {
  render() {
    return (
      <Routes>
        <Route path={path.test} element={<TestPage />} />
      </Routes>
    );
  }
}

export default App;