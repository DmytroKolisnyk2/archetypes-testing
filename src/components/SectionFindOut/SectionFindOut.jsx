import React from "react";
import { useTranslation } from "react-i18next";
import { sectionFindOut } from "../../translations/ua/common.json";
import styles from "./SectionFindOut.module.scss";
import SectionTitle from "../sectionTitle/sectionTitle";
import CardSection from "../CardSection/CardSection";
import Bob1 from "../Bobs/Bob1";
import smallCardImg1 from "../../images/smallCardImg1.png";
import smallCardImg2 from "../../images/smallCardImg2.png";
import smallCardImg3 from "../../images/smallCardImg3.png";

const SectionFindOut = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <SectionTitle
        title={t(sectionFindOut.title)}
        text={t(sectionFindOut.subtitle)}
      />
      <ul className={styles.wrapperCards}>
        <CardSection
          bobs={<Bob1 />}
          smallRectangular
          title={t(sectionFindOut.titleCard1)}
          description={t(sectionFindOut.subtitleCard1)}
          color="purple"
          cardImg={smallCardImg1}
        />
        <CardSection
          bobs={<Bob1 />}
          smallRectangular
          title={t(sectionFindOut.titleCard2)}
          description={t(sectionFindOut.subtitleCard2)}
          color="green"
          cardImg={smallCardImg2}
        />
        <CardSection
          bobs={<Bob1 />}
          smallRectangular
          title={t(sectionFindOut.titleCard3)}
          description={t(sectionFindOut.subtitleCard3)}
          color="pink"
          cardImg={smallCardImg3}
        />
      </ul>
    </section>
  );
};

export default SectionFindOut;
