import React from "react";
import { CustomReactionButton } from "./components/CustomReactionButton";

import * as styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <h2 className={styles.appHeadingContainer}>
        CustomChatButton Component
      </h2>
      <CustomReactionButton />
    </div>
  );
};

export default App;
