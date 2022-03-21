import React, { useState, useEffect } from "react";
import styles from "./Block2Question.module.scss";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { block2 } from "../../translations/ua/common.json";

export default function Block2Question({ images, itemId, changeTestData, itemData }) {
  const [radio, setRadio] = useState(itemData);
  const { t } = useTranslation();

  useEffect(() => {
    changeTestData({ id: itemId, radio });
  }, [radio]);

  return (
    <li id={`block-2_${itemId}`} className={styles.question}>
      <h3 className={styles.headline}>
        {itemId}. {t(block2.question)}
      </h3>
      <div className={styles.variantsWrapper}>
        {images.map((item, index) => {
          const key = index + 1;
          return (
            <label
              htmlFor={`block-2_${itemId}-${key}`}
              key={key}
              className={`${styles.card} ${radio === item.value && styles.cardActive}`}
            >
              <div className={styles.imgWrapper}>
                <img className={styles.img} src={item.url} alt={item.value} />
              </div>
              <span className={styles.cardNumber}>{key}</span>
              <input
                className={styles.input}
                checked={radio === item.value}
                type="radio"
                name={`block-2_${itemId}`}
                onChange={() => {
                  setRadio(item.value);
                  document.querySelector(`#block-2_${itemId + 1}`)?.scrollIntoView();
                }}
                id={`block-2_${itemId}-${key}`}
              />
            </label>
          );
        })}
      </div>
    </li>
  );
}

Block2Question.propTypes = {
  itemId: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  changeTestData: PropTypes.func.isRequired,
};
