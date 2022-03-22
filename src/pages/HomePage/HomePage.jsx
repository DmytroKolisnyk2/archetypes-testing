import React from "react";
import styles from "./HomePage.module.scss";

import { useTranslation } from "react-i18next";

import SectionWhatFor from "../../components/SectionWhatFor/SectionWhatFor";
import SectionAbout from "../../components/SectionAbout/SectionAbout";
import aboutArchetypesImg from "../../images/aboutArchetypesImg.png";
import Introduction from "../../components/Introduction/Introduction";

import { Fade } from "react-awesome-reveal";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <Fade cascade duration={1500} triggerOnce>
        <Introduction />
        <SectionAbout
          title={t("sectionAboutArchetypes.SectionAboutTitle")}
          description={t("sectionAboutArchetypes.SectionDescription")}
          sectionImg={aboutArchetypesImg}
        />
      </Fade>
      <SectionWhatFor />
    </section>
  );
}
