'use client'

import { motion } from 'motion/react'
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '@/lib/site-data'
import { Magnetic } from './magnetic'
import { staggerContainer, staggerItem } from './reveal'

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'Backend Developer',
  'Mobile Developer',
  'Cloud Engineer',
]

const floatingChips = [
  { label: 'TypeScript', className: 'left-[2%] top-[14%]', delay: 0 },
  { label: 'NestJS', className: 'right-[4%] top-[8%]', delay: 0.6 },
  { label: 'Docker', className: 'left-[-4%] bottom-[26%]', delay: 1.1 },
  { label: 'PostgreSQL', className: 'right-[-2%] bottom-[16%]', delay: 1.6 },
]

const codeLines = [
  { indent: 0, tokens: [['const ', 'text-blue'], ['engineer', 'text-foreground'], [' = {', 'text-muted-foreground']] },
  { indent: 1, tokens: [['role', 'text-cyan'], [': ', 'text-muted-foreground'], ["'Full Stack'", 'text-green']] },
  { indent: 1, tokens: [['stack', 'text-cyan'], [': [', 'text-muted-foreground'], ["'React'", 'text-green'], [', ', 'text-muted-foreground'], ["'Node'", 'text-green'], ['],', 'text-muted-foreground']] },
  { indent: 1, tokens: [['ship', 'text-cyan'], [': ', 'text-muted-foreground'], ['() => ', 'text-blue'], ["'scalable apps'", 'text-green']] },
  { indent: 0, tokens: [['}', 'text-muted-foreground']] },
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2600,
    )
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-16 px-6 pb-20 pt-36 lg:flex-row lg:gap-8 lg:pt-40"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex-1 text-center lg:text-left"
      >
        <motion.div variants={staggerItem} className="flex justify-center lg:justify-start">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-violet" />
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={staggerItem}
          className="mt-6 font-heading text-5xl font-bold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          <span className="block text-gradient">{roles[roleIndex]}</span>
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty lg:mx-0"
        >
          I&apos;m {profile.name} — building scalable backend systems, modern web
          applications, AI-powered products, and mobile experiences that feel
          effortless.
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
        >
          <Magnetic>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet to-indigo px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_-10px_rgba(124,58,237,0.8)] transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={profile.socials.resume}
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(12px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex-1"
      >
        <div className="relative mx-auto aspect-square w-full max-w-md">
          {/* Glow orb */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-violet/40 via-blue/30 to-cyan/20 blur-3xl animate-float" />

          {/* Code window */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="glass absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-2xl p-5 shadow-2xl"
          >
            <div className="flex items-center gap-1.5 pb-4">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                engineer.ts
              </span>
            </div>
            <div className="space-y-1.5 font-mono text-xs leading-relaxed sm:text-sm">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.18, duration: 0.5 }}
                  style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                >
                  {line.tokens.map(([text, color], j) => (
                    <span key={j} className={color}>
                      {text}
                    </span>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Floating chips */}
          {floatingChips.map((chip) => (
            <motion.div
              key={chip.label}
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 5 + chip.delay,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: chip.delay,
              }}
              className={`glass absolute ${chip.className} rounded-xl px-3 py-2 font-mono text-xs text-foreground shadow-lg`}
            >
              {chip.label}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
