import React from "react";
import { CustomLeaveButton } from "./components/CustomLeaveButton";

import * as styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <h2 className={styles.appHeadingContainer}>
        CustomLeaveButton Component
      </h2>
      <CustomLeaveButton />
    </div>
  );
};

export default App;
