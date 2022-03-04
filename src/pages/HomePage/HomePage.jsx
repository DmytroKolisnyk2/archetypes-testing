import React from 'react'
import { useTranslation } from "react-i18next";

import SectionAbout from '../../components/SectionAbout/SectionAbout';
import aboutArchetypesImg from '../../images/aboutArchetypesImg.png';
export default function HomePage() {
  const { t } = useTranslation();
  return (
    <main >
      <SectionAbout title={t("SectionAboutTitle")} description={t("SectionDescription")} sectionImg={aboutArchetypesImg} />
    </main>
  )
}
