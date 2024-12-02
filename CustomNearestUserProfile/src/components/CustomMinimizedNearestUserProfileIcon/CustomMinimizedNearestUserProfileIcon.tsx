import React from "react";
import classNames from "classnames";

import { SpeakerIcon } from "./SpeakerIcon";

import * as styles from "./CustomMinimizedNearestUserProfileIcon.module.scss";

type Props = {
  onClick: () => void;
  showSpeakerIcon: boolean;
};

export const CustomMinimizedNearestUserProfileIcon: React.FC<Props> = ({
  onClick,
  showSpeakerIcon,
}) => {
  return (
    <button
      className={classNames(styles.menuButtonContainer, {
        [styles.hidden]: !showSpeakerIcon,
      })}
      onClick={onClick}
    >
      <SpeakerIcon />
    </button>
  );
};
