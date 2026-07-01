'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export function AnimatedBackground() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 60, damping: 20 })
  const sy = useSpring(y, { stiffness: 60, damping: 20 })

  useEffect(() => {
    function onMove(e: MouseEvent) {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [x, y])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-background" />

      {/* Aurora blobs */}
      <div className="absolute -left-[10%] top-[-15%] h-[55vh] w-[55vh] rounded-full bg-violet/25 blur-[120px] animate-aurora" />
      <div className="absolute right-[-10%] top-[10%] h-[50vh] w-[50vh] rounded-full bg-blue/20 blur-[130px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-[-15%] left-[30%] h-[50vh] w-[50vh] rounded-full bg-cyan/15 blur-[130px] animate-aurora [animation-delay:-3s]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      {/* Cursor spotlight */}
      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full"
        style={{
          left: sx,
          top: sy,
          translateX: '-50%',
          translateY: '-50%',
          background:
            'radial-gradient(circle, rgba(124,58,237,0.16), rgba(59,130,246,0.08) 45%, transparent 70%)',
        }}
      />

      {/* Noise texture */}
      <div className="noise absolute inset-0 opacity-[0.035] mix-blend-soft-light" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(3,7,18,0.7)_100%)]" />
    </div>
  )
}
