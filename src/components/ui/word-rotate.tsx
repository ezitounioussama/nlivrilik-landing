"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

interface WordRotateProps {
  words: string[]
  duration?: number
  motionProps?: MotionProps
  className?: string
}

export function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    // Clean up interval on unmount
    return () => clearInterval(interval)
  }, [words, duration])

  return (
    // Stacked grid crossfade: the exiting and entering words share the same
    // cell, so the line never collapses and surrounding text never jumps.
    // Every word is also rendered as an invisible sizer in that cell, so the
    // cell is always as wide as the longest word — the heading keeps the same
    // line wrapping (and page height) no matter which word is showing.
    <span className="inline-grid justify-items-start align-baseline [&>span]:[grid-area:1/1]">
      {words.map((word) => (
        <span
          key={word}
          aria-hidden
          className={cn("invisible inline-block whitespace-nowrap", className)}
        >
          {word}
        </span>
      ))}
      <AnimatePresence initial={false}>
        <motion.span
          key={words[index]}
          className={cn("inline-block whitespace-nowrap", className)}
          {...motionProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
