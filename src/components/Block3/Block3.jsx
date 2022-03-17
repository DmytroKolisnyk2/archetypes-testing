import React, { useState, useEffect } from "react";
import styles from "./Block3.module.scss";

import path from "../../services/routerPath.json";
import { testBlock } from "../../translations/ua/common.json";
import { thirdBlock } from "../../services/questions/thirdBlock.json";

import { useTranslation } from "react-i18next";
import { block3 } from "../../translations/ua/common.json";

import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import Button from "../Button/Button";
import SvgArrow from "../SvgArrow/SvgArrow";
import Block1Question from "../Block1Question/Block1Question";
import DisableBtn from "../DisableBtn/DisableBtn";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getBlock3, getBlock3Completed } from "../../redux/block3/block3-selectors";
import { changeTestData } from "../../redux/block3/block3-actions";

function Block3({ changeTestData, block3Data, block3Completed }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setIsOpen(block3Completed), [block3Completed]);

  return (
    <div>
      <section id="block3">
        <SectionTitle title={t(block3.title)} text={t(block3.text)} />
        <form action="#">
          <ul>
            {thirdBlock.map((item) => (
              <Block1Question
                key={item.id}
                headline={item.question}
                itemId={item.id}
                changeTestData={(data) => changeTestData(data)}
                options={[
                  t(block3.options.nono),
                  t(block3.options.no),
                  t(block3.options.soso),
                  t(block3.options.yes),
                  t(block3.options.yesyes),
                ]}
                itemData={block3Data.find((piece) => piece.id === item.id)?.radio || null}
                estimate={item.estimate}
              />
            ))}
          </ul>
        </form>
      </section>
      <div className={styles.testBlock1ButtonWrapper}>
        <Link to={path.block2}>
          <Button type="submit" paddingRight={30} width={170} bgColor={"violet"} color={"white"}>
            <SvgArrow size={20} orientation="left" color={"white"} />
            <p className={styles.testBlock1Text}>{t(testBlock.backBtn)}</p>
          </Button>
        </Link>
        <DisableBtn isOpen={isOpen}>
          <Link to={path.results}>
            <Button type="submit" width={170} bgColor={"violet"} color={"white"}>
              <p className={styles.testBlock1Text}>{t(testBlock.finishBtn)}</p>
              <SvgArrow size={20} orientation="right" color={"white"} />
            </Button>
          </Link>
        </DisableBtn>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  block3Data: getBlock3(state),
  block3Completed: getBlock3Completed(state),
});
const mapDispatchToProps = (dispatch) => ({
  changeTestData: (data) => dispatch(changeTestData(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Block3);
