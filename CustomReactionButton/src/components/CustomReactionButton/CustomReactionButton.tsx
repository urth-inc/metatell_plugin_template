import React from "react";

import { SampleIcon } from "./SampleIcon";
import * as styles from "./CustomReactionButton.module.scss";

interface CustomReactionButtonProps {}

export const CustomReactionButton: React.FC<
  CustomReactionButtonProps
> = ({}) => {
  const handleClick = () => {
    console.log("CustomReactionButton clicked");
  };

  return (
    <button className={styles.customLeaveButtonContainer} onClick={handleClick}>
      <div className={styles.sampleIconContainer}>
        <SampleIcon />
      </div>
      <div className={styles.customLeaveButtonLabel}>React</div>
    </button>
  );
};
