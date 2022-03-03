import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ArchetypesCard.module.scss";
import Arrow from "../../images/icons/upArrow.svg";
import Ruler from "../../images/ruler.jpg";

export default function ArchetypesCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className={`${styles.card} ${isOpen && styles.card_open}`}>
      <div className={styles.captionWrapper}>
        <h2 className={styles.caption}>Второй Архетип</h2>
        <button className={styles.button} type="button" onClick={() => setIsOpen(!isOpen)}>
          <img src={Arrow} alt="arrow" className={styles.arrow} />
        </button>
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.contentWrapper}>
          <img className={styles.image} src={Ruler} alt="ruler" />
          <div className={styles.textWrapper}>
            <h2 className={styles.caption}>Правитель</h2>
            <p className={styles.characteristic}>
              <span>Мотивация:</span> бути успішним
            </p>
            <p className={styles.characteristic}>
              <span>Страх:</span> бути успішним
            </p>
            <p className={styles.characteristic}>
              <span>Cильные стороны:</span> бути успішним
            </p>
            <p className={styles.characteristic}>
              <span>Слабые стороны:</span> бути успішним
            </p>
            <p className={styles.characteristic}>
              <span>Стратегия:</span> управлять другими, через авторитет и достигать результата{" "}
            </p>
          </div>
        </div>
        <div className={styles.paragraphWrapper}>
          <p className={styles.text}>
            Правитель - это яркий лидер и тот, кто ведет за собой. Такие люди часто независимы,
            уверенны в себе и любят брать ответственность. Прирожденный лидер и управленец.
            Правители любят все, что связано со статусом, достижениями и результатами, не
            стесняются показать себя во всей красе.
          </p>
          <p className={styles.text}>
            В стрессе правитель становится авторитарным и даже в какой-то мере тираничным.
            Утрачивает способность слышать других и зацикливается на собственной правоте. Может
            быть жесток в суждениях и действиях, импульсивен и категоричен. Правители склонны
            делить людей на своих и чужих, чувствуют превосходство на теми, кто слабее и постоянно
            конкурирует с равными себе, но не всегда честно.
          </p>
        </div>
      </div>
    </article>
  );
}

//ArchetypesCard.propTypes = {

//}
