import React from "react";

import { ChatIcon } from "./icons/ChatIcon";

import * as styles from "./ChatContainer.module.scss";
import * as commonStyles from "./common.module.scss";
import { useChatTutorial } from "./useChatTutorial";

type Props = {
  index: number;
  skipTutorial: () => void;
  stepIndex: number;
  run: boolean;
  setStepIndex: React.Dispatch<React.SetStateAction<number>>;
  setShowEffect: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ChatContainer: React.FC<Props> = ({
  index,
  skipTutorial,
  stepIndex,
  run,
  setStepIndex,
  setShowEffect,
}: Props) => {
  useChatTutorial({
    index,
    run,
    stepIndex,
    setStepIndex,
    setShowEffect,
  });

  return (
    <div className={commonStyles.tutorialContainer}>
      <div className={styles.chatIconContainer}>
        <ChatIcon />
        <div className={styles.chatIconText}>Chat</div>
      </div>
      <div className={commonStyles.messageContainer}>
        チャットで空間内の人に挨拶をしてみよう
      </div>
      <div className={commonStyles.progressContainer}>4/4</div>
      <button onClick={skipTutorial} className={commonStyles.skipButton}>
        スキップ
      </button>
    </div>
  );
};
