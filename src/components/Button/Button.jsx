import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

export default function Button({bottom, children, width, paddingLeft, paddingRight, bgColor, color,margin }) {
  const colorPalette = {
    white: "white", 
    black: "#212353",
  };
  const bgColorPalette = { 
    white: "white",
    pink: "#F063B8",
    violet: "#9C69E2",
  };

  return (
    <button
      style={{
        padding: `15px ${paddingRight}px 16px ${paddingLeft}px`,
        width: width,
        backgroundColor: bgColorPalette[bgColor],
        color: colorPalette[color],
        marginBottom: bottom,
        margin:margin,
      }}
      className={styles.button}
      type="button"
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  width: 170,
  paddingLeft: 30,
  paddingRight: 30,
};

Button.propTypes = {
  width: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingLeft: PropTypes.number,
  bgColor: PropTypes.oneOf(["white", "pink", "violet"]).isRequired,
  color: PropTypes.oneOf(["white", "black"]).isRequired,
};


//--------------------------Example------------------------------

// import LeftArrow from "../../../images/icons/leftArrow.svg";

// <Button color="white" bgColor="violet" paddingRight={29} paddingLeft={30}>
//   Дальше
// <SvgArrow orientation="right"  className={styles.arrow} />
// </Button>;