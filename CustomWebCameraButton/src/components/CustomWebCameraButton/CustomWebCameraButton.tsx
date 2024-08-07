import React, { useState, useEffect, useRef } from "react";
import { Tooltip } from "react-tooltip";

import { SampleIcon } from "./SampleIcon";
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
  const [isOpen, setIsOpen] = React.useState(false);

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

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    if (canShareCamera) {
      toggleShareCamera();
    }
    if (canShareCameraToAvatar) {
      toggleShareCameraToAvatar();
    }
  };

  const content = (
    <>
      <div>Webカメラ</div>
      <div>
        <SampleIcon />
      </div>
      <div>
        <SampleIcon />
      </div>
    </>
  );

  return (
    <>
      <button
        id="clickable"
        className={styles.customLeaveButtonContainer}
        onClick={handleClick}
        ref={buttonRef}
      >
        <div className={styles.sampleIconContainer}>
          <SampleIcon />
        </div>
        <div className={styles.customLeaveButtonLabel}>Webカメラ</div>
      </button>
      <div ref={tooltipRef}>
        <Tooltip
          anchorSelect="#clickable"
          clickable
          content={content}
          isOpen={isOpen}
        />
      </div>
    </>
  );
};
