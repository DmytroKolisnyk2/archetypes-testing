import React, { useEffect } from "react";
import styles from "./TestPage.module.scss";

import { useParams, Link } from "react-router-dom";
import path from "../../services/routerPath.json";

import { connect } from "react-redux";
import { getBlock1Completed } from "../../redux/block1/block1-selectors";
import { getBlock2Completed } from "../../redux/block2/block2-selectors";
import { getBlock3Completed } from "../../redux/block3/block3-selectors";

import Button from "../../components/Button/Button";
import SectionFindOut from "../../components/SectionFindOut/SectionFindOut";
import Block2 from "../../components/Block2/Block2";
import Block1 from "../../components/Block1/Block1";
import Block3 from "../../components/Block3/Block3";
import Results from "../../components/Results/Results";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import { Fade, Slide } from "react-awesome-reveal";

import { useTranslation } from "react-i18next";
import { sectionFindOut } from "../../translations/ua/common.json";

const TestPage = ({ block1Data, block2Data, block3Data }) => {
  const { t } = useTranslation();
  const { blockId } = useParams();

  useEffect(() => {
    document.querySelector(`#${blockId}`)?.scrollIntoView()
  }, [blockId]);

  return (
    <>
      {blockId !== "results" && (
        <Fade>
          <SectionFindOut />
        </Fade>
      )}

      {!blockId && (
        <div className={styles.btn}>
          <Link to={path.block1}>
            <Button width={"auto"} bgColor="pink" color="white">
              {t(sectionFindOut.btn)}
            </Button>
          </Link>
        </div>
      )}

      {blockId === "block1" && (
        <Slide triggerOnce>
          <Block1 />
        </Slide>
      )}
      {blockId === "block2" && (
        <PrivateRoute isCompleted={block1Data}>
          <Slide triggerOnce>
            <Block2 />
          </Slide>
        </PrivateRoute>
      )}
      {blockId === "block3" && (
        <PrivateRoute isCompleted={block1Data && block2Data}>
          <Slide triggerOnce>
            <Block3 />
          </Slide>
        </PrivateRoute>
      )}
      {blockId === "results" && (
        <PrivateRoute isCompleted={block1Data && block2Data && block3Data}>
          <Slide triggerOnce>
            <Results />
          </Slide>
        </PrivateRoute>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  block1Data: getBlock1Completed(state),
  block2Data: getBlock2Completed(state),
  block3Data: getBlock3Completed(state),
});
export default connect(mapStateToProps, null)(TestPage);
