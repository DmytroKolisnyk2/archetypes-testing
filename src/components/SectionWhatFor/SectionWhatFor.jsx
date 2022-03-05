import React from "react";
import { useTranslation } from "react-i18next";

import SectionTitle from '../sectionTitle/sectionTitle';
import CardSection from '../CardSection/CardSection';

import styles from './SectionWhatFor.module.scss';

import {sectionWhatForArchetypes} from '../../translations/ua/common.json';

const SectionWhatFor = () => {
    const { t } = useTranslation();
    return(
        <section>
        <SectionTitle
          title={t(sectionWhatForArchetypes.title)}
          text={t(sectionWhatForArchetypes.subtitle)}
        />
        <ul>
            
        </ul>
      </section>
    );
};

export default SectionWhatFor;