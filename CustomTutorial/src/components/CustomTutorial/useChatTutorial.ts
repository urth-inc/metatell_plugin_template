import { useEffect, useRef, useCallback } from "react"

export const useChatTutorial = ({
  index,
  run,
  stepIndex,
  setStepIndex,
  setShowEffect,
  setHideArrow
}: {
  index: number
  run: boolean
  stepIndex: number
  setStepIndex: (value: number) => void
  setShowEffect: (value: boolean) => void
  setHideArrow: (value: boolean) => void
}) => {
  const chatButton: HTMLElement | null = document.querySelector("[data-mt='ChatToolbarButtonContainer']")
  const handleChatButtonClickRef = useRef<() => void>(() => {})

  const isProcessingRef = useRef(false)
  handleChatButtonClickRef.current = useCallback(() => {
    if (!run || index !== stepIndex || isProcessingRef.current) {
      return
    }

    isProcessingRef.current = true
    setHideArrow(false)
    setShowEffect(true)
    setTimeout(() => {
      setShowEffect(false)
      setStepIndex(index + 1)
      isProcessingRef.current = false
    }, 2000)
  }, [run, stepIndex, setStepIndex, setShowEffect, setHideArrow, index])

  useEffect(() => {
    const handleClick = () => {
      handleChatButtonClickRef.current()
    }

    if (chatButton) {
      chatButton.addEventListener("click", handleClick)
    }

    return () => {
      if (chatButton) {
        chatButton.removeEventListener("click", handleClick)
      }
    }
  }, [chatButton])
}
