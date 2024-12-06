import { useState, useEffect, useCallback, useRef } from "react"

export const useReactionTutorial2 = ({
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
  const [reactionIcon, setReactionIcon] = useState<HTMLElement | null>(null)
  useEffect(() => {
    if (!run || index !== stepIndex) {
      return
    }

    const element: HTMLElement | null = document.querySelector("[data-mt='ReactionIcon-0']")
    setReactionIcon(element)

    const observer = new MutationObserver(() => {
      const updatedElement = document.querySelector("[data-mt='ReactionIcon-0']")
      setReactionIcon(updatedElement)
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      observer.disconnect()
    }
  }, [run, stepIndex, index])

  const isProcessingRef = useRef(false)
  const handleReactionIconClickRef = useRef<() => void>(() => {})
  handleReactionIconClickRef.current = useCallback(() => {
    if (!run || index !== stepIndex || isProcessingRef.current) {
      return
    }

    isProcessingRef.current = true
    setHideArrow(false)
    setShowEffect(true)
    setStepIndex(index + 1)
    setTimeout(() => {
      isProcessingRef.current = false
      setShowEffect(false)
    }, 2000)
  }, [run, stepIndex, setStepIndex, setShowEffect, setHideArrow, index])

  useEffect(() => {
    const handleClick = () => {
      handleReactionIconClickRef.current()
    }

    if (reactionIcon) {
      reactionIcon.addEventListener("click", handleClick)
    }

    return () => {
      if (reactionIcon) {
        reactionIcon.addEventListener("click", handleClick)
      }
    }
  }, [reactionIcon])
}
