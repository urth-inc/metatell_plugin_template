import classNames from "classnames";
import React from "react";

import styles from "./ToolbarButton.module.scss";

export const presets = [
  "basic",
  "transparent",
  "accept",
  "cancel",
  "accent1",
  "accent2",
  "accent3",
  "accent4",
  "accent5",
  "urth-staff-red",
  "urth-staff-green-onclick",
  "urth-staff-blue-onclick",
  "audio-button",
  "screenSelected",
];

export const types = ["none", "left", "middle", "right"];
export const statusColors = ["recording", "unread", "enabled", "disabled"];

type Props = {
  icon: React.ReactNode;
  label?: React.ReactNode;
  selected?: boolean;
  preset?: (typeof presets)[number];
  statusColor?: (typeof statusColors)[number];
  large?: boolean;
  className?: string;
  iconContainerClassName?: string;
  children?: React.ReactNode;
  type?: (typeof types)[number];
};

export const ToolbarButton: React.FC<Props> = ({
  preset = "basic",
  className,
  iconContainerClassName,
  children,
  icon,
  label,
  selected,
  large,
  statusColor,
  type,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        styles?.toolbarButton,
        styles?.[preset],
        styles?.[type],
        { [styles?.selected]: selected, [styles.large]: large },
        className,
      )}
      {...rest}
    >
      <div
        className={classNames(
          styles.iconContainer,
          iconContainerClassName,
          styles["status-" + statusColor],
        )}
        aria-hidden="true"
      >
        {icon}
        {children}
      </div>
      {label && <label>{label}</label>}
    </button>
  );
};
