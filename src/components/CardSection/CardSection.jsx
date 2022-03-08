import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Rectangle from "../Rectangle/Rectangle";
import styles from "./CardSection.module.scss";

const CardSection = ({
  title,
  cardImg,
  description,
  color,
  smallRectangular,
  bobs,
}) => {
  const addClass = (smallRectangular, type) => {
    return classNames({
      [styles.card_smallRectangular]:
        smallRectangular === true && type === "card",
      [styles.content_smallRectangular]:
        smallRectangular === true && type === "content",
      [styles.title_smallRectangular]:
        smallRectangular === true && type === "title",
      [styles.wrapper_smallRectangular]:
        smallRectangular === true && type === "wrapper",
      [styles.image_smallRectangular]:
        smallRectangular === true && type === "image",
      [styles.description_smallRectangular]:
        smallRectangular === true && type === "description",
      [styles.card]: smallRectangular !== true && type === "card",
      [styles.content]: smallRectangular !== true && type === "content",
      [styles.title]: smallRectangular !== true && type === "title",
      [styles.wrapper]: smallRectangular !== true && type === "wrapper",
      [styles.image]: smallRectangular !== true && type === "image",
      [styles.description]: smallRectangular !== true && type === "description",
    });
  };
  return (
    <li className={addClass(smallRectangular, "card")}>
      {smallRectangular ? (
        <Rectangle width={240} height={170} color={color} />
      ) : (
        <Rectangle color={color} />
      )}
      {bobs}
      <div className={addClass(smallRectangular, "content")}>
        <img
          className={addClass(smallRectangular, "image")}
          src={cardImg}
          alt="card_img"
        />
        <div className={addClass(smallRectangular, "wrapper")}>
          <h2 className={addClass(smallRectangular, "title")}>{title}</h2>
          <p className={addClass(smallRectangular, "description")}>
            {description}
          </p>
        </div>
      </div>
    </li>
  );
};

CardSection.propTypes = {
  title: PropTypes.string.isRequired,
  cardImg: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  smallRectangular: PropTypes.bool,
};

CardSection.defaultProps = {
  smallRectangular: false,
};

// Дока
// Щоб викликати маленьку крім основних пропів потрібно прокинути smallRectangular. Решта все як завжди
// Виклик великої трапеції(картки)
{
  /* <CardSection
color="green"
title="Реализовать свой потенциал"
description="Архетипы помогают обнаружить свои нереализованные ценности и разблокировать к ним доступ. Интеграция ценностей своих архетипов в жизнь помогают проживать ее на полную и чувствовать удволетворенность."
cardImg={CardImg}
/> */
}
// Виклик малої трапеції(картки)
{
  /* <CardSection
smallRectangular
color="purple"
title="Время"
description="10 минут"
cardImg={smallImg}
/> */
}

export default CardSection;
