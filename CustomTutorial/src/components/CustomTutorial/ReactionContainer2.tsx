import React from "react";

import * as commonStyles from "./common.module.scss";
import { useReactionTutorial2 } from "./useReactionTutorial2";

type Props = {
  index: number;
  skipTutorial: () => void;
  run: boolean;
  stepIndex: number;
  setStepIndex: React.Dispatch<React.SetStateAction<number>>;
  setShowEffect: React.Dispatch<React.SetStateAction<boolean>>;
  setHideArrow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ReactionContainer2: React.FC<Props> = ({
  index,
  skipTutorial,
  run,
  stepIndex,
  setStepIndex,
  setShowEffect,
  setHideArrow,
}: Props) => {
  useReactionTutorial2({
    index,
    run,
    stepIndex,
    setStepIndex,
    setShowEffect,
    setHideArrow,
  });

  return (
    <div className={commonStyles.tutorialContainer}>
      <div className={commonStyles.messageContainer}>押してみよう</div>
      <div
        className={commonStyles.progressContainer}
      >{`${(index + 1).toString()}/4`}</div>
      <button onClick={skipTutorial} className={commonStyles.skipButton}>
        スキップ
      </button>
    </div>
  );
};
