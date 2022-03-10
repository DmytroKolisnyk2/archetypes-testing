import React, { useState } from "react";
import TestBlockStyles from "./TestBlock.module.scss";

export default function Block2Question({ number, options, headline }) {
  const [radio, setRadio] = useState("");
  return (
    <li>
      <h3 className={TestBlockStyles.quetion}>
        {number}. {headline}
      </h3>
      <div>
        {options.map((item, index) => (
          <label key={index} className={TestBlockStyles.options}>
            <input
              checked={radio === index}
              type="radio"
              name={`block-1_${number}`}
              onChange={() => setRadio(index)}
              id={`block-1_${number}-${index + 1}`}
            />
            {options}
          </label>
        ))}
      </div>
    </li>
  );
}
