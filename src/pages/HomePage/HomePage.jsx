import React from "react";
import styles from "./HomePage.module.scss";

import { useTranslation } from "react-i18next";
import { sectionAboutArchetypes } from "../../translations/ua/common.json";

import SectionWhatFor from "../../components/SectionWhatFor/SectionWhatFor";
import SectionAbout from "../../components/SectionAbout/SectionAbout";
import aboutArchetypesImg from "../../images/aboutArchetypesImg.png";
import Introduction from "../../components/Introduction/Introduction";

import { Fade, Slide } from "react-awesome-reveal";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <Fade>
        <Introduction />
      </Fade>
      <Fade triggerOnce direction="bottom">
        <SectionAbout
          title={t(sectionAboutArchetypes.SectionAboutTitle)}
          description={t(sectionAboutArchetypes.SectionDescription)}
          sectionImg={aboutArchetypesImg}
        />
      </Fade>
      <SectionWhatFor />
    </section>
  );
}
