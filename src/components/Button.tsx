import React from "react";
// import styles from "./Button.module.scss";
import styles from "./Button.css";

const Button: React.FC = () => {
  const onClick = () => {
    console.log("crab button was clicked");
  };

  return (
    <div className={styles["button-container"]}>
      <button onClick={onClick}>🦀Remote Button🦀</button>
    </div>
  );

  /* 
  return <button onClick={onClick}>🦀Remote Button🦀</button>;
    */
};

export default Button;
