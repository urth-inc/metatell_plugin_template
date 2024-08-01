import React from "react";
import { CustomProfilePanel } from "./components/CustomProfilePanel";

import * as styles from "./App.module.scss";

const App: React.FC = () => {
  const dummyProps = {
    onClose: () => console.log("Close button clicked"),
    displayName: "John Doe",
    avatarId: "1",
    avatarThumbnailUrl: undefined,
    selectedAvatarId: "1",
    selectedAvatarThumbnailUrl: undefined,
    openAvatarSelectModal: () => console.log("Open Avatar Select Modal"),
    saveProfile: ({
      displayName,
      bio,
      avatarId,
    }: {
      displayName?: string;
      bio?: string;
      avatarId?: string;
    }) => {
      console.log({ displayName, bio, avatarId });
    },
  };

  return (
    <div className={styles.appContainer}>
      <h2 className={styles.appHeadingContainer}>CustomEntryPanel Component</h2>
      <CustomProfilePanel {...dummyProps} />
    </div>
  );
};

export default App;
