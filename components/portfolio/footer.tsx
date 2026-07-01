import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, FacebookIcon } from './brand-icons'
import { navLinks, profile } from '@/lib/site-data'

const socials = [
  { icon: GithubIcon, label: 'GitHub', href: profile.socials.github },
  { icon: LinkedinIcon, label: 'LinkedIn', href: profile.socials.linkedin },
  { icon: Mail, label: 'Email', href: `mailto:${profile.email}` },
  { icon: FacebookIcon, label: 'Facebook', href: profile.socials.facebook },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-blue text-sm font-bold text-white">
            {profile.initials}
          </span>
          <span className="font-heading text-sm font-semibold">
            {profile.name}
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-violet/50 hover:text-foreground"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. Crafted with precision.
      </div>
    </footer>
  )
}
