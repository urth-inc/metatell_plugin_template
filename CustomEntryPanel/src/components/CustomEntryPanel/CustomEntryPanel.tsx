import React from "react";
import * as styles from "./CustomEntryPanel.module.scss";

interface CustomEntryPanelProps {
  roomName: string | undefined;
  showJoinRoom: boolean;
  isRoomFull: boolean;
  onJoinRoom: () => void;
  showEnterOnDevice: boolean;
  onEnterOnDevice: () => void;
  showSpectate: boolean;
  onSpectate: () => void;
  showOptions: boolean;
  onOptions: () => void;
  leftImage: React.ReactNode;
  rightImage: React.ReactNode;
  leftMessage: string;
  rightMessage: string;
  termsOfServiceUrl: string | undefined;
  privacyPolicyUrl: string | undefined;
}

export const CustomEntryPanel: React.FC<CustomEntryPanelProps> = ({
  roomName,
  showJoinRoom,
  isRoomFull,
  onJoinRoom,
  showEnterOnDevice,
  onEnterOnDevice,
  showSpectate,
  onSpectate,
  showOptions,
  onOptions,
  leftImage,
  rightImage,
  leftMessage,
  rightMessage,
  termsOfServiceUrl,
  privacyPolicyUrl,
}) => {
  return (
    <div>
      {/* TODO: Implement your custom entry panel here */}
      <h1>Custom Entry Panel</h1>
    </div>
  );
};
