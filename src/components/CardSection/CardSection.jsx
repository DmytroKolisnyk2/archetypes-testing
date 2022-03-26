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
  typeImg,
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
        [styles.imageWidth1]:
        smallRectangular === true && type === "image1",
        [styles.imageWidth2]:
        smallRectangular === true && type === "image2",
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
          className={addClass(smallRectangular, typeImg)}
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
  bobs: PropTypes.element,
  typeImg: PropTypes.string,
};

CardSection.defaultProps = {
  smallRectangular: false,
  typeImg: "image"
};


export default CardSection;
