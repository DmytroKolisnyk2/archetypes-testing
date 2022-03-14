import React from "react";

// import styles from "./TestPage.module.scss";
import SectionFindOut from "../../components/SectionFindOut/SectionFindOut";
import Block2 from "../../components/Block2/Block2";
import Block1 from "../../components/Block1/Block1";
import Block3 from "../../components/Block3/Block3";
import { useParams } from "react-router-dom";

const TestPage = () => {
  const { blockId } = useParams();
  return (
    <>
      <SectionFindOut />
      {blockId === "block1" && <Block1 />}
      {blockId === "block2" && <Block2 />}
      {blockId === "block3" && <Block3 />}
    </>
  );
};

export default TestPage;
