import React from "react";
import { useTranslation } from "react-i18next";

import SectionTitle from "../SectionTitle/SectionTitle";
import CardSection from "../CardSection/CardSection";
import Bob1 from "../Bobs/Bob1";
import Bob2 from "../Bobs/Bob2";
import Bob3 from "../Bobs/Bob3";
import Bob4 from "../Bobs/Bob4";
import styles from "./SectionWhatFor.module.scss";
import cardImg1 from "../../images/cardImg1.png";
import cardImg2 from "../../images/cardImg2.png";
import cardImg3 from "../../images/cardImg3.png";
import cardImg4 from "../../images/cardImg4.png";

import { sectionWhatForArchetypes } from "../../translations/ua/common.json";
import { Fade, Slide } from "react-awesome-reveal";

const SectionWhatFor = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.sectionWhatFor}>
      <SectionTitle
        title={t(sectionWhatForArchetypes.title)}
        text={t(sectionWhatForArchetypes.subtitle)}
      />

      <ul className={styles.wrapperCards}>
        <Fade cascade direction="left">
          <CardSection
            bobs={<Bob1 />}
            title={t(sectionWhatForArchetypes.titleCard1)}
            description={t(sectionWhatForArchetypes.descriptionCard1)}
            cardImg={cardImg1}
            color="green"
          />
          <CardSection
            bobs={<Bob2 />}
            title={t(sectionWhatForArchetypes.titleCard2)}
            description={t(sectionWhatForArchetypes.descriptionCard2)}
            cardImg={cardImg2}
            color="purple"
          />
        </Fade>
        <Fade cascade direction="right">
          <CardSection
            bobs={<Bob3 />}
            title={t(sectionWhatForArchetypes.titleCard3)}
            description={t(sectionWhatForArchetypes.descriptionCard3)}
            cardImg={cardImg3}
            color="pink"
          />
          <CardSection
            bobs={<Bob4 />}
            title={t(sectionWhatForArchetypes.titleCard4)}
            description={t(sectionWhatForArchetypes.descriptionCard4)}
            cardImg={cardImg4}
            color="blue"
          />
        </Fade>
      </ul>
    </section>
  );
};

export default SectionWhatFor;
