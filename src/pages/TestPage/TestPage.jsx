import React, { useEffect } from "react";
import styles from "./TestPage.module.scss";

import { useParams, Link } from "react-router-dom";
import path from "../../services/routerPath.json";

import { connect } from "react-redux";
import { getBlock1Completed } from "../../redux/block1/block1-selectors";
import { getBlock2Completed } from "../../redux/block2/block2-selectors";
import { getBlock3Completed } from "../../redux/block3/block3-selectors";

import { clearBlock1 } from "../../redux/block1/block1-actions";
import { clearBlock2 } from "../../redux/block2/block2-actions";
import { clearBlock3 } from "../../redux/block3/block3-actions";

import Button from "../../components/Button/Button";
import SectionFindOut from "../../components/SectionFindOut/SectionFindOut";
import Block2 from "../../components/Block2/Block2";
import Block1 from "../../components/Block1/Block1";
import Block3 from "../../components/Block3/Block3";
import Results from "../../components/Results/Results";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import { Fade } from "react-awesome-reveal";

import { useTranslation } from "react-i18next";
import { sectionFindOut } from "../../translations/ua/common.json";

const TestPage = ({
  block1Data,
  block2Data,
  block3Data,
  clearBlock1,
  clearBlock2,
  clearBlock3,
}) => {
  const { t } = useTranslation();
  const { blockId } = useParams();

  useEffect(() => {
    document.querySelector(`#${blockId}`)?.scrollIntoView();
  }, [blockId]);

  const clearStore = () => {
    clearBlock1();
    clearBlock2();
    clearBlock3();
  };

  return (
    <>
      {blockId !== "results" && (
        <Fade triggerOnce>
          <SectionFindOut />
        </Fade>
      )}

      {!blockId && (
        <div className={styles.btn}>
          <Link onClick={clearStore} to={path.block1}>
            <Button width={"auto"} bgColor="violet" color="white">
              {t(sectionFindOut.btn)}
            </Button>
          </Link>
        </div>
      )}

      {blockId === "block1" && (
        <Fade triggerOnce>
          <Block1 />
        </Fade>
      )}
      {blockId === "block2" && (
        <PrivateRoute isCompleted={block1Data}>
          <Fade triggerOnce>
            <Block2 />
          </Fade>
        </PrivateRoute>
      )}
      {blockId === "block3" && (
        <PrivateRoute isCompleted={block1Data && block2Data}>
          <Fade triggerOnce>
            <Block3 />
          </Fade>
        </PrivateRoute>
      )}
      {blockId === "results" && (
        <PrivateRoute isCompleted={block1Data && block2Data && block3Data}>
          <Fade triggerOnce>
            <Results />
          </Fade>
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

const mapDispatchToProps = (dispatch) => ({
  clearBlock1: () => dispatch(clearBlock1()),
  clearBlock2: () => dispatch(clearBlock2()),
  clearBlock3: () => dispatch(clearBlock3()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
