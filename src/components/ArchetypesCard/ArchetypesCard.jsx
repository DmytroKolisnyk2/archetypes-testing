import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ArchetypesCard.module.scss";
import SvgArrow from "../SvgArrow/SvgArrow";
import { useTranslation } from "react-i18next";
export default function ArchetypesCard({
  motivationText,
  fearText,
  strongSideText,
  weakSideText,
  strategyText,
  headline,
  openHeadline,
  image,
  firstParagraph,
  secondParagraph,
  bgColor,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <article
      style={{ backgroundColor: bgColor || "rgba(240, 99, 184, 0.15)" }}
      className={`${styles.card} ${(isOpen || !openHeadline) && styles.card_open} ${
        !openHeadline && styles.card_notClosable
      }`}
    >
      <div className={styles.articleInnerWrapper}>
        {openHeadline && (
          <div className={styles.captionWrapper}>
            <h2 className={styles.caption}>{openHeadline}</h2>
            <button className={styles.button} type="button" onClick={() => setIsOpen(!isOpen)}>
              <SvgArrow orientation={isOpen ? "up" : "down"} className={styles.arrow} size={50} />
            </button>
          </div>
        )}
        <div className={styles.cardWrapper}>
          <div className={styles.contentWrapper}>
            <img width={400} height={400} className={styles.image} src={image} alt="ruler" />
            <div className={styles.textWrapper}>
              <h2 className={styles.caption}>{headline}</h2>
              <p className={styles.characteristic}>
                <span>{t("archetypesCard.motivation")}:</span> {motivationText}
              </p>
              <p className={styles.characteristic}>
                <span>{t("archetypesCard.fear")}:</span> {fearText}
              </p>
              <p className={styles.characteristic}>
                <span>{t("archetypesCard.strong")}:</span> {strongSideText}
              </p>
              <p className={styles.characteristic}>
                <span>{t("archetypesCard.weak")}:</span> {weakSideText}
              </p>
              <p className={styles.characteristic}>
                <span>{t("archetypesCard.strategy")}:</span> {strategyText}
              </p>
            </div>
          </div>
          <div className={styles.paragraphWrapper}>
            <p className={styles.text}>{firstParagraph}</p>
            <p className={styles.text}>{secondParagraph}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

ArchetypesCard.propTypes = {
  motivationText: PropTypes.string.isRequired,
  fearText: PropTypes.string.isRequired,
  strongSideText: PropTypes.string.isRequired,
  weakSideText: PropTypes.string.isRequired,
  strategyText: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  openHeadline: PropTypes.string,
  image: PropTypes.string.isRequired,
  firstParagraph: PropTypes.string.isRequired,
  secondParagraph: PropTypes.string.isRequired,
};

//------------------------- Example ----------------------------------------

//  <ArchetypesCard
//    motivationText="бути успішним"
//    fearText="бути успішним"
//    strongSideText="бути успішним"
//    weakSideText="бути успішним"
//    strategyText="управлять другими, через авторитет и достигать результата"
//    headline="Правитель"
//    openHeadline="Второй Архетип"
//    image={Ruler}
//    firstParagraph="Правитель - это яркий лидер и тот, кто ведет за собой. Такие люди часто независимы,
//             уверенны в себе и любят брать ответственность. Прирожденный лидер и управленец.
//             Правители любят все, что связано со статусом, достижениями и результатами, не
//             стесняются показать себя во всей красе."
//    secondParagraph="В стрессе правитель становится авторитарным и даже в какой-то мере тираничным.
//             Утрачивает способность слышать других и зацикливается на собственной правоте. Может
//             быть жесток в суждениях и действиях, импульсивен и категоричен. Правители склонны
//             делить людей на своих и чужих, чувствуют превосходство на теми, кто слабее и постоянно
//             конкурирует с равными себе, но не всегда честно."
//  />;
