type Stat = { value: string; label: string };

export function StatsRow({ stats, className = 'py-xl bg-surface-container' }: { stats: Stat[]; className?: string }) {
  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-xl">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-display-lg text-primary mb-xs">{stat.value}</div>
            <p className="font-label-md text-label-md text-on-surface-variant uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
