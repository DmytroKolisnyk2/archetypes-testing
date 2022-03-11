import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import Button from "../Button/Button";
import SvgArrow from "../SvgArrow/SvgArrow";
import { useTranslation } from "react-i18next";
import { testBlock } from "../../translations/ua/common.json";
import Block1Question from "../Block1Quetion/TestBlock1Quetion";
import styles from "./Block1.module.scss";

function Block1({ props }) {
  const { t } = useTranslation();

  return (
    <div>
      <section>
        <SectionTitle
          title={"Перший блок"}
          text={"Виберіть найбільш підходящу вам відповідь з двох запропонованих нижче"}
        />
        <form action="#">
          <ul>
            {props.map((item, index) => (
              <Block1Question
                key={index}
                number={index + 1}
                headline={item.question}
                options={["Yes", "No"]}
              />
            ))}
          </ul>
        </form>
      </section>
      <div className={styles.testBlock1ButtonWrapper}>
        <Button width={170} bgColor={"violet"} color={"white"}>
          <p className={styles.testBlock1Text}>{t(testBlock.nextBtn)}</p>
          <SvgArrow size={20} orientation="right" color={"white"} />
        </Button>
      </div>
    </div>
  );
}

Block1.propTypes = {
  props: PropTypes.array.isRequired,
};

export default Block1;
