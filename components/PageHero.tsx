interface PageHeroProps {
  step?: string
  title: string
  intro: string
}

export default function PageHero({ step, title, intro }: PageHeroProps) {
  return (
    <div className="mb-10 pb-8 border-b border-border">
      {step && (
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent-muted px-3 py-1 rounded-full mb-4">
          {step}
        </span>
      )}
      <h1 className="text-3xl sm:text-4xl font-bold text-text mb-4 leading-tight">
        {title}
      </h1>
      <p className="text-lg text-muted leading-relaxed max-w-3xl">{intro}</p>
    </div>
  )
}
