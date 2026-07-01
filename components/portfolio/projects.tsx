'use client'

import { ExternalLink, FileText } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { TiltCard } from './tilt-card'
import { GithubIcon } from './brand-icons'
import { projects } from '@/lib/site-data'

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A showcase of products I've designed and engineered end to end — from architecture to the final animated interface."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} direction="up" delay={(i % 2) * 0.1}>
            <TiltCard className="h-full rounded-3xl">
              <article className="glass flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image || '/placeholder.svg'}
                    alt={`${project.title} preview`}
                    className="h-52 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b1120] to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-cyan">
                    {project.tagline}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet to-indigo px-3.5 py-2 text-xs font-semibold text-white transition-transform hover:scale-[1.04]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-1.5 rounded-lg glass px-3.5 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-white/10"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                    <a
                      href={project.caseStudy}
                      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      Case Study
                    </a>
                  </div>
                </div>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
