import React from "react";

// import { ReactComponent as ReactionIcon } from "../../icons/Reaction.svg";

import * as styles from "./ReactionContainer.module.scss";
import * as commonStyles from "./common.module.scss";
import { useReactionTutorial } from "./useReactionTutorial";

type Props = {
  skipTutorial: () => void;
  index: number;
  stepIndex: number;
  run: boolean;
  setStepIndex: React.Dispatch<React.SetStateAction<number>>;
  setShowEffect: React.Dispatch<React.SetStateAction<boolean>>;
  setHideArrow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ReactionContainer: React.FC<Props> = ({
  skipTutorial,
  stepIndex,
  index,
  run,
  setStepIndex,
  setShowEffect,
  setHideArrow,
}: Props) => {
  useReactionTutorial({
    run,
    stepIndex,
    index,
    setStepIndex,
    setShowEffect,
    setHideArrow,
  });

  return (
    <div className={commonStyles.tutorialContainer}>
      <div className={styles.reactionIconContainer}>
        {/* 
        <ReactionIcon />
        */}
        <div className={styles.reactionIconText}>React</div>
      </div>
      <div className={commonStyles.messageContainer}>
        リアクションを押してみよう
      </div>
      <div
        className={commonStyles.progressContainer}
      >{`${(stepIndex + 1).toString()}/4`}</div>
      <button onClick={skipTutorial} className={commonStyles.skipButton}>
        スキップ
      </button>
    </div>
  );
};
