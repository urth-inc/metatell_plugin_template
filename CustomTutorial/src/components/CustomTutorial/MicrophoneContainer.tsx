import React from "react";

// import { ReactComponent as MicrophoneIcon } from "../../icons/Microphone.svg";
// import { ReactComponent as MicrophoneMutedIcon } from "../../icons/MicrophoneMuted.svg";

import * as styles from "./MicrophoneContainer.module.scss";
import * as commonStyles from "./common.module.scss";
import { useMicrophoneTutorial } from "./useMicrophoneTutorial";

type Props = {
  index: number;
  skipTutorial: () => void;
  stepIndex: number;
  run: boolean;
  setStepIndex: React.Dispatch<React.SetStateAction<number>>;
  setShowEffect: React.Dispatch<React.SetStateAction<boolean>>;
  setHideArrow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MicrophoneContainer: React.FC<Props> = ({
  index,
  skipTutorial,
  stepIndex,
  run,
  setStepIndex,
  setShowEffect,
  setHideArrow,
}: Props) => {
  useMicrophoneTutorial({
    index,
    run,
    stepIndex,
    setStepIndex,
    setShowEffect,
    setHideArrow,
  });
  return (
    <div className={commonStyles.tutorialContainer}>
      <div className={styles.micIconContainer}>
        {/*
        <MicrophoneMutedIcon />
        <div className={styles.triangle}></div>
        <MicrophoneIcon />
        */}
      </div>
      <div className={commonStyles.messageContainer}>
        マイクをオンにして近くの人に話しかけてみよう
      </div>
      <div className={commonStyles.progressContainer}>3/4</div>
      <button onClick={skipTutorial} className={commonStyles.skipButton}>
        スキップ
      </button>
    </div>
  );
};
