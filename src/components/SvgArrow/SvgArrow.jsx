import React from "react";
import PropTypes from "prop-types";

const SvgArrow = ({ color, orientation }) => {
  const orientationParams = {
    up: "rotate(0deg)",
    down: "rotate(180deg)",
    right: "rotate(90deg)",
    left: "rotate(270deg)",
  };
  return (
    <svg
      style={{ transform: orientationParams[orientation] }}
      width="52"
      height="52"
      viewBox="0 0 32 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31 16L16 1L0.999999 16"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 0.999999L16 51"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SvgArrow;

SvgArrow.defaultProps = {
  color: "#9C69E2",
};

SvgArrow.propTypes = {
  color: PropTypes.string,
  orientation: PropTypes.oneOf(["up", "down", "right", "left"]).isRequired,
};