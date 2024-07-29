import React from "react";

import * as styles from "./CustomOverlay.module.scss";

export const CustomOverlay: React.FC = () => {
  return (
    <div className={styles.customOverlayContainer}>
      <div className={styles.sampleOverlay}>
        <div>Sample Overlay</div>
        <button
          onClick={() => {
            console.log("clicked");
          }}
        >
          Click me
        </button>
      </div>
    </div>
  );
};
