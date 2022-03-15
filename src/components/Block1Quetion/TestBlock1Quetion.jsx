import React, { useState, useEffect } from "react";
import TestBlockStyles from "./TestBlock.module.scss";

function Block2Question({ number, options, headline, itemId, changeTestData, itemData }) {
  const [radio, setRadio] = useState(itemData);

  useEffect(() => {
    changeTestData({ id: itemId, radio });
  }, [radio]);
  return (
    <li>
      <h3 className={TestBlockStyles.question}>
        {number}. {headline}
      </h3>
      <div>
        {options.map((item, index) => {
          const key = index + 1;
          return (
            <label key={key} className={TestBlockStyles.options}>
              <input
                checked={radio === key}
                type="radio"
                name={`block-1_${number}`}
                id={`block-1_${number}-${key}`}
                onChange={() => {
                  setRadio(key);
                }}
              />
              {item}
            </label>
          );
        })}
      </div>
    </li>
  );
}
export default Block2Question;
