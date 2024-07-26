import React from "react";
import { CustomToolbarButton } from "./components/CustomToolbarButton";

import * as styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <h2 className={styles.appHeadingContainer}>
        CustomToolbarButton Component
      </h2>
      <CustomToolbarButton />
    </div>
  );
};

export default App;
