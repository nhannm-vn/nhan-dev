export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items]
  return (
    <div className="relative flex overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex shrink-0 animate-marquee items-center gap-4">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full glass px-5 py-2 font-mono text-sm text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
