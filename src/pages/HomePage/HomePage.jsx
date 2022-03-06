import React from "react";

import styles from './HomePage.module.scss';
import SectionWhatFor from "../../components/SectionWhatFor/SectionWhatFor";
import { useTranslation } from "react-i18next";
import SectionAbout from '../../components/SectionAbout/SectionAbout';
import aboutArchetypesImg from '../../images/aboutArchetypesImg.png';
import {sectionAboutArchetypes} from '../../translations/ua/common.json';

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <main className={styles.main}>
  
      <SectionAbout title={t(sectionAboutArchetypes.SectionAboutTitle)} description={t(sectionAboutArchetypes.SectionDescription)} sectionImg={aboutArchetypesImg} />    
  <SectionWhatFor/>
  
    </main>
  );

}
