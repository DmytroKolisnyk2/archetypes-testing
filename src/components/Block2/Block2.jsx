import React from "react";
import Block2Question from "../Block2Question/Block2Question";
import { secondBlock } from "../../services/questions/secondBlock.json";
import SectionTitle from "../SectionTitle/SectionTitle";
import { testBlock } from "../../translations/ua/common.json";
import styles from "./Block2.module.scss";
import Button from "../Button/Button";
import SvgArrow from "../SvgArrow/SvgArrow";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import path from "../../services/routerPath.json";

const Block2 = () => {
  const { t } = useTranslation();

  return (
    <section>
      <SectionTitle title={"Второй блок"} text={"Выберите наиболее понравившуюся картинку"} />
      <form className={styles.form} action="#">
        <ul>
          {secondBlock.map((item, index) => (
            <Block2Question
              key={index}
              number={index + 1}
              headline={item.question}
              images={item.options}
            />
          ))}
        </ul>
      </form>
      <div className={styles.testBlock1ButtonWrapper}>
        <Link to={path.block1}>
          <Button type="submit" paddingRight={30} width={170} bgColor={"violet"} color={"white"}>
            <SvgArrow size={20} orientation="left" color={"white"} />
            <p className={styles.testBlock1Text}>{t(testBlock.backBtn)}</p>
          </Button>
        </Link>
        <Link to={path.block3}>
          <Button type="submit" paddingLeft={40} width={170} bgColor={"violet"} color={"white"}>
            <p className={styles.testBlock1Text}>{t(testBlock.nextBtn)}</p>
            <SvgArrow size={20} orientation="right" color={"white"} />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Block2;
