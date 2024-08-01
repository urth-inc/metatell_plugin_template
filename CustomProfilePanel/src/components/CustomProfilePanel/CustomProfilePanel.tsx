import React from "react";
import * as styles from "./CustomProfilePanel.module.scss";

interface CustomProfilePanelProps {
  onClose: () => void;
  displayName: string;
  avatarId: string | undefined;
  avatarThumbnailUrl: string | undefined;
  selectedAvatarId: string | undefined;
  selectedAvatarThumbnailUrl: string | undefined;
  openAvatarSelectModal: () => void;
  saveProfile: ({
    displayName,
    bio,
    avatarId,
  }: {
    displayName?: string;
    bio?: string;
    avatarId?: string;
  }) => void;
}

export const CustomProfilePanel: React.FC<CustomProfilePanelProps> = ({
  onClose,
  openAvatarSelectModal,
  displayName,
  avatarId,
  avatarThumbnailUrl,
  selectedAvatarId,
  selectedAvatarThumbnailUrl,
  saveProfile,
}) => {
  return (
    <div className={styles.customProfilePanelContainer}>
      {/* TODO: Implement your custom entry panel here */}
      <h1>Custom Profile Panel</h1>
      <button onClick={onClose}>Close</button>
      <button onClick={openAvatarSelectModal}>Change Avatar</button>
      <h2>Name: {displayName}</h2>
      <img
        src={selectedAvatarId ? selectedAvatarThumbnailUrl : avatarThumbnailUrl}
        alt="avatar"
      />
      <button
        onClick={() => {
          saveProfile({
            displayName: "hoge2",
            bio: "fuga2",
            avatarId: selectedAvatarId || avatarId,
          });
        }}
      >
        Save
      </button>
    </div>
  );
};
