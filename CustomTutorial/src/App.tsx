import React from "react";
import { CustomTutorial } from "./components/CustomTutorial";

import * as styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <h2 className={styles.appHeadingContainer}>CustomTutorial Component</h2>
      <CustomTutorial />
      <div data-mt="ReactionIcon-0" className={styles.dummyIconContainer}>
        dummy ReactionIcon
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
    </div>
  );
};

export default App;
