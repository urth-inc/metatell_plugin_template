import { faCompress } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

import * as styles from "./Button.scss";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { FC } from "react";

type Props = {
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  variant?: "primary" | "secondary" | "none";
  size?: "sm" | "lg" | "2x";
  title?: string;
};

export const CompressButton: FC<Props> = ({
  className,
  disabled,
  onClick,
  variant = "primary",
  size = "lg",
  title = "縮小",
}: Props) => {
  return (
    <button
      type="button"
      className={classNames(
        className,
        styles.closeButton,
        styles[variant],
        styles[size],
      )}
      disabled={disabled}
      onClick={onClick}
      title={title}
    >
      <FontAwesomeIcon icon={faCompress as IconDefinition} size={size} />
    </button>
  );
};
