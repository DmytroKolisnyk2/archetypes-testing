import React from "react";
import PropTypes from 'prop-types';
import Rectangle from "../Rectangle/Rectangle";
import styles from "./CardSection.module.scss";

const CardSection = ({ title, cardImg, description, color }) => {
  return (
    <div className={styles.card}>
    <Rectangle color={color}/>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.wrapper}>
          <img className={styles.image} src={cardImg} alt="card_img" />
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

CardSection.propTypes = {
  title: PropTypes.string.isRequired,
  cardImg: PropTypes.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default CardSection;
