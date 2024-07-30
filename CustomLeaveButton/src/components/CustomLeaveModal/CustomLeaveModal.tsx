import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import * as styles from "./CustomLeaveModal.module.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#ui-root");

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
};

export const CustomLeaveModal: React.FC<Props> = ({
  modalIsOpen,
  closeModal,
}) => {
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
    </Modal>
  );
};
