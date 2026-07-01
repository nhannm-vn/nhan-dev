'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Download, Send, Check } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { Magnetic } from './magnetic'
import { GithubIcon, LinkedinIcon, FacebookIcon } from './brand-icons'
import { profile } from '@/lib/site-data'

const socials = [
  { icon: GithubIcon, label: 'GitHub', href: profile.socials.github },
  { icon: LinkedinIcon, label: 'LinkedIn', href: profile.socials.linkedin },
  { icon: Mail, label: 'Email', href: `mailto:${profile.email}` },
  { icon: FacebookIcon, label: 'Facebook', href: profile.socials.facebook },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something great"
        description="Have a role or project in mind? I'm always open to a good conversation."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-5">
        {/* Info */}
        <Reveal direction="right" className="lg:col-span-2">
          <div className="glass flex h-full flex-col justify-between rounded-3xl p-8">
            <div>
              <h3 className="font-heading text-2xl font-semibold">
                Get in touch
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Whether it&apos;s a full-time position, a contract, or a bold idea
                you want to ship — my inbox is open.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan hover:underline"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <Magnetic key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white/[0.03] text-muted-foreground transition-all hover:border-violet/50 hover:text-foreground"
                    >
                      <s.icon className="h-5 w-5" />
                    </a>
                  </Magnetic>
                ))}
              </div>
              <a
                href={profile.socials.resume}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl glass px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal direction="left" className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-violet/60"
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-violet/60"
                />
              </Field>
            </div>
            <Field label="Subject" htmlFor="subject" className="mt-5">
              <input
                id="subject"
                name="subject"
                placeholder="Let's work together"
                className="w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-violet/60"
              />
            </Field>
            <Field label="Message" htmlFor="message" className="mt-5">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or role..."
                className="w-full resize-none rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-violet/60"
              />
            </Field>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet to-indigo px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_-10px_rgba(124,58,237,0.8)] transition-transform hover:scale-[1.01]"
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> Message sent
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send message
                </>
              )}
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
