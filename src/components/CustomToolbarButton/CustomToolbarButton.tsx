import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import styles from "./CustomToolbarButton.module.scss";
import { ToolbarButton } from "./ToolbarButton";

import { IframeModal } from "./IframeModal";

import type { IconProp } from "@fortawesome/fontawesome-svg-core";

type IframeModalToolbarButtonProps = {
  onClick: () => void;
  label: string;
};

const IframeModalToolbarButton = (props: IframeModalToolbarButtonProps) => {
  return (
    <ToolbarButton
      onClick={props.onClick}
      icon={
        <FontAwesomeIcon
          className={styles?.icon}
          icon={faQuestion as IconProp}
        />
      }
      preset="accent4"
      label={props.label}
    />
  );
};

const IframeModalContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log("open modal");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("close modal");
    setIsModalOpen(false);
  };

  return (
    <div>
      <IframeModalToolbarButton onClick={handleOpenModal} label="ヘルプ" />
      {isModalOpen && <IframeModal onClose={handleCloseModal} />}
    </div>
  );
};

export { IframeModalContainer };
