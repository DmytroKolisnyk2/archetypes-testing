import React from "react";
import styles from "./Results.module.scss";

import { connect } from "react-redux";
import { getBlock1 } from "../../redux/block1/block1-selectors";
import { getBlock2 } from "../../redux/block2/block2-selectors";
import { getBlock3 } from "../../redux/block3/block3-selectors";

function Results({ block1Data, block2Data, block3Data }) {
  console.log({ block1Data, block2Data, block3Data });
  return <section className={styles.results}>Results</section>;
}

const mapStateToProps = (state) => ({
  block1Data: getBlock1(state),
  block2Data: getBlock2(state),
  block3Data: getBlock3(state),
});
export default connect(mapStateToProps, null)(Results);
