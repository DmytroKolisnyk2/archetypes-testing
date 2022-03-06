import React from "react";
import styles from "./HomePage.module.scss";

import { useTranslation } from "react-i18next";
import { sectionAboutArchetypes } from "../../translations/ua/common.json";

import SectionWhatFor from "../../components/SectionWhatFor/SectionWhatFor";
import SectionAbout from "../../components/SectionAbout/SectionAbout";
import aboutArchetypesImg from "../../images/aboutArchetypesImg.png";
import Introduction from "../../components/Introduction/Introduction";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <main className={styles.main}>
      <Introduction />
      <SectionAbout
        title={t(sectionAboutArchetypes.SectionAboutTitle)}
        description={t(sectionAboutArchetypes.SectionDescription)}
        sectionImg={aboutArchetypesImg}
      />
      <SectionWhatFor />
    </main>
  );
}
