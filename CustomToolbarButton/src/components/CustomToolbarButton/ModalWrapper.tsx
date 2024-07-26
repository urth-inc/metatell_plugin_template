import classNames from "classnames";
import React, { memo } from "react";

import * as styles from "./ModalWrapper.scss";
import { OverlayModal } from "./OverlayModal";

import type { ModalProps } from "./OverlayModal";

type Props = ModalProps & {
  onMouseMove?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onFullScreen?: () => void;
  onExitFullScreen?: () => void;
  useFullScreen?: boolean;
};

// TODO 拡大アイコンなどを追加する

export const ModalWrapper: React.FC<Props> = memo(
  ({
    className,
    isOpen,
    onClose,
    children,
    onMouseMove,
    onMouseLeave,
    overlayClassName,
    onFullScreen,
    onExitFullScreen,
    overlayColor = "black",
    isHiddenTransition = false,
    isOutsideCloseButton = false,
    useFullScreen = false,
  }: Props) => {
    return (
      <div onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
        <OverlayModal
          isOpen={isOpen}
          onClose={onClose}
          className={classNames(className)}
          overlayClassName={classNames(
            styles.modalOverlay,
            overlayClassName,
            styles[overlayColor],
          )}
          isHiddenTransition={isHiddenTransition}
          isOutsideCloseButton={isOutsideCloseButton}
          useFullScreen={useFullScreen}
          onFullScreen={onFullScreen}
          onExitFullScreen={onExitFullScreen}
        >
          <div className={styles.modalContents}>{children}</div>
        </OverlayModal>
      </div>
    );
  },
);

ModalWrapper.displayName = "ModalWrapper";
