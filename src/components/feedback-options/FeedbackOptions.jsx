import React from "react";

import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.feedbackOptions}>
      {options &&
        options.length &&
        options.map((btn) => {
          return (
            <button key={btn.id} onClick={() => onLeaveFeedback(btn.value)}>
              {btn.name}
            </button>
          );
        })}
    </div>
  );
};

export default FeedbackOptions;
