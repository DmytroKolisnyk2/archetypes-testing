import React from "react";

import styles from './HomePage.module.scss';
import SectionWhatFor from "../../components/SectionWhatFor/SectionWhatFor";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <SectionWhatFor/>
    </main>
  );
}
