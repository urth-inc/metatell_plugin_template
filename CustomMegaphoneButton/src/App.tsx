import React from "react";
import { CustomMegaphoneButton } from "./components/CustomMegaphoneButton";

import * as styles from "./App.module.scss";

const App: React.FC = () => {
  const [isActiveMegaphone, setIsActiveMegaphone] = React.useState(false);
  const unmuteMegaphone = async () => {
    setIsActiveMegaphone(true);
  };
  const muteMegaphone = async () => {
    setIsActiveMegaphone(false);
  };

  const props = {
    canMegaphone: true,
    hasMegaphone: true,
    isActiveMegaphone,
    unmuteMegaphone,
    muteMegaphone,
  };

  return (
    <div className={styles.appContainer}>
      <h2 className={styles.appHeadingContainer}>CustomMegaphoneButton Demo</h2>
      <CustomMegaphoneButton {...props} />
    </div>
  );
};

export default App;
