import React from "react";
import Modal from "react-modal";

import * as styles from "./CustomProfileModal.module.scss";

Modal.setAppElement("#ui-root");

interface CustomProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  displayName: string;
  bio: string;
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

export const CustomProfileModal: React.FC<CustomProfileModalProps> = ({
  isOpen,
  onClose,
  displayName,
  bio,
  avatarId,
  openAvatarSelectModal,
  avatarThumbnailUrl,
  selectedAvatarId,
  selectedAvatarThumbnailUrl,
  saveProfile,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    >
      <div className={styles.modalHeader}>
        <div className={styles.modalTitle}>Example Modal</div>
      </div>

      <div className={styles.modalBody}>
        <p>This is a example Modal for demo</p>
        <button onClick={onClose}>Close</button>
        <h2>Name: {displayName}</h2>
        <h2>bio: {bio}</h2>
        <h2>Avatar: {selectedAvatarId ?? avatarId}</h2>
        <button onClick={openAvatarSelectModal}>Change Avatar</button>
        <img
          src={selectedAvatarThumbnailUrl ?? avatarThumbnailUrl}
          alt="avatar"
        />
        <button
          onClick={() => {
            saveProfile({
              displayName: "New Name",
              avatarId: selectedAvatarId,
            });
            onClose();
          }}
        >
          Save
        </button>
      </div>
    </Modal>
  );
};
