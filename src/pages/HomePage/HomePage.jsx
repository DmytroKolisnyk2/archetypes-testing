import React from 'react'
import { useTranslation } from "react-i18next";

import SectionAbout from '../../components/SectionAbout/SectionAbout';
import aboutArchetypesImg from '../../images/aboutArchetypesImg.png';
import {sectionAboutArchetypes} from '../../translations/ua/common.json';
export default function HomePage() {
  const { t } = useTranslation();
  return (
    <main >
      <SectionAbout title={t(sectionAboutArchetypes.SectionAboutTitle)} description={t(sectionAboutArchetypes.SectionDescription)} sectionImg={aboutArchetypesImg} />
    </main>
  )
}
