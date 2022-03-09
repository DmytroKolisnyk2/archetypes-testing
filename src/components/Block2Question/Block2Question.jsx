import React, { useState } from "react";
import styles from "./Block2Question.module.scss";
import PropTypes from "prop-types";

export default function Block2Question({ number, images, headline }) {
  const [radio, setRadio] = useState("");
  return (
    <li className={styles.question}>
      <h3 className={styles.headline}>
        {number}. {headline}
      </h3>
      <div className={styles.variantsWrapper}>
        {images.map((item, index) => (
          <label
            htmlFor={`block-2_${number}-${index + 1}`}
            key={index}
            className={`${styles.card} ${radio === index && styles.cardActive}`}
          >
            <div className={styles.imgWrapper}>
              <img className={styles.img} src={item} alt="no-phot" />
            </div>
            <span className={styles.cardNumber}>{index + 1}</span>
            <input
              className={styles.input}
              checked={radio === index}
              type="radio"
              name={`block-2_${number}`}
              onChange={() => setRadio(index)}
              id={`block-2_${number}-${index + 1}`}
            />
          </label>
        ))}
      </div>
    </li>
  );
}

Block2Question.propTypes = {
  number: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  headline: PropTypes.string.isRequired,
};
