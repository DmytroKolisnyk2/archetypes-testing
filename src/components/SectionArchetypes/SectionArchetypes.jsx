import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./SectionArchetypes.module.scss";
import SmallArchetypesCard from "../smallArchetypesCard/smallArchetypesCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import Bob1 from "../Bobs/Bob1";
import Bob5 from "../Bobs/Bob5";
import Bob6 from "../Bobs/Bob6";
import { cards } from "../../services/dataSmallCards.json";
import { sectionArchetypes } from "../../translations/ua/common.json";
import { Fade } from "react-awesome-reveal";

const SectionArchetypes = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <SectionTitle title={t(sectionArchetypes.title)} text={t(sectionArchetypes.subtitle)} />
      <ul className={styles.wrapperCards}>
        {cards.map((item, index) => {
          return (
            // <Fade triggerOnce direction={index % 2 === 0 ? "right" : "left"}>
              <SmallArchetypesCard
                bobs={
                  item.bottomBob && item.rotate ? (
                    <Bob5 />
                  ) : item.bottomBob && !item.rotate ? (
                    <Bob6 />
                  ) : !item.bottomBob && item.rotate ? (
                    <Bob6 />
                  ) : (
                    <Bob1 />
                  )
                }
                rotate={item.rotate}
                key={item.id}
                cardId={item.id}
                color={item.color}
                title={sectionArchetypes.arrayTitleCards.map((itemText) => {
                  return itemText.id === item.id && itemText.titleCard;
                })}
              />
            // </Fade>
          );
        })}
      </ul>
    </section>
  );
};

export default SectionArchetypes;
