'use client'

import { motion } from 'motion/react'
import {
  Layers,
  Server,
  Database,
  Cloud,
  Boxes,
  Wrench,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal, staggerContainer, staggerItem } from './reveal'
import { Marquee } from './marquee'
import { techStack } from '@/lib/site-data'

const icons = [Layers, Server, Database, Cloud, Boxes, Wrench]

export function TechStack() {
  return (
    <section id="stack" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="Tech Stack"
        title="The tools I build with"
        description="A modern, battle-tested toolkit spanning frontend, backend, databases, and cloud infrastructure."
      />

      <div className="mt-12">
        <Marquee items={techStack.flatMap((g) => g.items)} />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group, gi) => {
          const Icon = icons[gi % icons.length]
          return (
            <Reveal key={group.category} direction="up" delay={gi * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-3xl glass p-6 transition-transform duration-300 hover:-translate-y-1.5">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet/30 to-blue/20 text-violet">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold">
                    {group.category}
                  </h3>
                </div>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {group.items.map((item) => (
                    <motion.li
                      key={item}
                      variants={staggerItem}
                      className="rounded-lg border border-border bg-white/[0.03] px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-violet/50 hover:text-foreground"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
