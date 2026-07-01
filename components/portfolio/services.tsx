'use client'

import {
  Server,
  Building2,
  Smartphone,
  Globe,
  Cloud,
  Database,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { services } from '@/lib/site-data'

const iconMap: Record<string, LucideIcon> = {
  Server,
  Building2,
  Smartphone,
  Globe,
  Cloud,
  Database,
}

export function Services() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="Services"
        title="What I can build for you"
        description="Full-cycle software engineering — from the first schema to production deployment."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] ?? Globe
          return (
            <Reveal key={service.title} direction="up" delay={(i % 3) * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl glass p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-violet/40">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-violet/30 to-blue/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet/30 to-blue/20 text-violet transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
