import React, { useEffect, useState } from "react";
import styles from "./Results.module.scss";

import { archetypePage, resultPage } from "../../translations/ua/common.json";

import { connect } from "react-redux";
import { getBlock1 } from "../../redux/block1/block1-selectors";
import { getBlock2 } from "../../redux/block2/block2-selectors";
import { getBlock3 } from "../../redux/block3/block3-selectors";

import SectionTitle from "../SectionTitle/SectionTitle";
import ArchetypesCard from "../ArchetypesCard/ArchetypesCard";
import { t } from "i18next";

import { Fade } from "react-awesome-reveal";

function Results({ block1Data, block2Data, block3Data }) {
  const [firstArchetypeId, setFirstArchetypeId] = useState([]);
  const [secondArchetypeId, setSecondArchetypeId] = useState([]);
  const [thirdArchetypeId, setThirdArchetypeId] = useState([]);
  useEffect(() => {
    const archetypesCount = { ...archetypePage };
    for (const key in archetypesCount) {
      archetypesCount[key] = 0;
    }
    block1Data
      .filter((item) => item.estimate)
      .forEach((element) => element.estimate.forEach((part) => archetypesCount[part]++));

    block2Data.forEach((element) => (archetypesCount[element.radio] += 3));

    block3Data
      .filter((item) => item.estimate)
      .forEach((element) => (archetypesCount[element.estimate] += 5));

    // Igor => archetypesCount - це об'єкт з підрахунком по кожному архітипу
    const arrayArchetypes = Object.entries(archetypesCount);
    const sortedArray = [...arrayArchetypes].sort((a, b) => b[1] - a[1]);
    console.log(sortedArray);
    setFirstArchetypeId(sortedArray[0]);
    setSecondArchetypeId(sortedArray[1]);
    setThirdArchetypeId(sortedArray[2]);
  }, [block1Data, block2Data, block3Data]);
  return (
    firstArchetypeId.length > 0 && (
      <section className={styles.results}>
        <SectionTitle title={t(resultPage.titleSection)} text={t(resultPage.subtitle)} />
        <Fade triggerOnce direction="left">
          <ArchetypesCard
            headline={t(archetypePage[firstArchetypeId[0]].title)}
            motivationText={t(archetypePage[firstArchetypeId[0]].subtitle1)}
            fearText={t(archetypePage[firstArchetypeId[0]].subtitle2)}
            strongSideText={t(archetypePage[firstArchetypeId[0]].subtitle3)}
            weakSideText={t(archetypePage[firstArchetypeId[0]].subtitle4)}
            strategyText={t(archetypePage[firstArchetypeId[0]].subtitle5)}
            firstParagraph={t(archetypePage[firstArchetypeId[0]].paragraph1.text)}
            secondParagraph={t(archetypePage[firstArchetypeId[0]].paragraph2.text)}
            image={t(archetypePage[firstArchetypeId[0]].image)}
          />
        </Fade>
        <Fade triggerOnce direction="right">
          <ArchetypesCard
            headline={t(archetypePage[secondArchetypeId[0]].title)}
            motivationText={t(archetypePage[secondArchetypeId[0]].subtitle1)}
            fearText={t(archetypePage[secondArchetypeId[0]].subtitle2)}
            strongSideText={t(archetypePage[secondArchetypeId[0]].subtitle3)}
            weakSideText={t(archetypePage[secondArchetypeId[0]].subtitle4)}
            strategyText={t(archetypePage[secondArchetypeId[0]].subtitle5)}
            firstParagraph={t(archetypePage[secondArchetypeId[0]].paragraph1.text)}
            secondParagraph={t(archetypePage[secondArchetypeId[0]].paragraph2.text)}
            image={t(archetypePage[secondArchetypeId[0]].image)}
            openHeadline={t(resultPage.titleCard1)}
            bgColor="#9C69E220"
          />
        </Fade>
        <Fade triggerOnce direction="left">
          <ArchetypesCard
            headline={t(archetypePage[thirdArchetypeId[0]].title)}
            motivationText={t(archetypePage[thirdArchetypeId[0]].subtitle1)}
            fearText={t(archetypePage[thirdArchetypeId[0]].subtitle2)}
            strongSideText={t(archetypePage[thirdArchetypeId[0]].subtitle3)}
            weakSideText={t(archetypePage[thirdArchetypeId[0]].subtitle4)}
            strategyText={t(archetypePage[thirdArchetypeId[0]].subtitle5)}
            firstParagraph={t(archetypePage[thirdArchetypeId[0]].paragraph1.text)}
            secondParagraph={t(archetypePage[thirdArchetypeId[0]].paragraph2.text)}
            image={t(archetypePage[thirdArchetypeId[0]].image)}
            openHeadline={t(resultPage.titleCard2)}
            bgColor="rgba(196, 196, 196, 0.13)"
          />
        </Fade>
      </section>
    )
  );
}

const mapStateToProps = (state) => ({
  block1Data: getBlock1(state),
  block2Data: getBlock2(state),
  block3Data: getBlock3(state),
});
export default connect(mapStateToProps, null)(Results);
