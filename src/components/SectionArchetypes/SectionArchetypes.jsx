import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./SectionArchetypes.module.scss";
import SmallArchetypesCard from "../smallArchetypesCard/smallArchetypesCard";
import SectionTitle from '../sectionTitle/sectionTitle';

import { cards } from "../../services/dataSmallCards.json";
import { sectionArchetypes } from "../../translations/ua/common.json";

const SectionArchetypes = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
    <SectionTitle title={t(sectionArchetypes.title)} text={t(sectionArchetypes.subtitle)}/>
      <ul className={styles.wrapperCards}>
        {cards.map((item) => {
          return (
            <SmallArchetypesCard
              // bobs={item.bottomBob}
              rotate={item.rotate}
              id={item.id}
              cardId={item.id}
              color={item.color}
              title={sectionArchetypes.arrayTitleCards.map(itemText => {
                return itemText.id === item.id && itemText.titleCard
              })}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default SectionArchetypes;
