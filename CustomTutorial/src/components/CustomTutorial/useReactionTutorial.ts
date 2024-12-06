import { useEffect, useCallback, useRef } from "react";

export const useReactionTutorial = ({
  run,
  index,
  stepIndex,
  setStepIndex,
  setShowEffect,
}: {
  run: boolean;
  index: number;
  stepIndex: number;
  setStepIndex: (value: number) => void;
  setShowEffect: (value: boolean) => void;
}) => {
  const reactionButton: HTMLElement | null = document.querySelector(
    "[data-mt='ReactionPopoverContainer']",
  );

  const isProcessingRef = useRef(false);
  const handleReactionButtonClickRef = useRef<() => void>(() => {});
  handleReactionButtonClickRef.current = useCallback(() => {
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
      handleReactionButtonClickRef.current();
    };

    if (reactionButton) {
      reactionButton.addEventListener("click", handleClick);
    }

    return () => {
      if (reactionButton) {
        reactionButton.removeEventListener("click", handleClick);
      }
    };
  }, [reactionButton]);
};
