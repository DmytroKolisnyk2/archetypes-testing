import React from "react";

const Rectangle = ({ color }) => {
  const verifyColor = (color) => {
    let colorRectangle;
    switch (color) {
      case "green":
        return (colorRectangle = "#68C9BA");
      case "purple":
        return (colorRectangle = "#9C69E2");
      case "pink":
        return (colorRectangle = "#F063B8");
      case "blue":
        return (colorRectangle = "#2D9CDB");
        default:
            return color;
    }
  };
  return (
    <svg
      width="434"
      height="358"
      viewBox="0 0 434 358"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.1"
        d="M44.2894 41.7355C48.3267 17.6466 69.1768 0.00012207 93.6017 0.00012207H383.284C410.898 0.00012207 433.284 22.3859 433.284 50.0001V308C433.284 335.614 410.898 358 383.284 358H50.3614C19.4461 358 -4.06087 330.226 1.0492 299.736L44.2894 41.7355Z"
        fill={verifyColor(color)}
      />
    </svg>
  );
};

export default Rectangle;
