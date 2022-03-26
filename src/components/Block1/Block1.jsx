import React, { useState, useEffect } from "react";
import styles from "./Block1.module.scss";

import { useTranslation } from "react-i18next";

import path from "../../services/routerPath.json";
import { firstBlock } from "../../services/questions/firstBlock.json";

import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import SvgArrow from "../SvgArrow/SvgArrow";
import Block1Question from "../Block1Question/Block1Question";
import DisableBtn from "../DisableBtn/DisableBtn";

import { connect } from "react-redux";
import { changeTestData } from "../../redux/block1/block1-actions";
import { getBlock1, getBlock1Completed } from "../../redux/block1/block1-selectors";

function Block1({ block1Data, changeTestData, block1Completed }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setIsOpen(block1Completed), [block1Completed]);
  return (
    <div>
      <section id="block1">
        <SectionTitle title={t("block1.title")} text={t("block1.text")} />
        <form action="#">
          <ul>
            {firstBlock.map((item) => (
              <Block1Question
                key={item.id}
                headline={t(`block1.question${item.id}`)}
                options={[t("block1.options.no"), t("block1.options.yes")]}
                itemId={item.id}
                changeTestData={(data) => changeTestData(data)}
                itemData={block1Data.find((piece) => piece.id === item.id)?.radio || null}
                estimate={item.estimate}
              />
            ))}
          </ul>
        </form>
      </section>
      <div className={styles.testBlock1ButtonWrapper}>
        <DisableBtn isOpen={isOpen}>
          <Link to={path.block2}>
            <Button type="submit" paddingLeft={40} width={170} bgColor={"violet"} color={"white"}>
              <p className={styles.testBlock1Text}>{t("testBlock.nextBtn")}</p>
              <SvgArrow size={20} orientation="right" color={"white"} />
            </Button>
          </Link>
        </DisableBtn>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  block1Data: getBlock1(state),
  block1Completed: getBlock1Completed(state),
});
const mapDispatchToProps = (dispatch) => ({
  changeTestData: (data) => dispatch(changeTestData(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Block1);
