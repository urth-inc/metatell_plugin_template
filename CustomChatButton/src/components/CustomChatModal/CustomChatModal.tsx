import React, { useState } from "react";
import Modal from "react-modal";

import * as styles from "./CustomChatModal.module.scss";

Modal.setAppElement("#ui-root");

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
  sendMessage: (message: string) => void;
  MessageGroups: any[]; // TODO: Define the type
  canSpawnMessages: boolean;
  onUploadFiles: (event: React.ChangeEvent<HTMLInputElement>) => void;
  spawnChatMessage: (message: string) => void;
};

export const CustomChatModal: React.FC<Props> = ({
  modalIsOpen,
  closeModal,
  sendMessage,
  messageGroups,
  onUploadFiles,
  canSpawnMessages,
  spawnChatMessage,
}) => {
  const [message, setMessage] = useState("");
  const handleClick = () => {
    sendMessage(message);
    setMessage("");
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    >
      <div className={styles.modalHeader}>
        <div className={styles.modalTitle}>Example Modal</div>
      </div>

      <div className={styles.modalBody}>
        <p>This is a example Modal for demo</p>
      </div>
      {messageGroups?.map((message, id) => (
        <div key={id}>
          <div>{message.type}</div>
          {message?.messages?.map((_message, id) => (
            <div key={id}>
              <div>{_message?.body}</div>
              <div>{_message?.timestamp}</div>
            </div>
          ))}
        </div>
      ))}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleClick}>Send</button>
      <input
        type="file"
        disabled={!canSpawnMessages}
        onChange={onUploadFiles}
      />
      <button
        onClick={() => {
          spawnChatMessage(message);
          setMessage("");
        }}
      >
        Spawn Message
      </button>
    </Modal>
  );
};
