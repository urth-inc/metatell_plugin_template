import React, { useState, useEffect, useRef } from "react";
import { Tooltip } from "react-tooltip";

import { VideoDisabledIcon } from "./VideoDisabledIcon";
import { VideoEnabledIcon } from "./VideoEnabledIcon";
import { AvatarCameraIcon } from "./AvatarCameraIcon";
import { CameraIcon } from "./CameraIcon";
import * as styles from "./CustomWebCameraButton.module.scss";

interface CustomWebCameraButtonProps {
  canShareCamera: boolean;
  toggleShareCamera: () => void;
  canShareCameraToAvatar: boolean;
  toggleShareCameraToAvatar: () => void;
}

export const CustomWebCameraButton: React.FC<CustomWebCameraButtonProps> = ({
  canShareCamera,
  toggleShareCamera,
  canShareCameraToAvatar,
  toggleShareCameraToAvatar,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonRef: React.RefObject<HTMLButtonElement> = useRef(null);
  const tooltipRef: React.RefObject<HTMLDivElement> = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    const isClickedInsideButton = buttonRef.current?.contains(
      event.target as Node,
    );
    const isClickedInsideTooltip = tooltipRef.current?.contains(
      event.target as Node,
    );

    const isClickedOutside = !isClickedInsideButton && !isClickedInsideTooltip;

    if (isClickedOutside) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isCameraEnabled, setIsCameraEnabled] = useState(false);
  const [isAvatarCameraEnabled, setIsAvatarCameraEnabled] = useState(false);
  const handleClickShareCamera = () => {
    setIsCameraEnabled(!isCameraEnabled);
    if (isAvatarCameraEnabled) {
      setIsAvatarCameraEnabled(false);
    }

    toggleShareCamera();
    setIsOpen(false);
  };

  const handleClickShareCameraToAvatar = () => {
    setIsAvatarCameraEnabled(!isAvatarCameraEnabled);
    if (isCameraEnabled) {
      setIsCameraEnabled(false);
    }

    toggleShareCameraToAvatar();
    setIsOpen(false);
  };

  const handleClick = () => {
    if (isCameraEnabled) {
      toggleShareCamera();
      setIsCameraEnabled(false);
      return;
    }

    if (isAvatarCameraEnabled) {
      toggleShareCameraToAvatar();
      setIsAvatarCameraEnabled(false);
      return;
    }

    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const content = (
    <div className={styles.customWebCameraPopupContainer}>
      <div>Webカメラ</div>
      <div className={styles.actionButtonContainer}>
        {canShareCamera && (
          <button
            className={styles.actionButton}
            onClick={handleClickShareCamera}
          >
            <div className={styles.iconContainer}>
              <CameraIcon />
            </div>
            <div>カメラ</div>
          </button>
        )}
        {canShareCameraToAvatar && (
          <button
            className={styles.actionButton}
            onClick={handleClickShareCameraToAvatar}
          >
            <div className={styles.iconContainer}>
              <AvatarCameraIcon />
            </div>
            <div>アバターカメラ</div>
          </button>
        )}
      </div>
    </div>
  );

  return (
    <>
      <button
        ref={buttonRef}
        id="clickable"
        className={styles.customWebCameraButtonContainer}
        onClick={handleClick}
      >
        <div className={styles.iconContainer}>
          {isCameraEnabled || isAvatarCameraEnabled ? (
            <VideoEnabledIcon />
          ) : (
            <VideoDisabledIcon />
          )}
        </div>
        {isCameraEnabled || isAvatarCameraEnabled ? (
          <div className={styles.customWebCameraButtonLabelText}>Webカメラ</div>
        ) : (
          <div className={styles.customWebCameraButtonLabelTextDisabled}>
            Webカメラ
          </div>
        )}
      </button>
      <div ref={tooltipRef}>
        <Tooltip
          anchorSelect="#clickable"
          clickable
          isOpen={isOpen}
          offset={20}
        >
          {content}
        </Tooltip>
      </div>
    </>
  );
};
