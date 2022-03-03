import React from "react";
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

export default CardSection;
