const ranges = [
  {
    name: "Snack Pouches",
    desc: "Single-fruit and blends in 20–40g pouches. Clean label, family-friendly, on-the-go.",
    bullets: ["Strawberry • Mango • Banana", "No added sugar", "Resealable pouches"],
  },
  {
    name: "Culinary Ingredients",
    desc: "Pieces, powders and whole slices for baking, pastry, cereal and dairy applications.",
    bullets: ["Powders for macarons & buttercreams", "Inclusions for cereal & granola", "Decoration & garnish"],
  },
  {
    name: "Foodservice & Bulk",
    desc: "Larger format bags and custom cuts for cafes, bakeries and manufacturers.",
    bullets: ["1–5kg formats", "Custom specs on request", "Consistent quality"],
  },
];

export default function Ranges() {
  return (
    <section id="ranges" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_400px_at_10%_80%,rgba(16,185,129,0.12),transparent),radial-gradient(600px_400px_at_90%_70%,rgba(139,92,246,0.10),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Product Ranges</h2>
          <p className="mt-3 text-white/70">From snack-ready pouches to professional-grade ingredients.</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {ranges.map((r) => (
            <div key={r.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white text-lg font-medium">{r.name}</h3>
              <p className="mt-2 text-sm text-white/70">{r.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-white/80">
                {r.bullets.map((b) => (
                  <li key={b} className="pl-4 relative before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-300/80">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
