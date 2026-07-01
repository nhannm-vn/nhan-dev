'use client'

import { motion } from 'motion/react'
import { Briefcase } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { experience } from '@/lib/site-data'

export function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="Experience"
        title="A track record of shipping"
        description="Roles and milestones that shaped how I design, build, and deliver software."
      />

      <div className="relative mt-16">
        {/* Center glowing line */}
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-violet via-blue to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-10">
          {experience.map((item, i) => {
            const left = i % 2 === 0
            return (
              <div
                key={item.role}
                className={`relative flex ${
                  left ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Node */}
                <span className="absolute left-4 top-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-violet to-blue shadow-[0_0_16px_rgba(124,58,237,0.9)] md:left-1/2" />

                <motion.div
                  initial={{ opacity: 0, x: left ? -40 : 40, filter: 'blur(8px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="ml-10 w-full md:ml-0 md:w-[45%]"
                >
                  <div className="glass rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet/30 to-blue/20 text-violet">
                        <Briefcase className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs text-cyan">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-blue">
                      {item.company}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
