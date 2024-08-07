import React from "react";
import { CustomWebCameraButton } from "./components/CustomWebCameraButton";

import * as styles from "./App.module.scss";

const App: React.FC = () => {
  const dummyProps = {
    canShareCamera: true,
    toggleShareCamera: () => {},
    canShareCameraToAvatar: true,
    toggleShareCameraToAvatar: () => {},
  };

  return (
    <div className={styles.appContainer}>
      <h2 className={styles.appHeadingContainer}>
        CustomWebCameraButton Component
      </h2>
      <CustomWebCameraButton {...dummyProps} />
    </div>
  );
};

export default App;
