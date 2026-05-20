'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right' | 'none'
}

export default function AnimateOnScroll({ children, delay = 0, className = '', direction = 'up' }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const controls = useAnimation()

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 24 : 0,
      x: direction === 'left' ? -24 : direction === 'right' ? 24 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay },
    },
  }

  useEffect(() => {
    if (isInView) controls.start('visible')
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
