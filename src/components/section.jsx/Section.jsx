import React from "react";

import styles from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default Section;