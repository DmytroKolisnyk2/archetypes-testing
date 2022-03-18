import React from "react";
import PropTypes from "prop-types";

import styles from "./SectionAbout.module.scss";

const SectionAbout = ({ title, description, sectionImg }) => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <img className={styles.image} src={sectionImg} alt="" />
        <div className={styles.wrapperText}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </section>
  );
};
SectionAbout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sectionImg: PropTypes.string.isRequired,
};

export default SectionAbout;
