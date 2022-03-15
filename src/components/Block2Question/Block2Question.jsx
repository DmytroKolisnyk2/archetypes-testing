import React, { useState, useEffect } from "react";
import styles from "./Block2Question.module.scss";
import PropTypes from "prop-types";

export default function Block2Question({ number, images, itemId, changeTestData, itemData }) {
  const [radio, setRadio] = useState(itemData);
  useEffect(() => {
    changeTestData({ id: itemId, radio });
  }, [radio]);
  return (
    <li className={styles.question}>
      <h3 className={styles.headline}>{number}. Вопрос</h3>
      <div className={styles.variantsWrapper}>
        {images.map((item, index) => {
          const key = index + 1;
          return (
            <label
              htmlFor={`block-2_${number}-${key}`}
              key={key}
              className={`${styles.card} ${radio === key && styles.cardActive}`}
            >
              <div className={styles.imgWrapper}>
                <img className={styles.img} src={item} alt="no-phot" />
              </div>
              <span className={styles.cardNumber}>{key}</span>
              <input
                className={styles.input}
                checked={radio === key}
                type="radio"
                name={`block-2_${number}`}
                onChange={() => setRadio(key)}
                id={`block-2_${number}-${key}`}
              />
            </label>
          );
        })}
      </div>
    </li>
  );
}

Block2Question.propTypes = {
  number: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
};
