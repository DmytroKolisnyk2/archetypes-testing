import React from "react";
import sectionTitleScss from "./sectionTitleScss.module.scss";
import PropTypes from "prop-types";

const SectionTitle = ({ title, text }) => {
  return (
    <div className={sectionTitleScss.sectionTitleDiv}>
      <h2 className={sectionTitleScss.sectionTitleTitle}>{title}</h2>
      <p className={sectionTitleScss.sectionTitleText}>{text}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default SectionTitle;
