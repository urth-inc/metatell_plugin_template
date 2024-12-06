import React, { useState, useEffect } from "react";
import Joyride from "react-joyride";

import { ChatContainer } from "./ChatContainer";
import { CongratulationsContainer } from "./CongratulationsContainer";
import { MicrophoneContainer } from "./MicrophoneContainer";
import { ParticleEffect } from "./ParticleEffect";
import { ReactionContainer } from "./ReactionContainer";
import { ReactionContainer2 } from "./ReactionContainer2";

export const CustomTutorial: React.FC = () => {
  const [run, setRun] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);
  const [hideArrow, setHideArrow] = useState(false);
  const [showEffect, setShowEffect] = useState(false);
  const [effectOption, setEffectOption] = useState<"single" | "flow">("single");

  useEffect(() => {
    window.addEventListener("initTutorial", () => {
      setHideArrow(false);
      setStepIndex(0);
      setRun(true);
    });

    return () => {
      window.removeEventListener("initTutorial", () => {
        setHideArrow(false);
        setStepIndex(0);
        setRun(true);
      });
    };
  }, [stepIndex]);

  const skipTutorial = () => {
    setRun(false);
  };

  const steps = [
    {
      target: "[data-mt='ReactionPopoverContainer']",
      content: (
        <ReactionContainer
          index={0}
          skipTutorial={skipTutorial}
          stepIndex={stepIndex}
          run={run}
          setStepIndex={setStepIndex}
          setShowEffect={setShowEffect}
          setHideArrow={setHideArrow}
        />
      ),
      disableBeacon: true,
    },
    {
      target: "[data-mt='ReactionIcon-0']",
      content: (
        <ReactionContainer2
          index={1}
          skipTutorial={skipTutorial}
          stepIndex={stepIndex}
          run={run}
          setStepIndex={setStepIndex}
          setShowEffect={setShowEffect}
          setHideArrow={setHideArrow}
        />
      ),
      disableBeacon: true,
      placement: "left-start",
    },
    {
      target: "[data-mt='ToolbarMicButton']",
      content: (
        <MicrophoneContainer
          index={2}
          skipTutorial={skipTutorial}
          stepIndex={stepIndex}
          run={run}
          setStepIndex={setStepIndex}
          setShowEffect={setShowEffect}
          setHideArrow={setHideArrow}
        />
      ),
      disableBeacon: true,
    },
    {
      target: "[data-mt='ChatToolbarButtonContainer']",
      content: (
        <ChatContainer
          index={3}
          skipTutorial={skipTutorial}
          stepIndex={stepIndex}
          run={run}
          setStepIndex={setStepIndex}
          setShowEffect={setShowEffect}
          setHideArrow={setHideArrow}
        />
      ),
      disableBeacon: true,
    },
    {
      target: "[data-mt='Toolbar']",
      content: (
        <CongratulationsContainer
          index={4}
          doneTutorial={skipTutorial}
          stepIndex={stepIndex}
          run={run}
          setShowEffect={setShowEffect}
          setHideArrow={setHideArrow}
          setEffectOption={setEffectOption}
        />
      ),
      disableBeacon: true,
    },
  ];

  return (
    <div data-mt="TutorialContainer">
      <Joyride
        run={run}
        hideCloseButton
        floaterProps={{ hideArrow }}
        styles={{
          options: {
            backgroundColor: "#0BA0E8",
            arrowColor: "#0BA0E8",
            textColor: "white",
          },
          buttonNext: {
            display: "none",
          },
        }}
        /* @ts-expect-error - type missmatch */
        steps={steps}
        stepIndex={stepIndex}
        continuous={true}
        disableOverlay={true}
        disableCloseOnEsc={true}
        disableOverlayClose={true}
        hideBackButton={true}
      />
      <ParticleEffect show={showEffect} option={effectOption} />
    </div>
  );
};
