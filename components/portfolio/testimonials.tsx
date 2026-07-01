'use client'

import { Quote } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { TiltCard } from './tilt-card'
import { testimonials } from '@/lib/site-data'

export function Testimonials() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="Testimonials"
        title="Kind words from collaborators"
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.map((item, i) => (
          <Reveal key={item.name} direction="up" delay={i * 0.1}>
            <TiltCard className="h-full rounded-3xl" glow={false}>
              <figure className="glass flex h-full flex-col rounded-3xl p-7">
                <Quote className="h-8 w-8 text-violet/70" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet to-blue text-sm font-semibold text-white">
                    {item.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{item.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.title}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
