import React, { useState, useEffect } from "react";
import TestBlockStyles from "./TestBlock.module.scss";
import { changeTestData } from "../../redux/block1/block1-actions";
import { connect } from "react-redux";

function Block2Question({ number, options, headline, itemId, changeTestData }) {
  const [radio, setRadio] = useState(null);

  useEffect(() => {
    changeTestData({ id: itemId, radio });
  }, [radio]);

  return (
    <li>
      <h3 className={TestBlockStyles.question}>
        {number}. {headline}
      </h3>
      <div>
        {options.map((item, index) => (
          <label key={index} className={TestBlockStyles.options}>
            <input
              checked={radio === index}
              type="radio"
              name={`block-1_${number}`}
              id={`block-1_${number}-${index + 1}`}
              onChange={() => {
                setRadio(index);
              }}
            />
            {item}
          </label>
        ))}
      </div>
    </li>
  );
}
// const mapStateToProps = (state) => ({
//   smthProp: state.smtProp
// });
const mapDispatchToProps = (dispatch) => ({
  changeTestData: (data) => dispatch(changeTestData(data)),
});
export default connect(null, mapDispatchToProps)(Block2Question);
