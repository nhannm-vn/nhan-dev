'use client'

import { motion } from 'motion/react'
import { GraduationCap, Target, Rocket } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { Counter } from './counter'
import { TiltCard } from './tilt-card'
import { stats, timeline } from '@/lib/site-data'

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="About"
        title="Engineering products with craft and depth"
        description="An IT student and software engineer who cares as much about clean architecture as pixel-perfect experiences."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-5">
        {/* Story */}
        <Reveal direction="right" className="lg:col-span-3">
          <TiltCard className="h-full rounded-3xl">
            <div className="glass flex h-full flex-col justify-between rounded-3xl p-8">
              <div>
                <h3 className="font-heading text-2xl font-semibold">My story</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  I fell in love with software the moment I realized a few lines
                  of code could turn an idea into something real. Since then I&apos;ve
                  been obsessed with building systems that are fast, reliable, and
                  a delight to use — from the database layer all the way to the
                  final interaction.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Today I work across the entire stack, designing REST APIs with
                  NestJS and ASP.NET Core, modeling data in PostgreSQL and
                  MongoDB, and crafting animated frontends with React and React
                  Native.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { icon: GraduationCap, label: 'BSc Information Technology' },
                  { icon: Target, label: 'Backend & Cloud focus' },
                  { icon: Rocket, label: 'Shipping since 2021' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet/30 to-blue/20 text-violet">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>
        </Reveal>

        {/* Timeline */}
        <Reveal direction="left" className="lg:col-span-2">
          <div className="glass h-full rounded-3xl p-8">
            <h3 className="font-heading text-2xl font-semibold">Journey</h3>
            <ol className="relative mt-6 space-y-6 border-l border-border pl-6">
              {timeline.map((item, i) => (
                <motion.li
                  key={item.year}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="relative"
                >
                  <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-violet to-blue shadow-[0_0_12px_rgba(124,58,237,0.8)]" />
                  <span className="font-mono text-xs text-cyan">{item.year}</span>
                  <h4 className="mt-1 text-sm font-semibold">{item.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} direction="up" delay={i * 0.08}>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="font-heading text-4xl font-bold text-gradient">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
