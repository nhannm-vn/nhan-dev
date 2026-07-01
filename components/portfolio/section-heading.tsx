import { Reveal } from './reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
}) {
  return (
    <div
      className={
        align === 'center'
          ? 'mx-auto max-w-2xl text-center'
          : 'max-w-2xl text-left'
      }
    >
      <Reveal direction="up">
        <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-violet">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal direction="up" delay={0.08}>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.16}>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
