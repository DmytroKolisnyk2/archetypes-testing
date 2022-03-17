import React, { useState, useEffect } from "react";
import TestBlockStyles from "./TestBlock.module.scss";
import PropTypes from "prop-types";

function Block1Question({ options, headline, itemId, changeTestData, itemData, estimate }) {
  const [radio, setRadio] = useState(itemData);

  useEffect(() => {
    if (options.length === 5) {
      radio === 4 || radio === 5
        ? changeTestData({ id: itemId, radio, estimate })
        : changeTestData({ id: itemId, radio });
    } else {
      radio === 2
        ? changeTestData({ id: itemId, radio, estimate })
        : changeTestData({ id: itemId, radio });
    }
  }, [radio]);
  return (
    <li>
      <h3 className={TestBlockStyles.question}>
        {itemId}. {headline}
      </h3>
      <div className={TestBlockStyles.wrapperLabel1}>
        {options.map((item, index) => {
          const key = index + 1;
          return (
   
            <label key={key} className={TestBlockStyles.options}>
              <input
                checked={radio === key}
                type="radio"
                name={`block-1_${itemId}`}
                id={`block-1_${itemId}-${key}`}
                onChange={() => {
                  setRadio(key);
                }}
                className={TestBlockStyles.radio}
              />
              {item}
            </label>
       
          );
        })}
      </div>
    </li>
  );
}
export default Block1Question;

Block1Question.propTypes = {
  options: PropTypes.array.isRequired,
  headline: PropTypes.string.isRequired,
  itemId: PropTypes.number.isRequired,
  changeTestData: PropTypes.func.isRequired,
};
