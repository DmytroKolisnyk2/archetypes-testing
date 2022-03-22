import React, { useState, useEffect } from "react";
import Block2Question from "../Block2Question/Block2Question";
import { secondBlock } from "../../services/questions/secondBlock.json";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Block2.module.scss";
import Button from "../Button/Button";
import SvgArrow from "../SvgArrow/SvgArrow";

import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
import path from "../../services/routerPath.json";

import DisableBtn from "../DisableBtn/DisableBtn";

import { connect } from "react-redux";
import { changeTestData } from "../../redux/block2/block2-actions";
import { getBlock2, getBlock2Completed } from "../../redux/block2/block2-selectors";

const Block2 = ({ block2Data, changeTestData, block2Completed }) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setIsOpen(block2Completed), [block2Completed]);

  return (
    <section id="block2">
      <SectionTitle title={t("block2.title")} text={t("block2.text")} />
      <form className={styles.form} action="#">
        <ul>
          {secondBlock.map((item) => (
            <Block2Question
              key={item.id}
              itemId={item.id}
              changeTestData={(data) => changeTestData(data)}
              images={item.options}
              itemData={block2Data.find((piece) => piece.id === item.id)?.radio || null}
            />
          ))}
        </ul>
      </form>
      <div className={styles.testBlock1ButtonWrapper}>
        <Link to={path.block1}>
          <Button type="submit" paddingRight={30} width={170} bgColor={"violet"} color={"white"}>
            <SvgArrow size={20} orientation="left" color={"white"} />
            <p className={styles.testBlock1Text}>{t("testBlock.backBtn")}</p>
          </Button>
        </Link>
        <DisableBtn isOpen={isOpen}>
          <Link to={path.block3}>
            <Button type="submit" paddingLeft={40} width={170} bgColor={"violet"} color={"white"}>
              <p className={styles.testBlock1Text}>{t("testBlock.nextBtn")}</p>
              <SvgArrow size={20} orientation="right" color={"white"} />
            </Button>
          </Link>
        </DisableBtn>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  block2Data: getBlock2(state),
  block2Completed: getBlock2Completed(state),
});
const mapDispatchToProps = (dispatch) => ({
  changeTestData: (data) => dispatch(changeTestData(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Block2);
