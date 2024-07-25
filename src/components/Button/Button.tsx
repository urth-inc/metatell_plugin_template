import React from "react";
import * as styles from "./Button.module.scss";

export const Button: React.FC = () => {
  const onClick = () => {
    console.log("crab button was clicked");
  };

  return (
    <div className={styles.buttonContainer}>
      <button onClick={onClick}>🦀Remote Button🦀</button>
    </div>
  );
};
