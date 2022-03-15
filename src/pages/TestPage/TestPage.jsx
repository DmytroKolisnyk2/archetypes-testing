import React from "react";

import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import { getBlock1Completed } from "../../redux/block1/block1-selectors";
import { getBlock2Completed } from "../../redux/block2/block2-selectors";
import { getBlock3Completed } from "../../redux/block3/block3-selectors";

import SectionFindOut from "../../components/SectionFindOut/SectionFindOut";
import Block2 from "../../components/Block2/Block2";
import Block1 from "../../components/Block1/Block1";
import Block3 from "../../components/Block3/Block3";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";

const TestPage = ({ block1Data, block2Data, block3Data }) => {
  const { blockId } = useParams();
  return (
    <>
      {console.log(block1Data, block2Data, block3Data)}
      <SectionFindOut />
      {blockId === "block1" && <Block1 />}
      {blockId === "block2" && (
        <PrivateRoute isCompleted={block1Data}>
          <Block2 />
        </PrivateRoute>
      )}
      {blockId === "block3" && (
        <PrivateRoute isCompleted={block1Data && block2Data}>
          <Block3 />
        </PrivateRoute>
      )}
      {blockId === "results" && (
        <PrivateRoute isCompleted={block1Data && block2Data && block3Data}>
          <h1>Dodo</h1>
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
