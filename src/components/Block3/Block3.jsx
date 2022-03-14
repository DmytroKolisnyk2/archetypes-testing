import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle.jsx";
import Button from "../Button/Button";
import SvgArrow from "../SvgArrow/SvgArrow";
import { useTranslation } from "react-i18next";
import { testBlock } from "../../translations/ua/common.json";
import Block1Question from "../Block1Quetion/TestBlock1Quetion";
import styles from "./Block3.module.scss";
import { thirdBlock } from "../../services/questions/thirdBlock.json";
import { Link } from "react-router-dom";
import path from "../../services/routerPath.json";


function Block3() {
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
            {thirdBlock.map((item, index) => (
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
        <Link to={path.block2}>
          <Button type="submit" paddingRight={30} width={170} bgColor={"violet"} color={"white"}>
            <SvgArrow size={20} orientation="left" color={"white"} />
            <p className={styles.testBlock1Text}>{t(testBlock.backBtn)}</p>
          </Button>
        </Link>
        <Button type="submit" width={170} bgColor={"violet"} color={"white"}>
          <p className={styles.testBlock1Text}>{t(testBlock.finishBtn)}</p>
          <SvgArrow size={20} orientation="right" color={"white"} />
        </Button>
      </div>
    </div>
  );
}

export default Block3;
