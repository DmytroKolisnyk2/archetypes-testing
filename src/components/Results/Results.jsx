import React, { useEffect } from "react";
import styles from "./Results.module.scss";

import { archetypePage } from "../../translations/ua/common.json";

import { connect } from "react-redux";
import { getBlock1 } from "../../redux/block1/block1-selectors";
import { getBlock2 } from "../../redux/block2/block2-selectors";
import { getBlock3 } from "../../redux/block3/block3-selectors";

function Results({ block1Data, block2Data, block3Data }) {
  useEffect(() => {
    const archetypesCount = { ...archetypePage };
    for (const key in archetypesCount) {
      archetypesCount[key] = 0;
    }
    block1Data
      .filter((item) => item.estimate)
      .forEach((element) => element.estimate.forEach((part) => archetypesCount[part]++));

    block2Data
      .forEach((element) => (archetypesCount[element.radio] += 3));

    block3Data
      .filter((item) => item.estimate)
      .forEach((element) => (archetypesCount[element.estimate] += 5));

    // Igor => archetypesCount - це об'єкт з підрахунком по кожному архітипу
    console.log(archetypesCount);
  }, [block1Data, block2Data, block3Data]);
  return <section className={styles.results}>Results</section>;
}

const mapStateToProps = (state) => ({
  block1Data: getBlock1(state),
  block2Data: getBlock2(state),
  block3Data: getBlock3(state),
});
export default connect(mapStateToProps, null)(Results);
