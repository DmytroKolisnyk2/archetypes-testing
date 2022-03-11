import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import Button from "../Button/Button";
import SvgArrow from "../SvgArrow/SvgArrow";
import { useTranslation } from "react-i18next";
import { testBlock } from "../../translations/ua/common.json";
import Block1Question from "../Block1Quetion/TestBlock1Quetion";
import styles from "./Block3.module.scss";

function Block3({ props }) {
  const { t } = useTranslation();

  return (
    <div>
      <section>
        <SectionTitle
          title={"Третій блок"}
          text={"Виберіть найбільш підходящу вам відповідь з п'яти запропонованих нижче"}
        />
        <form action="#">
          <ul>
            {props.map((item, index) => (
              <Block1Question
                key={index}
                number={index + 1}
                headline={item.question}
                options={["Yes", "No", "YesNo", "NoYes", "Eron Jega"]}
              />
            ))}
          </ul>
        </form>
      </section>
      <div className={styles.testBlock1ButtonWrapper}>
        <Button width={170} bgColor={"violet"} color={"white"}>
          <SvgArrow size={20} orientation="left" color={"white"} />
          <p className={styles.testBlock1Text}>{t(testBlock.backBtn)}</p>
        </Button>
        <Button width={170} bgColor={"violet"} color={"white"}>
          <p className={styles.testBlock1Text}>{t(testBlock.finishBtn)}</p>
          <SvgArrow size={20} orientation="right" color={"white"} />
        </Button>
      </div>
    </div>
  );
}

Block3.propTypes = {
  props: PropTypes.array.isRequired,
};

export default Block3;
