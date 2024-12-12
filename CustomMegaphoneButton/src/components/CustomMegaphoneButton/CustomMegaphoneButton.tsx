import React, { useCallback } from "react";
import classNames from "classnames";

import { MegaphoneIcon } from "../MegaphoneIcon";
import { OffMegaphoneIcon } from "../OffMegaphoneIcon";

import * as styles from "./CustomMegaphoneButton.module.scss";

type Props = {
  hasMegaphone: boolean;
  canMegaphone: boolean;
  isActiveMegaphone: boolean;
  muteMegaphone: () => Promise<void>;
  unmuteMegaphone: () => Promise<void>;
};

export const CustomMegaphoneButton: React.FC<Props> = ({
  hasMegaphone,
  isActiveMegaphone,
  muteMegaphone,
  unmuteMegaphone,
}) => {
  const toggleIsActive = useCallback(async () => {
    if (isActiveMegaphone) {
      await muteMegaphone().catch((error) => {
        console.error("Failed to mute megaphone", error);
      });
    } else {
      await unmuteMegaphone().catch((error) => {
        console.error("Failed to unmute megaphone", error);
      });
    }
  }, [isActiveMegaphone]);

  if (!hasMegaphone) {
    return null;
  }

  return (
    <button
      className={styles.megaphoneButtonContainer}
      onClick={toggleIsActive}
    >
      <div
        className={classNames(styles.megaphoneIconContainer, {
          [`${styles.isOff}`]: !isActiveMegaphone,
        })}
      >
        {isActiveMegaphone ? <MegaphoneIcon /> : <OffMegaphoneIcon />}
      </div>
      <div
        className={classNames(styles.megaphoneButtonLabel, {
          [`${styles.isOff}`]: !isActiveMegaphone,
        })}
      >
        メガホン
      </div>
    </button>
  );
};
