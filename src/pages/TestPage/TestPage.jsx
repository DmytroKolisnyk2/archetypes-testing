import React from "react";

import styles from "./TestPage.module.scss";
import SectionFindOut from "../../components/SectionFindOut/SectionFindOut";
import { Outlet } from "react-router-dom";

const TestPage = () => {
  return (
    <>
      <SectionFindOut />
      <Outlet/>
    </>
  );
};

export default TestPage;
