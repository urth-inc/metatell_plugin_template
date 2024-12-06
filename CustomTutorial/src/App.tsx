import React from "react";
import { CustomTutorial } from "./components/CustomTutorial";

import * as styles from "./App.module.scss";

const App: React.FC = () => {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("initTutorial"));
  };

  return (
    <div className={styles.appContainer}>
      <h2 className={styles.appHeadingContainer}>CustomTutorial Component</h2>
      <CustomTutorial />
      <div data-mt="ReactionIcon-0" className={styles.dummyIconContainer}>
        ReactionIcon
      </div>
      <div data-mt="Toolbar" className={styles.dummyToolbarContainer}>
        <div className={styles.dummyToolbarItem} data-mt="ToolbarMicButton">
          Microphone
        </div>
        <div
          className={styles.dummyToolbarItem}
          data-mt="ReactionPopoverContainer"
        >
          Reaction
        </div>
        <div
          className={styles.dummyToolbarItem}
          data-mt="ChatToolbarButtonContainer"
        >
          Chat
        </div>
      </div>
      <div className={styles.startTutorialButtonContainer}>
        <button onClick={handleClick}>Start Tutorial</button>
      </div>
    </div>
  );
};

export default App;
