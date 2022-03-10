import React from "react";
import PropTypes from "prop-types";

const SvgArrow = ({ color, orientation, size }) => {
  const orientationParams = {
    up: "rotate(0deg)",
    down: "rotate(180deg)",
    right: "rotate(90deg)",
    left: "rotate(270deg)",
  };
  const corolSvg = {
    white: "white",
    pink: "#F063B8",
    violet: "#9C69E2",
  }
  return (
    <svg
      style={{ transform: orientationParams[orientation], width: size, cursor: "pointer" }}
      width="52"
      height="52"
      viewBox="0 0 32 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31 16L16 1L0.999999 16"
        stroke={corolSvg[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 0.999999L16 51"
        stroke={corolSvg[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgArrow;

SvgArrow.defaultProps = {
  color: "violet",
};

SvgArrow.propTypes = {
  color: PropTypes.string,
  orientation: PropTypes.oneOf(["up", "down", "right", "left"]).isRequired,
  size: PropTypes.number.isRequired,
};
