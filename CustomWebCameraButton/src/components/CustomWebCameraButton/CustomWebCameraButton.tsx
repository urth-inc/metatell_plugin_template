import React, { useState } from "react";

import { SampleIcon } from "./SampleIcon";
import * as styles from "./CustomWebCameraButton.module.scss";

interface CustomWebCameraButtonProps {
  showDefaultModal: () => void;
  destinationUrl: string;
}

export const CustomWebCameraButton: React.FC<CustomWebCameraButtonProps> = ({
  showDefaultModal,
  destinationUrl,
}) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    // showDefaultModal();
    openModal();
  };

  return (
    <>
      <button
        className={styles.customLeaveButtonContainer}
        onClick={handleClick}
      >
        <div className={styles.sampleIconContainer}>
          <SampleIcon />
        </div>
        <div className={styles.customLeaveButtonLabel}>Webカメラ</div>
      </button>
    </>
  );
};
