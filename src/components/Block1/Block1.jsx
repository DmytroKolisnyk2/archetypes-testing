import React from "react";
import PropTypes from "prop-types";
import TestBlockStyles from "./TestBlock.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import Button from "../Button/Button";
import SvgArrow from "../SvgArrow/SvgArrow";
// import { firstBlock12 } from "../../services/questions/firstBlock.json";
import { useTranslation } from "react-i18next";
import { testBlock1 } from "../../translations/ua/common.json";
import Block1Question from "./TestBlock1Quetion";

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
                options={item.options}
              />
            ))}
          </ul>
        </form>
      </section>
      {/* ); */}
      <div className={TestBlockStyles.testBlock1ButtonWrapper}>
        <Button width={170} bgColor={"violet"} color={"white"}>
          {/* <div className={FooterStyles.footerButton2Wrapper}> */}

          <SvgArrow size={20} orientation="left" color={"white"} />
          <p className={TestBlockStyles.testBlock1Text}>{t(testBlock1.button1)}</p>
          {/* </div> */}
        </Button>
        <Button width={170} bgColor={"violet"} color={"white"}>
          {/* <div className={FooterStyles.footerButton2Wrapper}> */}
          <p className={TestBlockStyles.testBlock1Text}>{t(testBlock1.button2)}</p>
          <SvgArrow size={20} orientation="right" color={"white"} />

          {/* </div> */}
        </Button>
      </div>
    </div>
  );
}

Block1.propTypes = {
  props: PropTypes.array.isRequired,
};

export default Block1;
