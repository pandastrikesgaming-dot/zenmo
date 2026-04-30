type FeatureCardProps = {
  title: string;
  description: string;
  accent: string;
};

export function FeatureCard({ title, description, accent }: FeatureCardProps) {
  return (
    <article className="group min-h-64 border border-white/10 bg-white/[0.035] p-5 shadow-premium-card backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-ember/50 hover:bg-white/[0.06]">
      <div
        className={`h-1.5 w-16 bg-gradient-to-r ${accent} transition duration-300 group-hover:w-24`}
      />
      <div className="mt-12 flex h-12 w-12 items-center justify-center border border-white/10 bg-black/35">
        <span className="h-3 w-3 bg-solar shadow-[0_0_24px_rgba(255,213,106,0.6)]" />
      </div>
      <h3 className="mt-8 text-xl font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-stone-300">{description}</p>
    </article>
  );
}
