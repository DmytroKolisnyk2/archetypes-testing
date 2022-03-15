import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import styles from "./ArchetypeDetailPage.module.scss";
import SvgArrow from "../../components/SvgArrow/SvgArrow";
import ArchetypesCard from "../../components/ArchetypesCard/ArchetypesCard";
import { archetypePage } from "../../translations/ua/common.json";

const ArchetypeDetailPage = () => {
  const { t } = useTranslation();
  const { archetypeId } = useParams();
  const navigate = useNavigate();
  const onClickBtn = () => {
      return navigate(-1);
  };
  console.log(t(archetypePage[archetypeId].image));
  return (
    <section className={styles.section}>
    <button className={styles.button} type="button" onClick={onClickBtn}>
    <SvgArrow orientation="left" size={50} />
    </button>
      <ArchetypesCard
        headline={t(archetypePage[archetypeId].title)}
        motivationText={t(archetypePage[archetypeId].subtitle1)}
        fearText={t(archetypePage[archetypeId].subtitle2)}
        strongSideText={t(archetypePage[archetypeId].subtitle3)}
        weakSideText={t(archetypePage[archetypeId].subtitle4)}
        strategyText={t(archetypePage[archetypeId].subtitle5)}
        firstParagraph={t(archetypePage[archetypeId].paragraph1.text)}
        secondParagraph={t(archetypePage[archetypeId].paragraph2.text)}
        image={t(archetypePage[archetypeId].image)}
      />
    </section>
  );
};

export default ArchetypeDetailPage;
