import React from "react";

import * as styles from "./CustomOverlay.module.scss";

export const CustomOverlay: React.FC = () => {
  return (
    <div className={styles.customOverlayContainer}>
      <div className={styles.sampleOverlay1}>
        <div>Sample Overlay1</div>
      </div>
      <div className={styles.overlayWrapper}>
        <div className={styles.sampleOverlay2}>
          <div>Sample Overlay2</div>
        </div>
        <div className={styles.sampleOverlay3}>
          <div>Sample Overlay3</div>
        </div>
      </div>
    </div>
  );
};
