import React from "react";
import { CustomMegaphoneButton } from "./components/CustomMegaphoneButton";

import * as styles from "./App.module.scss";

const App: React.FC = () => {
  const [isActiveMegaphone, setIsActiveMegaphone] = React.useState(false);

  const canMegaphone = true;
  const unmuteMegaphone = async () => {
    setIsActiveMegaphone(true);
  };
  const muteMegaphone = async () => {
    setIsActiveMegaphone(false);
  };
  const mySessionId = "session-123";
  const messageDispatch: EventTarget = new EventTarget();
  const temporalMegaphone = false;
  const requestMegaphone = () => {
    console.log("Requesting megaphone");
  };
  const grantMegaphone = async () => {
    console.log("Granting megaphone");
  };
  const revokeMegaphone = async () => {
    console.log("Revoking megaphone");
  };
  const approveMegaphoneRequest = (sessionId: string) => {
    console.log("Approving megaphone request for session", sessionId);
  };

  const props = {
    canMegaphone,
    isActiveMegaphone,
    muteMegaphone,
    unmuteMegaphone,
    mySessionId,
    messageDispatch,
    temporalMegaphone,
    requestMegaphone,
    grantMegaphone,
    revokeMegaphone,
    approveMegaphoneRequest,
  };

  return (
    <div className={styles.appContainer}>
      <h2 className={styles.appHeadingContainer}>CustomMegaphoneButton Demo</h2>
      <CustomMegaphoneButton {...props} />
    </div>
  );
};

export default App;
