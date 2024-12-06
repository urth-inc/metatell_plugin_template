import { useEffect, useRef, useCallback } from "react";

export const useMicrophoneTutorial = ({
  index,
  run,
  stepIndex,
  setStepIndex,
  setShowEffect,
}: {
  index: number;
  run: boolean;
  stepIndex: number;
  setStepIndex: (value: number) => void;
  setShowEffect: (value: boolean) => void;
}) => {
  const microphoneButton: HTMLElement | null = document.querySelector(
    "[data-mt='ToolbarMicButton']",
  );

  const handleMicrophoneButtonClickRef = useRef<() => void>(() => {});
  const isProcessingRef = useRef(false);

  handleMicrophoneButtonClickRef.current = useCallback(() => {
    if (!run || index !== stepIndex || isProcessingRef.current) {
      return;
    }

    isProcessingRef.current = true;
    setShowEffect(true);
    setStepIndex(index + 1);
    setTimeout(() => {
      isProcessingRef.current = false;
      setShowEffect(false);
    }, 2000);
  }, [run, stepIndex, setStepIndex, setShowEffect, index]);

  useEffect(() => {
    const handleClick = () => {
      handleMicrophoneButtonClickRef.current();
    };

    if (microphoneButton) {
      microphoneButton.addEventListener("click", handleClick);
    }

    return () => {
      if (microphoneButton) {
        microphoneButton.removeEventListener("click", handleClick);
      }
    };
  }, [microphoneButton]);
};
