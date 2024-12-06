import React from "react"

import { ReactComponent as MouseImage } from "../../icons/mouse.svg"

import styles from "./WelcomeContainer.module.scss"

type Props = {
  skipTutorial: () => void
}

export const WelcomeContainer: React.FC<Props> = ({ skipTutorial }: Props) => {
  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.mouseIconContainer}>
        <MouseImage />
      </div>
      <div className={styles.welcomeMessageContainer}>
        <div>チュートリアルへようこそ。</div>
        <div>画面をクリックしてドラッグすることで周りを見回してみよう</div>
      </div>
      <button onClick={skipTutorial} className={styles.skipButton}>
        スキップ
      </button>
    </div>
  )
}
