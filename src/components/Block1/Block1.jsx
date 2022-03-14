import React, { useState, useEffect } from "react";
import styles from "./Block1.module.scss";

import { useTranslation } from "react-i18next";

import path from "../../services/routerPath.json";
import { testBlock } from "../../translations/ua/common.json";
import { firstBlock } from "../../services/questions/firstBlock.json";

import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import SvgArrow from "../SvgArrow/SvgArrow";
import Block1Question from "../Block1Quetion/TestBlock1Quetion";
import { connect } from "react-redux";
import { getBlock1 } from "../../redux/block1/block1-selectors";
import DisableBtn from "../DisableBtn/DisableBtn";

function Block1({ block1Data }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(
    () => setIsOpen(!Boolean(block1Data.find((item) => item.radio === null))),
    [block1Data]
  );

  return (
    <div>
      <section>
        <SectionTitle
          title={"Перший блок"}
          text={"Виберіть найбільш підходящу вам відповідь з двох запропонованих нижче"}
        />
        <form action="#">
          <ul>
            {firstBlock.map((item, index) => (
              <Block1Question
                key={index}
                number={index + 1}
                headline={item.question}
                options={["Yes", "No"]}
                itemId={item.id}
              />
            ))}
          </ul>
        </form>
      </section>
      <div className={styles.testBlock1ButtonWrapper}>
        <DisableBtn isOpen={isOpen}>
          <Link to={path.block2}>
            <Button
              onClick={() => console.log("first")}
              type="submit"
              paddingLeft={40}
              width={170}
              bgColor={"violet"}
              color={"white"}
            >
              <p className={styles.testBlock1Text}>{t(testBlock.nextBtn)}</p>
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
});

export default connect(mapStateToProps, null)(Block1);
